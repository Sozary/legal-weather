<template>
  <div class="w-full h-full">
    <img src="@/assets/images/placeholder.jpg" class="w-full h-full" />
    <div class="linear-background absolute top-0 w-full h-full"></div>
  </div>
</template>
<script>
export default {
  computed: {
    city() {
      return this.$store.getters["getCity"];
    },
  },
};
</script>
