<template>
  <div class="relative mt-16 max-w-[415px] ml-36">
    <input
      type="text"
      @input="search"
      v-model="searchText"
      :disabled="loadingCity"
      ref="search"
      class="linear-background w-[415px] h-[53px] rounded-xl pl-12 peer"
      @click="
        triggeredInput = true;
        showSearch = true;
      "
      @blur="triggeredInput = false"
    />
    <transition name="slide-right">
      <div
        class="absolute top-1/2 -translate-y-1/2 right-0 scale-75 mt-1"
        v-if="loading || loadingCity"
      >
        <custom-loader />
      </div>
    </transition>
    <transition name="slide-down">
      <div
        @click="selectResult({})"
        v-if="showSearch"
        class="w-full max-h-[180px] bg-white text-black absolute mt-3 rounded-xl overflow-hidden"
      >
        <div
          @click="selectResult(searchResult)"
          v-for="(searchResult, index) in searchResults"
          :key="`s-${index}`"
          class="p-2 hover:bg-grey hover:text-white transition-all cursor-pointer"
        >
          {{ searchResult.city + ", " + searchResult.country }}
        </div>
      </div>
    </transition>
    <img
      @click="
        triggeredInput = true;
        showSearch = true;
      "
      src="@/assets/icons/location.svg"
      class="cursor-pointer w-8 h-8 absolute top-1/2 -translate-y-1/2 transition-all"
      :class="{
        'left-2': triggeredInput || searchText,
        'left-[82px]': !triggeredInput && !searchText,
      }"
    />
    <div
      @click="
        triggeredInput = true;
        showSearch = true;
      "
      class="absolute cursor-pointer -translate-x-1/2 text-[1.25rem] -translate-y-1/2 transition-all font-semibold"
      :class="{
        'left-[86px] top-[-20px] ': triggeredInput || searchText,
        'left-1/2 top-1/2': !triggeredInput && !searchText,
      }"
    >
      Change Location
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import axios from "axios";
import CustomLoader from "@/components/misc/CustomerLoader.vue";

export default {
  components: { CustomLoader },
  methods: {
    addToHistory(cityWeather, image, cityInfo) {
      let store = localStorage.getItem("legal-weather");
      if (!store) {
        store = [];
      } else {
        store = JSON.parse(store);
      }
      store.unshift({ cityWeather, image, cityInfo });
      if (store.length > 5) {
        store.pop();
      }
      localStorage.setItem("legal-weather", JSON.stringify(store));
      this.$store.dispatch("refreshSearchList", true);
    },
    async selectResult(result) {
      this.searchText = result.city + ", " + result.country;
      this.showSearch = false;
      try {
        this.loadingCity = true;
        const req = await axios.get(
          encodeURI(process.env.VUE_APP_ZENSERP_API_ENDPOINT + this.searchText)
        );
        if (req.status == 200) {
          this.$store.dispatch(
            "updateCityImage",
            req.data.image_results[0].sourceUrl
          );
          const weather = await axios.get(
            process.env.VUE_APP_OPENWEATHERMAP_ENDPOINT +
              `lon=${result.lon}&lat=${result.lat}`
          );
          this.loadingCity = false;
          if (weather.status == 200) {
            this.$store.dispatch("updateCity", weather.data);
            this.addToHistory(
              weather.data,
              req.data.image_results[0].sourceUrl,
              result
            );
          }
        }
      } catch (error) {
        alert("An error occured");
        this.loadingCity = false;
      }
    },
    search: _.debounce(async function () {
      if (!this.searchText || this.searchText.length < 3) {
        return;
      }

      try {
        this.loading = true;
        const req = await axios.get(
          process.env.VUE_APP_GEOAPIFY_API_ENDPOINT + this.searchText
        );
        this.loading = false;
        if (req && req.status === 200) {
          this.searchResults = req.data.features
            .map((feature) => {
              return {
                city: feature.properties.city,
                country: feature.properties.country,
                lon: feature.properties.lon,
                lat: feature.properties.lat,
              };
            })
            .reduce((cities, searchResult) => {
              if (
                !cities.find(
                  (c) =>
                    c.city === searchResult.city &&
                    c.country === searchResult.country
                )
              ) {
                cities.push({
                  city: searchResult.city,
                  country: searchResult.country,
                  lon: searchResult.lon.toFixed(2),
                  lat: searchResult.lat.toFixed(2),
                });
              }
              return cities;
            }, []);
        }
      } catch (error) {
        alert("An error occured");
        this.loading = false;
      }
    }, 500),
  },
  watch: {
    triggeredInput(value) {
      if (value) {
        this.$refs["search"].focus();
      } else {
        setTimeout(() => {
          this.showSearch = false;
        }, 300);
        this.$refs["search"].blur();
      }
    },
  },
  data() {
    return {
      loadingCity: false,
      loading: false,
      showSearch: false,
      searchResults: [],
      searchText: "",
      triggeredInput: false,
    };
  },
};
</script>
<style scoped>
.slide-down-enter-active,
.slide-down-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s;
}
.slide-down-enter-to,
.slide-down-leave {
  opacity: 1;
  transform: translateY(0px);
}
.slide-right-enter-to,
.slide-right-leave {
  opacity: 1;
  margin-right: 0px;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-right-enter,
.slide-right-leave-to {
  margin-right: -20px;
  opacity: 0;
}
</style>
