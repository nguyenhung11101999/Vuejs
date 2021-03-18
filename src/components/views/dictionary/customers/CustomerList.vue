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
              v-for="customer in customer"
              :key="customer.customerId"
              @dblclick="dbClick"
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
    <CustomerListDetail
      @closePopup="closePopup"
      :isHide="isHideParent"
      ref="customerCode"
      :customergroup="customergroup"

    />
  </div>
</template>
<script>
import axios from "axios";
import CustomerListDetail from "./CustomerListDetail";
export default {
  name: "CustomerList",
  components: {
    CustomerListDetail,
  },
  data() {
    return {
      customer: [],
      customergroup: [],
      isHideParent: true,
    };
  },
  methods: {
    //Sự kiện kích đúp vào 1 dòng của bảng
    dbClick() {
      this.isHideParent = false;
      //focus vào Input  CustomerCode
      setTimeout(() => {
        this.$refs.customerCode.$refs.customerCode.focus();
      }, 0);
    },
    //Sự kiện  Đóng Dialog
    closePopup(value) {
      this.isHideParent = value;
    },
    //Sự kiện  Load lại dữ liệu
    btnClickRefresh() {},
    //Sự kiện Thêm khách hàng
    btnClickAdd() {
      this.isHideParent = false;
      setTimeout(() => {
        this.$refs.customerCode.$refs.customerCode.focus();
      }, 0);
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
        day < 10 ? "0" + day : day;
        month < 10 ? "0" + month : month;
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
    formatGender(gender){
      if(gender == 0){
        gender = "Nữ"
      }else if(gender == 1){
        gender = "Nam"
      }else{
        gender = "Khác"
      }
      return gender;
    },

    //Hàm load dữ liệu
    async loadData() {
      await axios.get("http://localhost:53873/api/v1/customers").then((res) => {
        this.customer = res.data;
      });
    },

    // Hàm load dữ liệu của customergroup
    async loadCustomerGroup() {
      await axios
        .get("http://localhost:53873/api/v1/customergroups")
        .then((res) => {
          this.customergroup = res.data;
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
  //hàm khởi tạo lần đầu
  created() {
    this.loadData();
    this.loadCustomerGroup();
  },
};
</script>
<style>
@import "../../../../styles/pages/customer.css";
</style>