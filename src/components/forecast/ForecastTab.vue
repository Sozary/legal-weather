<template>
  <div class="mt-14">
    <div
      class="mb-4 flex justify-between text-[1.75rem]"
      v-for="forecast in forecastHeader"
      :key="forecast.label"
    >
      <span class="uppercase font-bold">
        {{ forecast.label }}
      </span>
      <span class="font-medium">
        {{ forecast.value }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    forecastHeader() {
      return [
        {
          label: "wind",
          value: this.wind,
        },
        {
          label: "humidity",
          value: this.humidity,
        },
      ];
    },
    currentWeather() {
      if (this.city.list && this.city.list[0]) {
        return this.city.list[0];
      }
      return {};
    },
    humidity() {
      if (this.currentWeather.main) {
        return this.currentWeather.main.humidity + "%";
      }
      return "NaN";
    },
    wind() {
      if (this.currentWeather.wind) {
        return this.currentWeather.wind.speed + " km/h";
      }
      return "NaN";
    },
    city() {
      return this.$store.getters["getCity"];
    },
  },
};
</script>
