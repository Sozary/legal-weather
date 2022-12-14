<template>
  <div class="w-full h-full">
    <img src="@/assets/images/placeholder.jpg" class="w-full h-full absolute" />
    <div class="linear-background absolute top-0 w-full h-full"></div>
    <div
      class="relative px-8 py-12 text-white flex justify-between flex-col h-full"
    >
      <div>
        <div class="text-[2.31rem] font-bold">{{ day }}</div>
        <div class="text-[1.37rem] font-medium">{{ dateFormated }}</div>
        <div class="flex mt-3 gap-2">
          <img src="@/assets/icons/location.svg" class="w-7 h-7" />
          <span class="font-semibold text-[1.25rem]">{{ cityName }}</span>
        </div>
      </div>
      <div>
        <img
          :src="`http://openweathermap.org/img/wn/${weatherCode}@2x.png`"
          class="w-24 h-24"
        />
        <div class="text-[3.12rem] font-bold">{{ temperature }}</div>
        <div class="font-bold text-[1.87rem] mt-3">{{ weatherCondition }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      today: new Date(),
    };
  },
  computed: {
    dateFormated() {
      return new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(this.today);
    },
    day() {
      return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        this.today
      );
    },
    humidity() {
      return this.city.main?.humidity + "%";
    },
    temperature() {
      return Math.round(((this.city.main?.temp - 32) * 5) / 9) + " °C";
    },
    weatherCondition() {
      return this.city.weather?.[0].main;
    },
    weatherCode() {
      return this.city.weather?.[0].icon;
    },
    cityName() {
      return this.city.name + ", " + this.city.sys?.country;
    },
    city() {
      return this.$store.getters["getCity"];
    },
  },
};
</script>
