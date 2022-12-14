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
    <div class="mt-20 flex gap-[1px]" v-if="city.list">
      <div
        v-for="(forecastItem, index) in city.list.slice(0, 4)"
        :key="forecastItem.dt"
        class="w-[104px] h-[180px] first-of-type:rounded-l-2xl last-of-type:rounded-r-2xl transition-all flex flex-col items-center text-[1.25rem] cursor-pointer"
        :class="{
          'linear-background rounded-2xl text-black':
            selectedForecastIndex === index,
          'bg-light-night-dark text-white hover:rounded-2xl hover:bg-light-white':
            selectedForecastIndex !== index,
        }"
        @click="updateSelectedForecast(index)"
      >
        <img
          :src="`http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`"
          class="w-14 h-14 mt-4"
        />
        <div class="mt-4">
          {{ getDay(forecastItem.dt) }}
        </div>
        <div class="mt-4 font-bold">
          {{ forecastItem.main.temp + " °C" }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getDay(timestamp) {
      return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        new Date(timestamp * 1000)
      );
    },
    updateSelectedForecast(index) {
      this.$store.dispatch("updateSelectedForecast", index);
    },
  },
  mounted() {
    this.$store.dispatch("updateSelectedForecast", 0);
  },
  computed: {
    selectedForecastIndex() {
      return this.$store.getters["getSelectedForecast"];
    },
    selectedForecast() {
      if (this.city && this.city.list) {
        return this.city.list[this.selectedForecastIndex];
      }
      return null;
    },
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
    humidity() {
      if (this.selectedForecast && this.selectedForecast.main) {
        return this.selectedForecast.main.humidity + "%";
      }
      return "NaN";
    },
    wind() {
      if (this.selectedForecast && this.selectedForecast.wind) {
        return this.selectedForecast.wind.speed + " km/h";
      }
      return "NaN";
    },
    city() {
      return this.$store.getters["getCity"];
    },
  },
};
</script>
