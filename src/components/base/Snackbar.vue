<template>
  <div>
    <!--Snackbar thông báo thành công hay thất bại-->
    <div id="snackbar" :class="{ isShowSnackbar: isShowSnackbar,  }">
      <i class="fas fa-check-circle" id="snackbar-icon"></i>
      <div class="snack-text">Thành công</div>
      <i class="fas fa-times" id="closeSnackBar"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: [
    "isShowSnackbar",
  ]
};
</script>

<style>
@import "../../styles/basics/snackbar.css";
</style>