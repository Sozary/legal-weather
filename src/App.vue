<template>
  <div id="app" class="flex justify-center items-center w-screen h-screen">
    <weather-view />
    <search-view />
  </div>
</template>

<script>
import WeatherView from "@/components/WeatherView";
import SearchView from "@/components/SearchView";

export default {
  name: "App",
  components: {
    WeatherView,
    SearchView,
  },
};
</script>
