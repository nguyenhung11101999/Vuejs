<template>
  <div class="v-customer-list">
    <div class="content">
      <div class="header-content">
        <div class="title">Danh sách khách hàng</div>
        <div class="page-feature">
          <button class="m-btn btn-add-save" id="btn-add" @click="btnClickAdd">
            <div class="icon-add"></div>
            <div class="m-btn-action btn-text">Thêm khách hàng</div>
          </button>
        </div>
      </div>
      <div class="filter-bar">
        <div class="filter-left">
          <input
            class="icon-search input-search"
            type="text"
            style="width: 200px"
            value=""
            placeholder="Tìm kiếm theo mã, tên khách hàng"
          />
        </div>
        <div class="filter-right">
          <button
            class="m-btn btn-refresh"
            id="btnRefresh"
            @click="loadData"
          ></button>
        </div>
      </div>
      <div class="grid grid-customer">
        <table class="scrollTable" border="0" cellpadding="0" width="100%">
          <!-- <colgroup>
            <col style="width: 150px" />
            <col style="width: 200px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 150px" />
            <col style="width: 50px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
          </colgroup> -->
          <thead>
            <tr>
              <th fieldName="customerCode">Ma nhan vien</th>
              <th fieldName="fullName">Ho ten</th>
              <th fieldName="genderName">Gioi tinh</th>
              <th
                fieldName="dateOfBirth"
                formatType="ddmmyyy"
                style="text-align: center"
              >
                Ngay sinh
              </th>
              <th fieldName="phoneNumber">So dien thoai</th>
              <th fieldName="email">Email</th>
              <th fieldName="address">Dia chi</th>
              <!-- <th
                fieldName="salary"
                formatType="money"
                style="text-align: right"
              >
                So tien lo
              </th> -->
              <th fieldName="note">Note</th>
              <th fieldName="memberCardCode">Ma the thanh vien</th>
            </tr>
          </thead>
          <tbody class="scrollContent">
            <tr
              v-for="customer in customers"
              :key="customer.customerId"
              @dblclick="dbClick(customer)"
            >
              <td>{{ customer.customerCode }}</td>
              <td>{{ customer.fullName }}</td>
              <td>{{ formatGender(customer.gender) }}</td>
              <td class="m-date-center">
                {{ formatDate(customer.dateOfBirth) }}
              </td>
              <td>{{ customer.phoneNumber }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.address }}</td>
              <!-- <td class="m-money-left">{{ formatMoney(customer.salary) }}</td> -->
              <td>{{ customer.note }}</td>
              <td>{{ customer.memberCardCode }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="paging-bar">
        <div class="paging-left">
          <label>Hiển thị 1-10/1000 nhân viên</label>
        </div>
        <div class="paging-center">
          <div class="btn-page page-icon first-page"></div>
          <div class="btn-page page-icon prev-page"></div>
          <button
            class="btn-page page-number"
            style="background-color: #01b075; color: #fff"
          >
            1
          </button>
          <button class="btn-page page-number">2</button>
          <button class="btn-page page-number">3</button>
          <button class="btn-page page-number">4</button>
          <div class="btn-page page-icon next-page"></div>
          <div class="btn-page page-icon last-page"></div>
        </div>
        <div class="paging-right"><label>10 nhân viên/trang</label></div>
      </div>
    </div>
    <Loading :isLoading="isLoading" />
    <CustomerListDetail
      @closePopup="closePopup"
      @showSnackbar="showSnackbar"
      :isHide="isHideParent"
      ref="dialog"
      :customergroups="customergroups"
      :showButtonDelete="showButtonDelete"
      :customer="customer"
      @loadData="loadData"
      :formMode="formMode"
      @showDialogError="showDialogError"
      :data="data"
      @getErrorsDialog="getErrorsDialog"
      :isValidated="isValidated"
      @changeisValidated="changeisValidated"
      @deleteCustomer="deleteCustomer"
      :isShowDialogConfirm="isShowDialogConfirm"
      @closeDialogConfirm="closeDialogConfirm"
      @getCustomerDelete="getCustomerDelete"
    />
    <Snackbar :isShowSnackbar="isShowSnackbar" :isValidated="isValidated" />
    <BaseDialogError
      :isHideDialogError="isHideDialogError"
      @showDialogError="showDialogError"
      :data="data"
    />
    <BaseConfirm
      :customer="customer"
      :isShowDialogConfirm="isShowDialogConfirm"
      @closeDialogConfirm="closeDialogConfirm"
      @deleteCustomer="deleteCustomer"
    />
  </div>
</template>
<script>
import axios from "axios";
import CustomerListDetail from "./CustomerListDetail";
import Snackbar from "../../../base/Snackbar";
import BaseDialogError from "../../../base/BaseDialogError";
import BaseConfirm from "../../../base/BaseConfirm";
import Loading from "../../../base/Loading";
export default {
  name: "CustomerList",
  components: {
    CustomerListDetail,
    Snackbar,
    BaseDialogError,
    BaseConfirm,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      isShowDialogConfirm: true,
      isValidated: true,
      data: [],
      customers: [],
      customergroups: [],
      isHideParent: true,
      showButtonDelete: false,
      isHideDialogError: true,
      formMode: 1,
      isShowSnackbar: true,
      customer: {
        address: "",
        companyName: "",
        companyTaxCode: "",
        createdBy: "",
        createdDate: null,
        customerCode: "",
        customerGroupId: "",
        dateOfBirth: null,
        email: "",
        fullName: "",
        gender: null,
        memberCardCode: "",
        modifiedBy: "",
        modifiedDate: null,
        note: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    //Trương tác với biến loading
    loading(value) {
      this.loading = value;
    },
    //Sự kiện thay đổi giá trị của biến customer khi ấn xóa ở dialog xác nhận xóa
    getCustomerDelete(value) {
      this.customer = value;
    },
    //Sự kiện thay đổi giá trị của biến isShowDialogConfirm để thực hiện mở đóng Dialog Confirm
    closeDialogConfirm(value) {
      this.isShowDialogConfirm = value;
    },
    // Sự kiện Delete
    deleteCustomer(customerDelete) {
      axios
        .delete(
          "http://localhost:53873/api/v1/customers/" + customerDelete.customerId
        )
        .then(() => {
          this.closePopup(true);
          this.loadData();
          this.showSnackbar(false);
        })
        .catch(() => {
          this.isValidated = false;
          this.showSnackbar(false);
        });
    },
    //Sự kiện thay đổi biến isValidated
    changeisValidated(value) {
      this.isValidated = value;
    },
    //Sự kiện kích đúp vào 1 dòng của bảng
    dbClick(cus) {
      this.formMode = 0;
      // gán lại border cho input
      // var inputs = this.$refs.dialog.$refs;
      // var array = Object.keys(inputs);
      // array.map((item) => {
      //   inputs[item].style.border = "";
      // });
      this.isHideParent = false;
      this.showButtonDelete = true;
      //focus vào Input  CustomerCode
      setTimeout(() => {
        this.$refs.dialog.$refs.customerCode.focus();
      }, 0);
      // Gán đối tượng được chọn tronng bảng cho đối tượng customer
      this.customer = JSON.parse(JSON.stringify(cus));
      // Format lại định dạng ngày tháng của đối tượng khi hiển thị lên dialog
      this.customer.dateOfBirth = this.formatDateInDialog(
        this.customer.dateOfBirth
      );
    },
    //Sự kiện tương tác với Dialog Error
    showDialogError(value) {
      this.isHideDialogError = value;
    },
    //Sự kiện thay đổi biến data để lưu mã lỗi được gửi về từ lớp con thông qua biến value
    getErrorsDialog(value) {
      this.data = value;
    },
    //Sự kiện hiện Snackbar
    showSnackbar(value) {
      this.isShowSnackbar = value;
      // Ẩn Snackbar sau 1.5s khi đã hiện
      setTimeout(() => {
        this.isShowSnackbar = true;
      }, 1500);
    },
    //Tương tác với biến isHideParent để thực hiện bật tắt Dialog
    closePopup(value) {
      this.isHideParent = value;
    },
    //Sự kiện  Load lại dữ liệu
    btnClickRefresh() {
      this.loadData();
    },
    //Sự kiện Thêm khách hàng
    btnClickAdd() {
      // gán trạng thái là thêm
      this.formMode = 1;
      // Gán giá tị fase cho biến isHideParent để hiển thị Dialog thêm
      this.isHideParent = false;
      // Ẩn button xóa
      this.showButtonDelete = false;
      var inputs = this.$refs.dialog.$refs;
      var array = Object.keys(inputs);
      // Gán lại border cho các input khi thực hiện thao tác mới
      array.map((item) => {
        inputs[item].style.border = "";
      });
      // Focus vào iunput customerCode khi vừa bật Dialog lên
      setTimeout(() => {
        this.$refs.dialog.$refs.customerCode.focus();
      }, 0);
      // Gán cho đối tượng customer mới để lưu các thông tin nhập vào
      this.customer = {
        address: "",
        companyName: "",
        companyTaxCode: "",
        createdBy: "",
        createdDate: null,
        customerCode: "",
        customerGroupId: "",
        dateOfBirth: null,
        email: "",
        fullName: "",
        gender: 1,
        memberCardCode: "",
        modifiedBy: "",
        modifiedDate: null,
        note: "",
        phoneNumber: "",
      };
    },
    //Hàm định dạng ngày tháng trong Dialog
    formatDateInDialog(ddmmyyy) {
      var date = new Date(ddmmyyy);
      if (Number.isNaN(date.getTime())) {
        return "";
      } else {
        var day = date.getDate(),
          month = date.getMonth() + 1,
          year = date.getFullYear();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        return year + "-" + month + "-" + day;
      }
    },
    //Hàm định dạng ngày tháng
    formatDate(ddmmyyy) {
      var date = new Date(ddmmyyy);
      if (Number.isNaN(date.getTime())) {
        return "";
      } else {
        var day = date.getDate(),
          month = date.getMonth() + 1,
          year = date.getFullYear();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        return day + "/" + month + "/" + year;
      }
    },
    //Hàm định dạng tiền tệ
    formatMoney(money) {
      if (money == null) return "";
      else {
        var num = money.toString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        return num;
      }
    },
    //Hàm định dạng giới tính
    formatGender(gender) {
      if (gender == 0) {
        gender = "Nữ";
      } else if (gender == 1) {
        gender = "Nam";
      } else {
        gender = "Khác";
      }
      return gender;
    },

    //Hàm load dữ liệu
    async loadData() {
      await axios.get("http://localhost:53873/api/v1/customers").then((res) => {
        this.customers = res.data;
      });
    },

    // Hàm load dữ liệu của customergroup
    async loadCustomerGroup() {
      await axios
        .get("http://localhost:53873/api/v1/customergroups")
        .then((res) => {
          this.customergroups = res.data;
        });
    },
    // async loadCustomerGroup() {
    //   await axios
    //     .get("http://api.manhnv.net/api/customergroups")
    //     .then((res) => {
    //       this.customergroup = res.data;
    //     });
    // },
  },
  //hàm khởi chạy đầu tiên
  created() {
    this.loadData();
    this.loadCustomerGroup();
  },
};
</script>
<style>
@import "../../../../styles/pages/customer.css";
</style>