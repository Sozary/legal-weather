<template>
  <div class="rounded-3xl bg-night-dark h-[620px] w-[600px] -ml-20 text-white">
    <forecast-tab class="pl-36 pr-12" />
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
