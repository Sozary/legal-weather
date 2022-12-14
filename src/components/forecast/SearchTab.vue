<template>
  <div class="relative mt-16 max-w-[415px] ml-36">
    <input
      type="text"
      ref="search"
      class="linear-background w-[415px] h-[53px] rounded-xl pl-12 peer"
      @click="triggeredInput = true"
      @blur="triggeredInput = false"
    />

    <img
      @click="triggeredInput = true"
      src="@/assets/icons/location.svg"
      class="cursor-pointer w-8 h-8 absolute top-1/2 -translate-y-1/2 transition-all"
      :class="{ 'left-2': triggeredInput, 'left-[82px]': !triggeredInput }"
    />
    <div
      @click="triggeredInput = true"
      class="absolute cursor-pointer -translate-x-1/2 text-[1.25rem] -translate-y-1/2 transition-all font-semibold"
      :class="{
        'left-[86px] top-[-20px] ': triggeredInput,
        'left-1/2  top-1/2 ': !triggeredInput,
      }"
    >
      Change Location
    </div>
  </div>
</template>
<script>
export default {
  watch: {
    triggeredInput(value) {
      if (value) {
        this.$refs["search"].focus();
      } else {
        this.$refs["search"].blur();
      }
    },
  },
  data() {
    return {
      triggeredInput: false,
    };
  },
};
</script>
