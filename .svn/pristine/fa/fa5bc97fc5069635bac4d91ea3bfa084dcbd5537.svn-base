
<template>
  <div class="container-main" v-loading="loading">
    <h2 class="form-title">
      {{ !$route.params.type ? "新增专项规划" : "修改专项规划" }}
    </h2>
    <div class="form">
      <el-form ref="form" :rules="rules" :model="form" label-width="113px">
        <el-form-item label="规划名称" prop="planName">
          <el-input v-model="form.planName"></el-input>
        </el-form-item>
        <el-form-item label="建新面积（公顷）">
          <el-input v-model="form.balanceArea"></el-input>
        </el-form-item>
        <el-form-item label="所属区域" prop="regionCode">
          <el-select
            v-model="form.regionCode"
            placeholder="请选择活动区域"
            class="is-sesect-icon"
          >
            <el-option
              v-for="item in regionOptions"
              :key="item.regionCode"
              :label="item.regionName"
              :value="item.regionCode"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结余面积（公顷）">
          <el-input v-model="form.surplusArea"></el-input>
        </el-form-item>
        <el-form-item label="规划期（年）" prop="guihuaqi">
          <el-select
            v-model="form.guihuaqi"
            placeholder="请选择活动区域"
            class="is-sesect-icon"
          >
            <el-option
              v-for="item in planDateOptions"
              :key="item.itemCode"
              :label="item.itemCode"
              :value="item.itemValue"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="农村建设用地拆旧区总面积（公顷）">
          <el-input v-model="form.demolishedArea"></el-input>
        </el-form-item>
        <el-form-item label="复垦面积（公顷）">
          <el-input v-model="form.reclamationArea"></el-input>
        </el-form-item>
        <el-form-item class="upload-list" label="上传附件">
          <XxUploadList
              @getfileInfo="getfileInfo"
              :id="$route.params.id"
              :moduleName="moduleName"
              :fileInfoListShow="form.fileInfoList">
          </XxUploadList>
        </el-form-item>
      </el-form>
    </div>
    <div class="im-layer">
      <h2 class="layer-title">导入图层</h2>
      <el-table :data="tableData">
        <el-table-column prop="date" label="数据文件名称"> </el-table-column>
        <el-table-column prop="name" label="数据类型"> </el-table-column>
        <el-table-column prop="address" label="上传时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" icon="iconfont icon-xiugai">修改</el-button>
            <el-button
              type="text"
              class="delete-icon"
              icon="iconfont icon-shanchu"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="handles" v-if="this.$route.params.type !== 'see'">
      <el-button type="primary" @click="handleConfirm">确定</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
import {
  saveLandSpecialPlan,
  updateLandSpecialPlan,
  findLandSpecialPlanById,
} from "@/api/subjectPlan";
import { findArcSysArea, findDictDetail } from "@/api/common";
import XxUploadList from "@/components/commonComponents/XxUploadList"
export default {
  components:{
    XxUploadList
  },
  data() {
    return {
      loading: false,
      regionOptions: [],
      planDateOptions: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 ",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路",
        },
      ],
      form: {
        id: undefined,
        planName: "",
        balanceArea: "",
        regionCode: "",
        surplusArea: "",
        demolishedArea: "",
        reclamationArea: "",
        guihuaqi: "",
        startYear: "",
        endYear: "",
        fileInfoList:[]
      },
      rules: {
        planName: [
          { required: true, message: "请输入规划名称", trigger: "blur" },
        ],
        regionCode: [
          { required: true, message: "请选择所属区域", trigger: "change" },
        ],
        guihuaqi: [
          { required: true, message: "请选择规划期", trigger: "change" },
        ],
      },
      moduleName:"专项规划管理"
    };
  },

  watch: {
    "form.guihuaqi": function (newValue, oldV) {
      if (!newValue) return;
      const dataArr = newValue.split("-");
      this.form.startYear = dataArr[0];
      this.form.endYear = dataArr[1];
    },
    "form.startYear": function (newValue, oldV) {
      this.form.guihuaqi = this.form.startYear + "-" + this.form.endYear;
    },
  },

  created() {
    this.handleUpdate();
    this.init();
  },
  methods: {
    init() {
      this.getRegion();
      this.getDict();
    },
    getDict() { //查询规划期
      findDictDetail("ghq").then((res) => {
        this.planDateOptions = res.data;
      });
    },
    getRegion() { //查询所属区域
      findArcSysArea().then((res) => {
        this.regionOptions = res.data;
      });
    },
    getfileInfo(data){
      this.form.fileInfoList = data;
    },
    handleConfirm() { //确定
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.$route.params.type == "isAdd") {
            //新增
            saveLandSpecialPlan(this.form).then((res) => {
              this.$message({
                message: "新增成功",
                type: "success",
              });
              this.$router.push({
                name: "subjectPlan",
              });
            });
          } else if (this.$route.params.type == "isUpdate") {
            //修改
            updateLandSpecialPlan(this.form).then((res) => {
              this.$message({
                message: "修改成功",
                type: "success",
              });
              this.$router.push({
                name: "subjectPlan",
              });
            });
          }
        } else {
          return false;
        }
      });
    },
    async handleUpdate() {
      /**
       * 判断是不是修改：是修改就回显。
       */
      if (!this.$route.params.type) return;
      this.loading = true;
      let res = await findLandSpecialPlanById(this.$route.params.id);
      for (let key in this.form) {
        this.form[key] = res.data[key];
      }
      this.loading = false;
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
  grid-area: 3/2/6/-1;
}
.el-table {
  width: 584px;
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
