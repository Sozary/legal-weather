<template>
  <div
    class="rounded-3xl lg:mt-0 mt-10 bg-night-dark w-10/12 lg:h-[620px] lg:w-[600px] lg:-ml-20 text-white"
  >
    <forecast-tab class="px-4 lg:pl-36 lg:pr-12" />
    <search-tab />
  </div>
</template>
<script>
import ForecastTab from "@/components/forecast/ForecastTab.vue";
import SearchTab from "@/components/forecast/SearchTab.vue";
export default {
  components: { ForecastTab, SearchTab },
};
</script>
