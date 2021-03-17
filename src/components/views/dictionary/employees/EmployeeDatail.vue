<template>
  <div id="ModalAdd" class="dialog dialog-detail" :class="{ isHide: isHide }">
    <div id="dialog-modal" class="dialog-modal"></div>
    <div class="dialog-content s-dialog">
      <div class="m-title u-bor-all">
        <span class="m-detail-title">Thông tin nhân viên</span>
        <button id="btn-cancel" type="button" class="bt-close" @click="btnCloseOnClick">X</button>
      </div>
      <div class="m-content u-content">
        <div class="dialog-body">
          <div class="m-row m-flex">
            <div class="m-col el-avatar-customer m-flex-1">
              <div class="el-avatar"></div>
              <div class="el-avatar-note text-align-center">
                Vui lòng chọn ảnh có định dạng <br /><b>.jpg, .jpeg, .png, .gif. </b>
              </div>
            </div>
            <div class="m-col el-left m-flex-2">
              <div class="m-row mg-top-0 m-flex">
                <div class="m-col m-flex-1">
                  <div class="m-label">
                    Mã khách hàng (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      class="input-request form-vali input-required border-red"
                      required
                      id="txtEmployeeCode"
                      fieldname="CustomerCode"
                      type="text"
                       />
                  </div>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">
                    Họ và tên (<span class="label-required">*</span>)
                  </div>
                  <div class="m-control">
                    <input
                      id="txtFullName"
                      class="input-request form-vali input-required"
                      required
                      fieldname="FullName"
                      type="text"
                      
                    />
                  </div>
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-col m-flex-1">
                  <div class="m-label">Chức vụ</div>
                  <select>
                    <option value="">Khách Vip</option>
                    <option value="">Khách thường</option>
                    <option value="">Khách vãn lai</option>
                  </select>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">Nhóm khách hàng</div>
                  <select>
                     <option value="">Khách Vip</option>
                    <option value="">Khách thường</option>
                    <option value="">Khách vãn lai</option>
                  </select>
                </div>
              </div>
              <div class="m-row m-flex">
                <div class="m-flex-1">
                  <div class="m-label">Ngày sinh</div>
                  <div class="m-control">
                    <input
                      class="input-request form-vali"
                      required
                      id="dtDateOfBirth"
                      fieldname="DateOfBirth"
                      type="date"
                      
                    />
                  </div>
                </div>
                <div class="m-flex-1 mg-left-10px">
                  <div class="m-label">Giới tính</div>
                  <div class="m-radio-group" id="rdGender">
                    <div class="m-radio-item">
                      <input
                        type="radio"
                        id="rdMale"
                        fieldname="Gender"
                        value=""
                        name="gender"
                        checked=""
                      />
                      <label for="rdMale">Nam</label>
                    </div>
                    <div class="m-radio-item mg-left-10px">
                      <input
                        type="radio"
                        id="rdFemale"
                        fieldname="Gender"
                        value=""
                        name="gender"
                      />
                      <label for="rdMale">Nữ</label>
                    </div>
                    <div class="m-radio-item mg-left-10px">
                      <input
                        type="radio"
                        id="rdOther"
                        fieldname="Gender"
                        value=""
                        name="gender"
                      />
                      <label for="rdOther">Khác</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="m-row m-flex">
            <div class="m-flex-2">
              <div class="m-label">Email</div>
              <div class="m-control">
                <input
                  class="input-request form-vali"
                  required
                  id="txtEmail"
                  fieldname="Email"
                  type="email"
                  placeholder="example@domain.com"
                  
                />
              </div>
            </div>
            <div class="m-flex-1 mg-left-10px">
              <div class="m-label">
                Số điện thoại (<span class="label-required">*</span>)
              </div>
              <div class="m-control">
                <input
                  class="input-request form-vali input-required"
                  required
                  id="txtPhoneNumber"
                  fieldname="PhoneNumber"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  
                />
              </div>
            </div>
          </div>
          <div class="m-row m-flex">
            <div class="m-flex-2">
              <div class="m-label">Phòng ban</div>
              <div class="m-control">
                <input
                  class="input-request form-vali"
                  id="txtDepartmentName"
                  required
                  type="text"
                  fieldname="DepartmentName"
                />
              </div>
            </div>
            <div class="m-flex-1 mg-left-10px">
              <div class="m-label">Mã số thuế</div>
              <div class="m-control">
                <input>
              </div>
            </div>
          </div>
          <div class="m-row m-flex">
            <div class="m-flex-3">
              <div class="m-label">Địa chỉ</div>
              <div class="m-control">
                <input
                  class="input-request form-vali"
                  required
                  id="txtAddress"
                  fieldname="Address"
                  type="text"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-footer u-bor-all">
        <button id="btn-cancels" @click="btnCloseOnClick" class="misa-btn m-btn-cancel">Hủy</button>
        <button id="btnSave" @click="brnSave" class="misa-btn m-btn-default">
          <i class="far fa-save"></i>
          <span>Lưu</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import * as axios from "axios";
export default {
  props: ["isHide"],
  methods: {
      btnCloseOnClick(){
          this.$emit('closeUp',true);
      },
      brnSave(){
          alert("Nhập dữ liệu!")
      },
      async saveEmployee() {
      const response = await axios.post("http://api.manhnv.net/api/customers", this.customer);
      console.log(response);
    }
  },
  created(){
      console.log("abc",this.isHide);
  }
};
</script>
