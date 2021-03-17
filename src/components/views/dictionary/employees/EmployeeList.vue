<template>
  <div>
    <!-- Content -->
    <div class="content">
      <div class="header-content">
        <div class="title">Danh sách nhân viên</div>
        <div class="page-feature">
          <button class="m-btn btn-add-save" id="btn-add"  @click="btnClickAdd">
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
          <button class="m-btn btn-refresh" id="btnRefresh"></button>
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
              <th fieldName="EmployeeCode">Ma nhan vien</th>
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
              <th fieldName="WorkStatusName">Ma the thanh vien</th>
            </tr>
          </thead>
          <tbody class="scrollContent"></tbody>
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
    <EmployeeListDetail @closePopup="closePopup" :isHide="isHideParent" />
  </div>
</template>

<script>
import EmployeeListDetail from "./EmployeeListDetail";
export default {
  name: "EmployeeList",
  components: {
    EmployeeListDetail,
  },
  data() {
    return {
      isHideParent: true,
    };
  },
  methods: {
    closePopup(value) {
      this.isHideParent = value;
    },
    btnClickAdd() {
      this.isHideParent = false;
    },
  },
};
</script>
<style>
@import '../../../../styles/pages/employee.css';
</style>
