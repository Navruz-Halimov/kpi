<template>
  <div class="wrapper">
    <Navbar />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/navbar/navbar"),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
