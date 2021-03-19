<template>
  <div>
    <!--Dialog hiển thị danh sách lỗi -->
    <div class="dialog dialog-error">
      <button class="m-btn dialog-close" id="dialog-close-error"></button>
      <div class="title">Lý do bị từ chối</div>
      <div class="list-error"></div>
      <div class="dialog-footer">
        <div class="dialog-footer-right">
          <button class="m-btn btn-add-save" id="dialog-cancel-error">
            <span>Đóng</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseDialogError",
  props: [],
};
</script>

<style>
@import "../../styles/basics/dialog-error.css";
</style>