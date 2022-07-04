<template>
  <div class="app_container card_box">
    <div class="txt_title">添加/修改角色信息</div>
    <el-form
      class="roleForm"
      ref="roleFormRef"
      :model="roleForm"
      :rules="rules"
    >
      <el-form-item label="角色名称" prop="roleName">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="roleForm.roleName"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="roleDescription">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="roleForm.roleDescription"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="配置系统" prop="configurationSystem">
        <el-select
          class="input_width"
          v-model="roleForm.configurationSystem"
          placeholder="请选择"
        >
          <el-option
            v-for="item in sysOptions"
            :key="item.value"
            :label="item.websiteName"
            :value="item.systemType"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="功能权限" prop="selectList">
        <div class="tree">
          <el-tree
            show-checkbox
            :data="menulist"
            :props="defaultProps"
            :filter-node-method="filterNode"
            ref="tree"
            node-key="id"
            @check="
              (nodeObj, SelectedObj) =>
                handleCheckChange(nodeObj, SelectedObj)
            "
          ></el-tree>
        </div>
      </el-form-item>

      <el-form-item label="数据权限" prop="dataAuthority">
        <el-radio-group v-model="roleForm.dataAuthority">
          <el-radio label="10">仅限本级区域</el-radio>
          <el-radio label="20">本级及下级区域</el-radio>
          <el-radio label="30">所有区域</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否启用" prop="isEnable">
        <el-radio-group v-model="roleForm.isEnable">
          <el-radio label="10">是</el-radio>
          <el-radio label="20">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <div class="btn_box">
        <el-button class="btn_width btn_bgc1" @click="submitForm"
          >提交</el-button
        >
        <el-button class="btn_width btn_bgc2" @click="reset">取消</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import {
  findArcSysRole,
  findArcSysRoleByUserId,
  saveRole,
  updateArcSysRole,
  deleteAllArcSysRole,
} from "@/api/role.js";
import { getAuthMenu } from "@/api/user.js";
export default {
  data() {
    return {
      roleForm: {
        roleName: null, //角色名称
        loginId: null,
        roleDescription: null,
        authority: null,
        password: null,
        dataAuthority: "10",
        isEnable: "10",
        configurationSystem:null,
        menuIds:[],
      },
      menulist: [],
      sysOptions: [
        {
          systemType:'1',
          websiteName:'宿迁市增减挂钩系统'
        },
        {
          systemType:'2',
          websiteName:'宿迁App'
        }
      ], //配置系统
      authorityOptions: [],
      rules: {
        roleName: [
          { required: true, message: "请填写角色名称", trigger: "blur" },
        ],
        loginId: [
          { required: true, message: "请填写登录账号", trigger: "blur" },
        ],
        roleDescription: [
          { required: true, message: "请填写角色描述", trigger: "blur" },
        ],
        areaCode: [
          { required: true, message: "请填写区域编码", trigger: "blur" },
        ],
        roleName: [
          { required: true, message: "请填写配置系统", trigger: "blur" },
        ],
        authority: [
          { required: true, message: "请填写功能权限", trigger: "blur" },
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
        confirmPass: [
          { required: true, message: "请填写确认密码", trigger: "blur" },
        ],
        dataAuthority: [
          { required: true, message: "请选择数据权限", trigger: "blur" },
        ],
        isEnable: [
          { required: true, message: "请选择是否启用", trigger: "blur" },
        ],
        selectList: [
          { required: true, message: "请选择是否启用", trigger: "blur" },
        ],
      },
      defaultProps: {
        children: "child",
        label: "title",
      },
    };
  },
  created() {},
  mounted() {
    this.getMenuList();
  },
  methods: {
    submitForm() {
      let params = {
        // configurationSystem: this.roleForm.configurationSystem,
        roleName: this.roleForm.roleName,
        roleDescription: this.roleForm.roleDescription,
        menuIds: this.roleForm.menuIds,
        // dataAuthority:this.roleForm.dataAuthority,
        // isEnable:this.roleForm.isEnable,
      };
      saveRole(params).then((res) => {
        if (res.status !== 200) return this.$message.error("添加角色信息失败");
        this.$message.success("添加角色信息成功!");
        this.$store.dispatch("tagsView/delView", this.$route);
        this.$router.go(-1);
      });
    },
    //获取菜单信息
    getMenuList() {
      getAuthMenu().then((res) => {
        this.menulist = res.data;
      });
    },
    reset(){

    },
    filterNode(value, data) {
      if (!value) return true;
      return data.title.indexOf(value) !== -1;
    },
    handleCheckChange(nodeObj, SelectedObj) {
      
        let ParentNode = SelectedObj.halfCheckedKeys;
        let ChildNode = SelectedObj.checkedKeys;
        console.log(ParentNode)
        this.roleForm.menuIds = [...ParentNode, ...ChildNode].join(",");
    },
    //过滤空置
    filterNull(arr) {
      for (let item in arr) {
        if (arr[item].length == 0) {
          arr[item] = "";
        }
        if (arr[item].length !== 0) {
          let arr1 = arr[item].split(",");
          let arr2 = arr1.splice(0);
          arr2.shift();
          arr[item] = arr2.join(",");
        }
      }
      return arr;
    }
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
    margin-top: 200px;
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
.tree {
  width: 380px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-left: 85px;
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