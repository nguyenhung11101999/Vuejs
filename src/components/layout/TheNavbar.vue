<template>
  <div class="navbar">
    <div class="logo-site">
      <!-- Logo -->
      <div class="logo-box">
        <div class="toggle-icon"></div>
        <div class="cukcuk-logo"></div>
      </div>
    </div>
    <!-- Danh mục navbar -->
    <div class="navbar-content">
      <div class="nav-item">
        <div class="nav-item-icon m-icon-dashboard"></div>
        <div class="nav-item-text">Tổng quan</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon m-icon-report"></div>
        <div class="nav-item-text">Báo cáo</div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon m-icon-document"></div>
        <div class="nav-item-text">Mua hàng</div>
      </div>

      <div class="nav-item">
        <div class="nav-item-icon m-icon-employee"></div>
        <div class="nav-item-text">
           <router-link to="/Customers">Danh mục khách hàng</router-link>
        </div>
      </div>
      <div class="nav-item">
        <div class="nav-item-icon m-icon-employee"></div>
        <div class="nav-item-text">
          <router-link to="/Employees">Danh mục nhân viên</router-link>
        </div>
      </div>

      <div class="nav-item">
        <div class="nav-item-icon m-icon-setting"></div>
        <div class="nav-item-text">Thiết lập</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheNavbar",
};
</script>


