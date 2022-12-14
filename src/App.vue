<template>
  <div
    id="app"
    class="flex justify-center items-center w-screen h-screen bg-default-theme font-montserrat"
  >
    <weather-view />
    <forecast-view />
  </div>
</template>

<script>
import WeatherView from "@/components/WeatherView";
import ForecastView from "@/components/ForecastView";

export default {
  name: "App",
  components: {
    WeatherView,
    ForecastView,
  },
};
</script>
