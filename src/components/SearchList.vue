<template>
  <div
    class="flex lg:flex-row flex-col items-stretch lg:items-center justify-center text-white mt-5 gap-[1px] w-10/12 lg:w-auto mx-auto mb-4 lg:mb-0"
  >
    <div
      v-for="(search, index) in searchs"
      :key="index"
      @click="selectSearch(search, index)"
      class="p-2 lg:first-of-type:rounded-l-lg lg:last-of-type:rounded-r-lg hover:rounded-lg transition-all cursor-pointer first-of-type:rounded-t-lg last-of-type:rounded-b-lg"
      :class="{
        'linear-background rounded-lg text-black': selectedSearch === index,
        'bg-light-night-dark text-white hover:rounded-lg hover:bg-light-white':
          selectedSearch !== index,
      }"
    >
      {{ search.cityInfo.city + ", " + search.cityInfo.country }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchs: [],
      selectedSearch: null,
    };
  },
  watch: {
    refreshSearchList() {
      this.refreshList();
    },
  },
  methods: {
    selectSearch(search, index) {
      this.selectedSearch = index;
      this.$store.dispatch("updateCity", search.cityWeather);
      this.$store.dispatch("updateCityImage", search.image);
    },
    refreshList() {
      const store = localStorage.getItem("legal-weather");
      if (!store) {
        this.searchs = [];
      } else {
        this.searchs = JSON.parse(store);
      }
    },
  },
  computed: {
    refreshSearchList() {
      return this.$store.getters["getRefreshSearchList"];
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>
