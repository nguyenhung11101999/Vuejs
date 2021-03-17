<template>
    <div class="modal">
        <div class="misa-content">
             <BaseLoading :showLoading="isLoading"/>
            <div class="content-body">
                            <div class="header-content">
                                <div class="title">
                                    Danh sách nhân viên
                                </div>
                                <div class="bt-function">
                                    <button id="btnAdd" class="misa-btn" @click="btnAddOnClick()">
                                        <div class="misa-btn-icon"></div>
                                        <div class="btn-text" >Thêm nhân viên</div>
                                    </button>
                                   
                                </div>
                            </div>
                            <div class="header-function-s">
                                <div class="fun-left">
                                    <input type="text" class="icon-search" placeholder="Tìm kiếm theo Mã, Tên">
                                </div>
                                <div class="fun-right">
                                    <button id="btnRefresh" class="misa-refesh misa-btn-refesh"></button>
                                </div>
                            </div>
                            <div class="gird-table grids-cus">
                                <table cellspacing="0" cellpadding="0" class="m-table-body" border="0" style="min-width: 100%;">
                                    <!-- Body -->
                                      <thead>
                                            <tr>
                                                
                                                 <th fieldName="EmployeeCode">
                                                    <div class="cell">Mã khách hàng</div>
                                                </th>
                                                <th fieldName="FullName">
                                                    <div class="cell">Họ và Tên</div>
                                                </th>
                                                <th fieldName="GenderName">
                                                    <div class="cell">Giới tính</div>
                                                </th>
                                                 <th fieldName="Address">
                                                    <div class="cell">Địa chỉ</div>
                                                </th>
                                                <th fieldName="DateOfBirth" formatType="ddmmyyyy">
                                                    <div class="cell">Ngày sinh</div>
                                                </th>
                                                <th fieldName="Email">
                                                    <div class="cell">Email</div>
                                                </th>
                                                <th fieldName="PhoneNumber">
                                                    <div class="cell">Số điện thoại</div>
                                                </th>
                                                <th fieldName="DepartmentName">
                                                    <div class="cell">Tên công ty</div>
                                                </th>
                                                <th fieldName="Salary">
                                                    <div class="cell">Mức lương</div>
                                                </th>
                                                <th fieldName="PersonalTaxCode">
                                                    <div class="cell">Mã số cá nhân</div>
                                                </th>
                                                <th fieldName="PositionName">
                                                    <div class="cell">Chức vụ</div>
                                                </th>
                                                <th fieldName="IdentityPlace">
                                                    <div class="cell">Địa chỉ công ty</div>
                                                </th>      
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="employee in employees" :key="employee.EmployeeId" @dblclick="rowOnClick(employee)">
                                             
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.EmployeeCode}}
                                                    </div>
                                                </td>
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.FullName}}
                                                    </div>
                                                </td>
                                                 
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.GenderName}}
                                                    </div>
                                                </td>
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.Address}}
                                                    </div>
                                                </td>
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.DateOfBirth}}
                                                    </div>
                                                </td>
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.Email}}
                                                    </div>
                                                </td>
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.PhoneNumber}}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="cell">
                                                        {{employee.DepartmentName}}
                                                    </div>
                                                </td>
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.Salary}}
                                                    </div>
                                                </td>
                                                 <td>
                                                    <div class="cell">
                                                        {{employee.PersonalTaxCode}}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="cell">
                                                        {{employee.PositionName}}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="cell">
                                                        {{employee.IdentityPlace}}
                                                    </div>
                                                </td>

                                            </tr>

                                        </tbody>
                                </table>
                            </div>
                            <div class="pagadi">
                                <div class="pagadi-info-cus">
                                    Hiển thị <b>1-10/1000</b> Khách hàng
                                </div>
                                <div class="pagadi-option">
                                    <div class="misa-bt-list-paga">
                                        <button class="bt-num-paga active">1</button>
                                        <button class="bt-num-paga">2</button>
                                        <button class="bt-num-paga">3</button>
                                        <button class="bt-num-paga">4</button>
                                        <button class="bt-num-paga">5</button>
                                    </div>
                                </div>
                                <div class="pagadi-num-page">
                                    <b>10</b> Khách hàng/trang
                                </div>
                    </div>
             </div>
        </div>
          <Datails @closeUp="closeUp" :isHide="isHideParent" />
    </div>
</template>
<script>
//Impost axios
import axios from "axios";
import "vue-loading-overlay/dist/vue-loading.css";
import Datails from "../../../views/dictionary/employees/EmployeeDatail";
import BaseLoading from "../../../../components/base/BaseLoading";
export default { 
    name:"Customer",
    components: { 
        Datails, 
        BaseLoading
        },
    methods: {
        // Button Thêm, hiển thị model
        btnAddOnClick(){
            this.isHideParent = false;
        },
        //Button đóng
        closeUp(value){
            this.isHideParent=value;
        },
        //DblCick hiển model
        rowOnClick(employee){
             this.isHideParent = false;
            alert(employee.FullName);
        },
    },
    data() {   
        return {
             isHideParent: true,
            employees:{
                EmployeeCode:"",
                FullName:"",
                GenderName:"",
                DateOfBirth:"",
                PhoneNumber:"",
                Email:"",
                IdentityPlace:"",
                DepartmentName:"",
                Salary:"",
                PersonalTaxCode:"",
                PositionName:"",
                
            }
        }
    },
  async created() {
        this.isLoading = true;
      await axios
        .get("http://api.manhnv.net/api/employees")
        .then((res) => {
          this.employees = res.data;
          this.isLoading = false;
        });
    },

    
}
</script>