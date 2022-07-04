<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-14 09:47:47
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-14 14:27:33
-->
<template>
  <div class="container-main">
    <h2 class="form-title">
      {{ $route.params.type == "update" ? "修改拆旧地块" : "审查拆旧地块" }}
    </h2>
    <div class="form">
      <el-form ref="form" :rules="rules" :model="form" label-width="170px">
        <el-form-item label="地块编号" prop="landCode">
          <el-input v-model="form.landCode"></el-input>
        </el-form-item>

        <el-form-item label="所属区域" prop="regionCode">
          <el-select
            v-model="form.regionName"
            placeholder="请选择活动区域"
            class="is-sesect-icon"
          >
            <el-option
              v-for="item in regionOptions"
              :key="item.regionName"
              :label="item.regionName"
              :value="item.regionName"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目编号" prop="projectNo">
          <el-input v-model="form.projectNo"></el-input>
        </el-form-item>
        <el-form-item label="地块建设规模（公顷）" prop="buildArea">
          <el-input v-model="form.buildArea"></el-input>
        </el-form-item>
        <el-form-item label="新增农用地面积" prop="farmingArea">
          <el-input v-model="form.farmingArea"></el-input>
        </el-form-item>
        <el-form-item label="新增耕地面积" prop="ploughArea">
          <el-input v-model="form.ploughArea"></el-input>
        </el-form-item>
        <el-form-item label="耕地类型">
          <el-input v-model="form.ploughType"></el-input>
        </el-form-item>
        <el-form-item label="水田面积">
          <el-input v-model="form.paddyfieldArea"></el-input>
        </el-form-item>
        <el-form-item label="复垦前地类">
          <el-input v-model="form.reclamationAgoType"></el-input>
        </el-form-item>
        <el-form-item label="地类面积">
          <el-input v-model="form.totalArea"></el-input>
        </el-form-item>
        <el-form-item label="权属性质">
          <el-input v-model="form.ownershipProperty"></el-input>
        </el-form-item>
        <el-form-item label="复垦后新增耕地质量等级">
          <el-input v-model="form.laterLandGrade"></el-input>
        </el-form-item>
        <el-form-item class="upload-list" label="上传论证文件">
          <xx-upload-list></xx-upload-list>
        </el-form-item>
      </el-form>
    </div>

    <div class="handles">
      <el-button
        type="primary"
        v-if="$route.params.type == 'update'"
        @click="handleUpdate"
        >确定</el-button
      >
      <el-button
        type="primary"
        v-if="$route.params.type !== 'update'"
        @click="handleExamine"
        >确认审查</el-button
      >
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
import ReclamationPlan from "../components/ReclamationPlan";
import {
  findOldLandDetailById,
  updateLandDemolitionOld,
  UpdateOldLandDetail,
} from "@/api/dismantlingOld";
import { findArcSysArea } from "@/api/common";
export default {
  components: { ReclamationPlan },
  data() {
    return {
      tableData: [],
      regionOptions: [],
      form: {
        id: undefined,
        regionCode: "",
        landCode: "",
        projectNo: "",
        buildArea: "",
        farmingArea: "",
        ploughArea: "",
        ploughType: "",
        paddyfieldArea: "",
        reclamationAgoType: "",
        totalArea: "",
        ownershipProperty: "",
        laterLandGrade: "",
        regionName: "",
      },
      resData: undefined,
      rules: {
        landCode: [{ required: true, message: "请补充", trigger: "blur" }],
        regionCode: [{ required: true, message: "请补充", trigger: "change" }],
        projectNo: [{ required: true, message: "请补充", trigger: "blur" }],
        buildArea: [{ required: true, message: "请补充", trigger: "blur" }],
        farmingArea: [{ required: true, message: "请补充", trigger: "blur" }],
        ploughArea: [{ required: true, message: "请补充", trigger: "blur" }],
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      findOldLandDetailById(this.$route.params.id).then((res) => {
        this.resData = res.data;
        for (let key in this.form) {
          this.form[key] = res.data.landDetail[key];
        }
      });
      this.getRegion();
    },
    getRegion() {
      findArcSysArea().then((res) => {
        this.regionOptions = res.data;
      });
    },
    handleUpdate() {
      //修改拆旧地块
      this.$refs["form"].validate((valid) => {
        if (!valid) return;
        Object.assign(this.resData.landDetail, this.form);
        UpdateOldLandDetail(this.resData).then((res) => {
          this.$message({
            type: "success",
            message: "成功",
          });
          this.$router.push({
            name: "dismantlingOld",
          });
        });
      });
    },
    handleExamine() {
      //ID    //确认审查
      this.$refs["form"].validate((valid) => {
        if (!valid) return;
        let { id } = this.form;
        updateLandDemolitionOld({ id, progress: "待核验" }).then((res) => {
          this.$message({
            type: "success",
            message: "成功",
          });
          this.$router.push({
            name: "dismantlingOld",
          });
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>

.form .form {
  padding: 36px 0px;
}
.el-input,
.el-select {
  width: 380px;
}
.el-form {
  display: grid;
  grid-template-columns: 630px 610px;
  align-items: start;
}
.upload-list {
  grid-area: 7/2/9/-1;
}
.el-table {
  width: 912px;
}
.handles {
  margin-top: 72px;
  .el-button {
    width: 104px;
  }
}
</style>
<style scoped>
/* 解决下拉框右边蓝色的icon比下拉框高一点点 */
.form >>> input {
  height: inherit;
}
/*
*改变下载列表中的方框大小及位置
 */
.form >>> .el-upload-dragger {
  width: 380px;
  height: 138px;
}
.form >>> .el-icon-upload {
  margin-top: 20px;
}
/*
*重写表格字体的颜色
* */
.im-layer >>> .el-table thead {
  color: #606266;
}
</style>
