<template>
  <div>
    <!-- Dialog xác nhận xóa hay không -->
    <div class="dialog dialog-delete"  :class="{ isShowDialogConfirm: isShowDialogConfirm }">
      <button class="m-btn dialog-close" id="dialog-close-delete" @click="btnCloseConfirm"></button>
      <div class="title">Xác nhận xóa</div>
      <div class="confirm-delete">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          Bạn có chắc chắn muốn xóa khách hàng
          <label class="delete-entity">{{customer.customerCode}}</label> không?
        </div>
      </div>
      <div class="dialog-footer">
        <div class="delete-bottom">
          <button class="m-btn btn-cancel" id="delete-no" @click="btnCloseConfirm">
            <span>Không</span>
          </button>
          <button class="m-btn btn-delete" id="delete-yes" @click="btnConfirmDelete">
            <span>Có</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseConfirm",
  props: ["isShowDialogConfirm", "customer"],
  data() {
    return {};
  },
  methods: {
    //Sự kiện đóng dialog confirm khi ấn cannel/X
    btnCloseConfirm(){
      //Gọi hàm thực hiện đóng
      this.$emit("closeDialogConfirm", true);
    },
    //Sự khiện khi nhấn xác nhận xóa trên dialog confirm
    btnConfirmDelete(){
      // Gọi hàm thực hiện Xóa
      this.$emit("deleteCustomer", this.customer);
      // Gọi hàm đóng dialog confirm
      this.$emit("closeDialogConfirm", true);
    }
  },
};
</script>

<style>
@import "../../styles/basics/dialog-delete.css";
</style>