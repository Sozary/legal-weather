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
  data() {
    return {
      forecastHeader: [],
    };
  },
  mounted() {
    this.forecastHeader.push({
      label: "humidity",
      value: this.humidity,
    });
    this.forecastHeader.push({
      label: "wind",
      value: this.wind,
    });
  },
  computed: {
    humidity() {
      return this.city.main?.humidity + "%";
    },
    wind() {
      return this.city.wind?.speed + " km/h";
    },
    city() {
      return this.$store.getters["getCity"];
    },
  },
};
</script>
