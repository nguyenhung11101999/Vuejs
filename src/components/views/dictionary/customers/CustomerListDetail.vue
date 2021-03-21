<template>
  <div>
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
                        v-on:blur="isValidate('customerCode')"
                        ref="customerCode"
                        tabindex="1"
                        id="txtCustomerCode"
                        type="text"
                        required
                        fieldName="CustomerCode"
                        v-model="customer.customerCode"
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
                        v-model="customer.memberCardCode"
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
                        v-model="customer.dateOfBirth"
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
                        v-on:blur="isValidate('fullName')"
                        ref="fullName"
                        tabindex="2"
                        id="txtFullName"
                        type="text"
                        required
                        fieldName="FullName"
                        v-model="customer.fullName"
                      />
                    </div>
                  </div>
                  <div class="m-row">
                    <div class="m-lable">Nhóm khách hàng</div>
                    <div class="m-control">
                      <select
                        v-model="customer.customerGroupId"
                        tabindex="4"
                        id="cbxCustomerGroup"
                        class="m-input"
                        fieldName="CustomerGroupId"
                      >
                        <option
                          v-for="customerGroup in this.customergroups"
                          :key="customerGroup.customerGroupId"
                          :value="customerGroup.customerGroupId"
                        >
                          {{ customerGroup.customerGroupName }}
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
                            :value="0"
                            fieldName="Gender"
                            v-model="customer.gender"
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
                            :value="1"
                            fieldName="Gender"
                            v-model="customer.gender"
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
                            :value="2"
                            fieldName="Gender"
                            v-model="customer.gender"
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
                      v-on:blur="isValidate('email')"
                      ref="email"
                      tabindex="9"
                      id="txtEmail"
                      type="email"
                      fieldName="Email"
                      v-model="customer.email"
                    />
                  </div>
                </div>
                <div class="m-row">
                  <div class="m-lable">Tên công ty</div>
                  <div class="m-control">
                    <input
                      tabindex="11"
                      type="text"
                      fieldName="CompanyName"
                      v-model="customer.companyName"
                    />
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
                        v-on:blur="isValidate('phoneNumber')"
                        ref="phoneNumber"
                        tabindex="10"
                        id="txtPhoneNumber"
                        type="text"
                        required
                        fieldName="PhoneNumber"
                        v-model="customer.phoneNumber"
                      />
                    </div>
                  </div>
                </div>
                <div class="m-row">
                  <div class="m-lable">Mã số thuế</div>
                  <div class="m-control">
                    <input
                      tabindex="12"
                      type="text"
                      fieldName="CompanyTaxCode"
                      v-model="customer.companyTaxCode"
                    />
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
                    v-model="customer.address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Phần footer dialog employee-->
        <div class="dialog-footer">
          <button
            @click="deleteCustomer"
            class="btn-delete m-btn btn-delete-customer"
            :class="{ showButtonDelete: showButtonDelete }"
          >
            <span>Xóa</span>
          </button>
          <div class="footer-right">
            <button
              class="m-btn btn-cancel m-close-dialog"
              v-on:click="btnCancelOnClick"
            >
              <span>Hủy</span>
            </button>
            <button
              class="m-btn btn-add-save"
              id="btn-save"
              @click="saveCustomer"
            >
              <div class="icon-add"></div>
              <div class="btn-text btn-dialog">Lưu</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CustomerListDetail",
  components: {},
  props: [
    "isHide",
    "customergroups",
    "showButtonDelete",
    "customer",
    "formMode",
    "data",
    "isValidated",
  ],
  data() {
    return {
      arrayError: [],
    };
  },
  methods: {
    deleteCustomer() {
      axios
        .delete(
          "http://localhost:53873/api/v1/customers/" + this.customer.customerId
        )
        .then(() => {
          this.btnCancelOnClick();
          this.$emit("loadData");
          this.$emit("showSnackbar", false);
        });
    },
    saveCustomer() {
       const me = this;
      var inputs = this.$refs;
      var array = Object.keys(inputs);
      array.map((value) => {
        this.isValidate(value);
      });
      for (var key in inputs) {
        if (inputs[key].title != "") {
          inputs[key].focus();
          setTimeout(() => {
            this.$emit("changeisValidated", false);
          }, 0);
          console.log(this.isValidated);
          this.$emit("showSnackbar", false);
          return;
        } else {
          this.$emit("changeisValidated", true);
        }
      }
      console.log(this.isValidated);
      if (this.formMode == 0) {
        axios
          .put("http://localhost:53873/api/v1/customers", me.customer)
          .then(() => {
            this.btnCancelOnClick();
            this.$emit("loadData");
            this.$emit("showSnackbar", false);
          })
          .catch((ex) => {
            this.$emit("showDialogError", false);
            this.$emit("getErrorsDialog", ex.response.data);
          });
      } else {
        axios
          .post("http://localhost:53873/api/v1/customers", me.customer)
          .then(() => {
            this.btnCancelOnClick();
            this.$emit("loadData");
            this.$emit("showSnackbar", false);
          })
          .catch((ex) => {
            this.$emit("showDialogError", false);
            this.$emit("getErrorsDialog", ex.response.data);
          });
      }
    },
    btnAddOnClick() {},
    btnCancelOnClick() {
      this.$emit("closePopup", true);
    },
    isValidate(value) {
      var inputs = this.$refs;
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (inputs[value].required === true && !inputs[value].value) {
        inputs[value].style.border = "1px solid #F65454";
        inputs[value].title = "Không được để trống";
      } else if (!testEmail.test(inputs[value].value) && value === "email") {
        inputs[value].style.border = "1px solid #F65454";
        inputs[value].title = "Không đúng định dạng";
      } else {
        inputs[value].title = "";
        inputs[value].style.border = "";
      }
    },
  },
  created() {},
};
</script>
<style>
@import "../../../../styles/basics/dialog-customer.css";
</style>