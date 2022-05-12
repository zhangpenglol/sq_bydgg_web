<template>
  <div class="app_container card_box">
    <div class="txt_title">添加/修改角色信息</div>
    <el-form
      class="roleForm"
      ref="roleFormRef"
      :model="roleForm"
      :rules="rules"
    >
      <el-form-item label="角色名称" prop="confSystem">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="roleForm.confSystem"
        >
        </el-input>
      </el-form-item>      
      <el-form-item label="角色描述" prop="roleDes">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="roleForm.roleDes"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="配置系统" prop="confSystem">
        <el-select
          class="input_width"
          v-model="roleForm.confSystem"
          placeholder="请选择"
        >
          <el-option
            v-for="item in sysOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="功能权限" prop="authority">
        <el-select
          class="input_width"
          v-model="roleForm.authority"
          placeholder="请选择"
        >
          <el-option
            v-for="item in authorityOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="数据权限" prop="dataStatus">
            <el-radio-group v-model="roleForm.dataStatus">
              <el-radio label="10">仅限本级区域</el-radio>
              <el-radio label="20">本级及下级区域</el-radio>
              <el-radio label="30">所有区域</el-radio>

            </el-radio-group>
       </el-form-item>
       <el-form-item label="是否启用" prop="status">
            <el-radio-group v-model="roleForm.status">
              <el-radio label="10">是</el-radio>
              <el-radio label="20">否</el-radio>
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
      roleForm: {
        confSystem: null, //角色名称
        loginId: null,
        roleDes: null,
        areaCode: null,
        authority: null,
        password: null,
        dataStatus:"10",
        status:"10",
      },
      sysOptions: [], //区域
      authorityOptions: [],
      rules: {
        confSystem: [
          { required: true, message: "请填写角色名称", trigger: "blur" },
        ],
        loginId: [
          { required: true, message: "请填写登录账号", trigger: "blur" },
        ],
        roleDes: [{ required: true, message: "请填写角色描述", trigger: "blur" }],
        areaCode: [
          { required: true, message: "请填写区域编码", trigger: "blur" },
        ],
        confSystem: [
          { required: true, message: "请填写配置系统", trigger: "blur" },
        ],                
        authority: [
          { required: true, message: "请填写功能权限", trigger: "blur" },
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
        confirmPass: [
          { required: true, message: "请填写确认密码", trigger: "blur" },
        ],
        dataStatus: [
          { required: true, message: "请选择数据权限", trigger: "blur" },
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
    position: fixed;
    bottom: 94px;
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