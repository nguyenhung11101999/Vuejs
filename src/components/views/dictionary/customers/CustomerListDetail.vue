<template>
  <!--dialog-->
  <div class="m-dialog" :class="{ isHide: isHide }">
    <div class="dialog-modal"></div>
    <div class="dialog dialog-content">
      <div class="dialog-header">
        <div class="dialog-header-title">Thông tin khách hàng</div>
        <button
          class="m-btn dialog-close m-close-dialog"
          v-on:click="btnCancelOnClick"
        ></button>
      </div>
      <div class="dialog-body">
        <div class="m-dialog-all">
          <div class="upload-photo">
            <div class="upload-contain"><input type="file" id="photo" /></div>
            <label
              >Vui lòng chọn ảnh có định dạng <br /><b
                >.jpg, .jpeg, .png, .gif</b
              ></label
            >
          </div>
          <div class="m-dialog-info">
            <div class="m-infor-conter">
              <div>
                <div class="m-row">
                  <div class="m-lable">
                    Mã khách hàng (<label class="required-red">*</label>)
                  </div>
                  <div class="m-control">
                    <input
                      ref="customerGroup"
                      tabindex="1"
                      id="txtCustomerCode"
                      type="text"
                      class="input-required"
                      required
                      fieldName="CustomerCode"
                      v-model="customer.CustomerCode"
                    />
                  </div>
                </div>
                <div class="m-row">
                  <div>Mã thẻ thành viên</div>
                  <div class="m-control">
                    <input
                      tabindex="3"
                      id="txtMemberCardCode"
                      type="text"
                      fieldName="MemberCardCode"
                      v-model="customer.MemberCardCode"
                    />
                  </div>
                </div>
                <div class="m-row">
                  <div class="m-lable">Ngày sinh</div>
                  <div class="m-control">
                    <input
                      tabindex="5"
                      id="dtDateOfBirth"
                      type="date"
                      fieldName="DateOfBirth"
                      v-model="customer.DateOfBirth"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="m-infor-conter">
              <div>
                <div class="m-row">
                  <div class="m-lable">
                    Họ tên (<label class="required-red">*</label>)
                  </div>
                  <div class="m-control">
                    <input
                      tabindex="2"
                      id="txtFullName"
                      type="text"
                      required
                      fieldName="FullName"
                      v-model="customer.FullName"
                    />
                  </div>
                </div>
                <div class="m-row">
                  <div class="m-lable">Nhóm khách hàng</div>
                  <div class="m-control">
                    <select v-model="customer.CustomerGroupName"
                      tabindex="4"
                      id="cbxCustomerGroup"
                      class="m-input"
                      fieldName="CustomerGroupId"
                    >
                      <option
                        v-for="customerGroup in this.customergroup"
                        :key="customerGroup.CustomerGroupId"
                      >
                        {{ customerGroup.CustomerGroupName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="m-row">
                  <div class="m-lable">Giới tính</div>
                  <div class="m-row-gender">
                    <div class="m-gender-center">
                      <div>
                        <input
                          tabindex="6"
                          type="radio"
                          name="sex"
                          id="nu"
                          value="0"
                          fieldName="Gender"
                          v-model="customer.Gender"
                        />
                      </div>
                      <div class="m-gender-span">
                        <span>Nữ</span>
                      </div>
                    </div>
                    <div class="m-gender-center">
                      <div>
                        <input
                          tabindex="7"
                          type="radio"
                          name="sex"
                          id="nam"
                          value="1"
                          fieldName="Gender"
                          v-model="customer.Gender"
                        />
                      </div>
                      <div class="m-gender-span">
                        <span>Nam</span>
                      </div>
                    </div>
                    <div class="m-gender-center">
                      <div>
                        <input
                          tabindex="8"
                          type="radio"
                          name="sex"
                          id="khac"
                          value="2"
                          fieldName="Gender"
                          v-model="customer.Gender"
                        />
                      </div>
                      <div class="m-gender-span">
                        <span>Khác</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-dialog-show">
          <div class="m-show-content">
            <div>
              <div class="m-row">
                <div class="m-lable">
                  Email (<label class="required-red">*</label>)
                </div>
                <div class="m-control">
                  <input
                    tabindex="9"
                    id="txtEmail"
                    type="email"
                    fieldName="Email"
                    v-model="customer.Email"
                  />
                </div>
              </div>
              <div class="m-row">
                <div class="m-lable">Tên công ty</div>
                <div class="m-control">
                  <input tabindex="11" type="text" fieldName="CompanyName" />
                </div>
              </div>
            </div>
          </div>
          <div class="m-show-content">
            <div class="m-content-right">
              <div class="m-row">
                <div class="m-lable">
                  Số điện thoại (<label class="required-red">*</label>)
                </div>
                <div>
                  <div class="m-control">
                    <input
                      tabindex="10"
                      id="txtPhoneNumber"
                      type="text"
                      required
                      fieldName="PhoneNumber"
                      v-model="customer.PhoneNumber"
                    />
                  </div>
                </div>
              </div>
              <div class="m-row">
                <div class="m-lable">Mã số thuế</div>
                <div class="m-control">
                  <input tabindex="12" type="text" fieldName="CompanyTaxCode" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-show-end">
          <div>
            <div class="m-row">
              <div class="m-lable">Địa chỉ</div>
              <div class="m-control">
                <input
                  tabindex="13"
                  id="txtAddress"
                  type="text"
                  fieldName="Address"
                  v-model="customer.Address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Phần footer dialog employee-->
      <div class="dialog-footer">
        <button class="btn-delete m-btn" id="btn-delete-customer">
          <span>Xóa</span>
        </button>
        <div class="footer-right">
          <button
            class="m-btn btn-cancel m-close-dialog"
            v-on:click="btnCancelOnClick"
          >
            <span>Hủy</span>
          </button>
          <button class="m-btn btn-add-save" id="btn-save" @click="saveCustomer">
            <div class="icon-add"></div>
            <div class="btn-text btn-dialog">Lưu</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "CustomerListDetail",
  props: ["isHide", "customergroup"],
  data() {
    return {
      customer:{
        Address: "",
        CompanyName: "",
        CompanyTaxCode: "",
        CustomerCode: "",
        CustomerGroupId: "",
        CustomerGroupName: "",
        CustomerId: "",
        DateOfBirth: "",
        DebitAmount: "",
        Email: "",
        FullName: "",
        Gender: null,
        GenderName: "",
        IsStopFollow: "",
        MemberCardCode: "",
        PhoneNumber: "",
      }
    };
  },
  methods: {
    async saveCustomer(){
    //   const me = this;
    //   const response = await axios.post("http://api.manhnv.net/api/customers", {
        
    //   });
    },
    btnAddOnClick() {
      // this.isHide = false;
      
    },
    btnCancelOnClick() {
      this.$emit("closePopup", true);
    },
  },
};
</script>
<style>
/* @import "../../../styles/basics/base-dialog.css";
@import "../../../styles/basics/dialog-customer.css"; */
</style>