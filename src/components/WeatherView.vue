<template>
  <div
    class="w-10/12 lg:w-[500px] lg:h-[666px] relative rounded-[30px] overflow-hidden"
  >
    <city-tab />
  </div>
</template>
<script>
import CityTab from "@/components/weather/CityTab";
export default {
  components: { CityTab },
};
</script>
