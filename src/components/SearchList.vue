<template>
  <div class="flex items-center justify-center text-white mt-5 gap-[1px]">
    <div
      v-for="(search, index) in searchs"
      :key="index"
      @click="selectSearch(search, index)"
      class="p-2 first-of-type:rounded-l-lg last-of-type:rounded-r-lg hover:rounded-lg transition-all cursor-pointer"
      :class="{
        'linear-background rounded-lg text-black': selectedSearch === index,
        'bg-light-night-dark text-white hover:rounded-2xl hover:bg-light-white':
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
