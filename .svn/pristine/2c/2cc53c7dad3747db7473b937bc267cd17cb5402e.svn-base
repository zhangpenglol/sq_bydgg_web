<template>
  <div class="app_container card_box">
    <div class="txt_title">新增/修改区域</div>
    <el-form
      class="areaForm"
      ref="areaFormRef"
      :model="areaForm"
      :rules="rules"
    >
      <el-form-item label="区域名称" prop="regionName">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="areaForm.regionName"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="区域拼音" prop="regionNameEs">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="areaForm.regionNameEs"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="区域编码" prop="regionCode">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="areaForm.deviceName"
        >
        </el-input>
      </el-form-item>

      <el-form-item label="上级区域" prop="parentRegionCode">
        <el-select
          class="input_width"
          v-model="areaForm.parentRegionCode"
          placeholder="请选择"
        >
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.regionName"
            :value="item.regionNameEs"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="区域类型" prop="regionType">
        <el-select
          class="input_width"
          v-model="areaForm.regionType"
          placeholder="请选择"
        >
          <el-option
            v-for="item in regionTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="经纬度" prop="deviceName">
        <el-input
          class="input_width"
          placeholder="请填写"
          v-model="areaForm.deviceName"
        >
        </el-input>
      </el-form-item>

      <div class="btn_box">
        <el-button class="btn_width btn_bgc1" @click="submitForm">提交</el-button>
        <el-button class="btn_width btn_bgc2" @click="submitForm"
          >取消</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import {findArcSysArea,findregionCode,addAndUpdateAreaList,deleteAllAreaList} from "@/api/area.js";
export default {
  name:'addarea',
  data() {
    return {
      areaForm: {
        regionName: null, //区域名称
        regionNameEs: null,
        regionCode: null,
        regionType: null,
      },
      areaOptions: [], //区域
      regionTypeOptions: [
        {
          label:'市',
          value:'市'
        },
        {
          label:'县/区',
          value:'县/区'
        },
        {
          label:'乡/镇',
          value:'乡/镇'
        },
        {
          label:'村/居委会',
          value:'村/居委会'
        }
      ],
      rules: {
        regionName: [
          { required: true, message: "请填写区域名称", trigger: "blur" },
        ],
        regionNameEs: [
          { required: true, message: "请填写区域拼音", trigger: "blur" },
        ],
        regionCode: [
          { required: true, message: "请填写区域编码", trigger: "blur" },
        ],
        parentRegionCode: [
          { required: true, message: "请填写上级区域", trigger: "blur" },
        ],
        regionType: [
          { required: true, message: "请填写区域类型", trigger: "blur" },
        ],
      },
    };
  },
  created(){
    this.getAreaList();
  },
  methods:{
    getAreaList() {
      findArcSysArea().then((res) => {
        if (res.status !== 200) return this.$message.error("查询信息失败!");
        this.areaOptions = res.data;
      });
    },
    submitForm(){
      let params = {
        regionName:this.regionName,
        regionNameEs:this.regionNameEs,
        regionCode:this.regionCode,
        regionType:this.regionType,
      }
      addAndUpdateAreaList(params).then(res=>{
        console.log(res)
      })
    }
  }
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