<template>
  <div>
    <!--Snackbar thông báo thành công hay thất bại-->
    <div v-if="isValidated == true" class="snackbar" :class="{ isShowSnackbar: isShowSnackbar }">
      <i class="fas fa-check-circle"></i>
      <div class="snack-text">Thành công</div>
      <i class="fas fa-times"></i>
    </div>
    <div v-if="isValidated == false" class="snackbar snackbar-errors" :class="{ isShowSnackbar: isShowSnackbar }">
      <i class="fas fa-exclamation-triangle"></i>
      <div class="snack-text">Dữ liệu không hợp lệ</div>
      <i class="m-closeSnackBar-errors fas fa-times"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: ["isShowSnackbar", "isValidated"],
};
</script>

<style>
@import "../../styles/basics/snackbar.css";
</style>