<template>
  <div>
    <!--dialog-->
    <div class="m-dialog" :class="{ isHide: isHide }">
      <div class="dialog-modal"></div>
      <div class="dialog dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title">Thông tin nhân viên</div>
          <button
            class="m-btn dialog-close m-close-dialog"
            v-on:click="btnCancelOnClick"
          ></button>
        </div>
        <div class="dialog-body">
          <div class="upload-photo">
            <div class="upload-contain"><input type="file" id="photo" /></div>
            <label
              >Vui lòng chọn ảnh có định dạng <br /><b
                >.jpg, .jpeg, .png, .gif</b
              ></label
            >
          </div>
          <!-- Phần nhập liệu -->
          <div class="upload-infor">
            <div class="title">
              <div class="infor-title">A. Thông tin chung:</div>
              <div class="border-bottom-title"></div>
            </div>
            <div class="dialog-control">
              <div class="m-row">
                <div class="control-title">
                  Mã nhân viên (<label class="required-red">*</label>)
                </div>
                <div class="control-input">
                  <input
                    type="text"
                    fieldName="EmployeeCode"
                    id="txtEmployeeCode"
                    required
                  />
                </div>
              </div>
              <div class="m-row">
                <div class="control-title">
                  Họ và tên (<label class="required-red">*</label>)
                </div>
                <div class="control-input">
                  <input
                    type="text"
                    fieldName="FullName"
                    id="txtFullName"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="dialog-control">
              <div class="m-row">
                <div class="control-title">Ngày sinh</div>
                <div class="control-input">
                  <input
                    type="date"
                    fieldName="DateOfBirth"
                    id="dtDateOfBirth"
                  />
                </div>
              </div>
              <div class="m-row">
                <div class="control-title">Giới tính</div>
                <div class="control-input">
                  <select id="cbxGender" fieldName="Gender">
                    <!--<option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                    <option value="2">Khác</option>-->
                  </select>
                </div>
              </div>
            </div>
            <div class="dialog-control">
              <div class="m-row">
                <div class="control-title">
                  Số CMT/Căn cước (<label class="required-red">*</label>)
                </div>
                <div class="control-input">
                  <input
                    type="text"
                    fieldName="CitizenIdentityCode"
                    id="txtCitizenIdentityCode"
                    required
                  />
                </div>
              </div>
              <div class="m-row">
                <div class="control-title">Ngày cấp</div>
                <div class="control-input">
                  <input
                    type="date"
                    fieldName="CitizenIdentityDate"
                    id="txtCitizenIdentityDate"
                  />
                </div>
              </div>
            </div>
            <div class="dialog-control">
              <div class="m-row">
                <div class="control-title">Nơi cấp</div>
                <div class="control-input">
                  <input
                    type="text"
                    fieldName="CitizenIdentityPlace"
                    id="txtCitizenIdentityPlace"
                  />
                </div>
              </div>
            </div>
            <div class="dialog-control">
              <div class="m-row">
                <div class="control-title">
                  Email (<label class="required-red">*</label>)
                </div>
                <div class="control-input">
                  <input
                    type="email"
                    fieldName="Email"
                    id="txtEmail"
                    class="input-col-1"
                    required
                  />
                </div>
              </div>
              <div class="m-row">
                <div class="control-title">
                  Số điện thoại (<label class="required-red">*</label>)
                </div>
                <div class="control-input">
                  <input
                    type="text"
                    fieldName="PhoneNumber"
                    id="txPhoneNumber"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="title">
              <div class="infor-title">B. Thông tin công việc:</div>
              <div class="border-bottom-title"></div>
            </div>
            <div class="dialog-control">
              <div class="m-row">
                <div class="control-title">Vị trí</div>
                <div class="control-input">
                  <select id="cbxPosition" fieldName="PositionId"></select>
                </div>
              </div>
              <div class="m-row">
                <div class="control-title">Phòng ban</div>
                <div class="control-input">
                  <select id="cbxDepartment" fieldName="DepartmentId"></select>
                </div>
              </div>
            </div>
            <div class="dialog-control">
              <div class="m-row">
                <div class="control-title">Mã số thuế cá nhân</div>
                <div class="control-input">
                  <input type="text" fieldName="TaxCode" id="txtTaxCode" />
                </div>
              </div>
              <div class="m-row">
                <div class="control-title">Mức lương cơ bản</div>
                <div class="control-input">
                  <input
                    type="text"
                    fieldName="Salary"
                    id="txtSalary"
                    onkeypress="return isNumber(event)"
                  />
                </div>
              </div>
            </div>
            <div class="dialog-control">
              <div class="m-row">
                <div class="control-title">Gia nhập công ty</div>
                <div class="control-input">
                  <input type="date" fieldName="DateJoin" id="txtDateJoin" />
                </div>
              </div>
              <div class="m-row">
                <div class="control-title">Tình trạng công việc</div>
                <div class="control-input">
                  <select fieldName="StatusJob" id="cbxStatusJob">
                    <!--<option value="0">Đã nghỉ việc</option>
                                    <option value="1">Đang làm việc</option>
                                    <option value="2">Đang thử việc</option>
                                    <option value="3">Đã nghỉ hưu</option>-->
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Phần footer dialog employee -->
        <div class="dialog-footer">
          <div>
            <button tabindex="14" class="btn-delete m-btn m-btn-delete">
              <span>Xóa</span>
            </button>
          </div>
          <div class="footer-right">
            <button tabindex="15" class="m-btn btn-cancel m-close-dialog">
              <span>Hủy</span>
            </button>
            <button tabindex="16" class="m-btn btn-add-save" id="btn-save">
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
export default {
  name: "EmployeeListDetail",
  props: ["isHide"],
  data() {
    return {};
  },
  methods: {
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
/* @import '../../../../styles/basics/dialog-employee.css'; */
</style>