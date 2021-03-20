<template>
  <div>
    <!--Dialog hiển thị danh sách lỗi -->
    <div class="dialog dialog-error" :class="{ isHideDialogError: isHideDialogError }">
      <button class="m-btn dialog-close" id="dialog-close-error" @click="btnCloseDialogError"></button>
      <div class="title">Lý do bị từ chối</div>
      <div class="list-error">
        <div class="error" v-html="data.data[0]"></div>
      </div>
      <div class="dialog-footer">
        <div class="dialog-footer-right">
          <button class="m-btn btn-add-save" id="dialog-cancel-error" @click="btnCloseDialogError">
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
  props: ["isHideDialogError", "data"],
  methods: {
    btnCloseDialogError(){
      this.$emit("showDialogError", true);
      console.log(this.data);
    }
  }
};
</script>

<style>
@import "../../styles/basics/dialog-error.css";
</style>