<template>
  <div class="v-customer-list">
    <div class="content">
      <div class="header-content">
        <div class="title">Danh sách khách hàng</div>
        <div class="page-feature">
          <button class="m-btn btn-add-save" id="btn-add" @click="btnClickAdd">
            <div class="icon-add"></div>
            <div class="m-btn-action btn-text">Thêm nhân viên</div>
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
          <colgroup>
            <col style="width: 150px" />
            <col style="width: 200px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 150px" />
            <col style="width: 50px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
          </colgroup>
          <thead>
            <tr>
              <th fieldName="CustomerCode">Ma nhan vien</th>
              <th fieldName="FullName">Ho ten</th>
              <th fieldName="GenderName">Gioi tinh</th>
              <th
                fieldName="DateOfBirth"
                formatType="ddmmyyy"
                style="text-align: center"
              >
                Ngay sinh
              </th>
              <th fieldName="PhoneNumber">So dien thoai</th>
              <th fieldName="Email">Email</th>
              <th fieldName="Address">Dia chi</th>
              <th
                fieldName="Salary"
                formatType="Money"
                style="text-align: right"
              >
                So tien lo
              </th>
              <th fieldName="MemberCardCode">Ma the thanh vien</th>
            </tr>
          </thead>
          <tbody class="scrollContent">
            <tr
              v-for="customer in customer"
              :key="customer.CustomerId"
              @dblclick="dbClick"
            >
              <td>{{ customer.CustomerCode }}</td>
              <td>{{ customer.FullName }}</td>
              <td>{{ customer.GenderName }}</td>
              <td class="m-date-center">
                {{ formatDate(customer.DateOfBirth) }}
              </td>
              <td>{{ customer.PhoneNumber }}</td>
              <td>{{ customer.Email }}</td>
              <td>{{ customer.Address }}</td>
              <td class="m-money-left">{{ formatMoney(customer.Salary) }}</td>
              <td>{{ customer.MemberCardCode }}</td>
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
      ref="customerGroup"
      :customergroup="customergroup"
    />
  </div>
</template>
<script>
import axios from "axios";
import CustomerListDetail from './CustomerListDetail'
export default {
  name: "CustomerList",
  components: {
   CustomerListDetail
  },
  data() {
    return {
      customer: [],
      customergroup: [],
      isHideParent: true,
    };
  },
  methods: {
    dbClick() {
      this.isHideParent = false;
      setTimeout(() => {
        this.$refs.customerGroup.$refs.customerGroup.focus();
      }, 0);
    },
    closePopup(value) {
      this.isHideParent = value;
    },
    btnClickRefresh() {},
    btnClickAdd() {
      this.isHideParent = false;
      setTimeout(() => {
        this.$refs.customerGroup.$refs.customerGroup.focus();
      }, 0);
    },
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
    formatMoney(money) {
      if (money == null) return "";
      else {
        var num = money.toString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        return num;
      }
    },
    async loadData() {
      await axios.get("http://api.manhnv.net/api/customers").then((res) => {
        this.customer = res.data;
      });
    },
    async loadCustomerGroup() {
      await axios
        .get("http://api.manhnv.net/api/customergroups")
        .then((res) => {
          this.customergroup = res.data;
        });
    },
  },
  created() {
    this.loadData();
    this.loadCustomerGroup();
  },
};
</script>
<style>
</style>