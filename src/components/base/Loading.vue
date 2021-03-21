<template>
  <div>
    <div class="loading" :class="{ isLoading: isLoading }">
      <div class="loading-modal"></div>
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: ["isLoading"],
};
</script>

<style>
@import "../../styles/basics/loading.css";
</style>