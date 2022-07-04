<template>
  <div class="app_container card_box">
    <div class="txt_title">添加/修改用户信息</div>
    <el-form
      class="userForm"
      ref="userFormRef"
      :model="userForm"
      :rules="rules"
    >
      <el-form-item label="用户名称" prop="userName">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="userForm.userName"
        >
        </el-input> 
      </el-form-item>
      <el-form-item label="登录账号" prop="loginId">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="userForm.loginId"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="userForm.phone"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="所属角色" prop="roleName">
        <el-select
          class="input_width"
          v-model="userForm.roleName"
          placeholder="请选择"
        >
          <el-option
            v-for="item in roleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="所属区域" prop="areaName">
        <el-select
          class="input_width"
          v-model="userForm.areaName"
          placeholder="请选择"
        >
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="userForm.password"
        >
        </el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="confirmPass">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="userForm.confirmPass"
        >
        </el-input>
      </el-form-item>

       <el-form-item label="是否启用" prop="status">
            <el-radio-group v-model="userForm.status">
              <el-radio label="10">开启</el-radio>
              <el-radio label="20">关闭</el-radio>
            </el-radio-group>
       </el-form-item>

      <div class="btn_box">
        <el-button class="btn_width btn_bgc1">提交</el-button>
        <el-button class="btn_width btn_bgc2" @click="submitForm"
          >取消</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        userName: null, //用户名称
        loginId: null,
        phone: null,
        areaCode: null,
        areaName: null,
        password: null,
        status:"10",
      },
      roleOptions: [], //区域
      areaOptions: [],
      rules: {
        userName: [
          { required: true, message: "请填写用户名称", trigger: "blur" },
        ],
        loginId: [
          { required: true, message: "请填写登录账号", trigger: "blur" },
        ],
        phone: [{ required: true, message: "请填写手机号码", trigger: "blur" }],
        areaCode: [
          { required: true, message: "请填写区域编码", trigger: "blur" },
        ],
        roleName: [
          { required: true, message: "请填写所属角色", trigger: "blur" },
        ],
        areaName: [
          { required: true, message: "请填写所属区域", trigger: "blur" },
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
        confirmPass: [
          { required: true, message: "请填写确认密码", trigger: "blur" },
        ],
        status: [
          { required: true, message: "请选择是否启用", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.app_container {
  position: relative;
  padding: 24px;
  min-height: 896px;
  .txt_title {
    font-size: 16px;
    margin-bottom: 32px;
  }
  .btn_box {
    margin-top: 94px;
    .btn_bgc1 {
      background: #3757e2;
      color: #ffffff;
    }
    .btn_bgc2 {
      border: 1px solid #aaaaaa;
    }
    .btn_width {
      width: 104px;
      height: 40px;
      font-size: 14px;
      border-radius: 2px 2px 2px 2px;
    }
  }
}
.input_width {
  width: 380px;
  height: 40px;
}
</style>
<style scoped>
.el-input /deep/ .el-input__inner {
  width: 380px;
  height: 40px;
}
.el-select /deep/ .el-input {
  width: 380px;
}
.el-select /deep/ .el-input__suffix {
  width: 40px;
  height: 40px;
  right: 0;
  background-color: #4a6bfa;
}
.el-select .el-input__inner {
  width: 380px;
}

.el-tabs--card /deep/ .el-tabs__header {
  margin-bottom: 32px;
}
.el-form-item {
  margin-bottom: 16px;
}
.el-form /deep/ .el-form-item__label {
  width: 86px;
}
</style>