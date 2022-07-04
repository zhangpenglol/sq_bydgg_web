
<template>
  <div class="container-main" v-loading="loading">
    <h2 class="form-title">
      {{ !$route.params.type ? "新增实施方案" : "修改实施方案" }}
    </h2>
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息">
        <div class="form">
          <el-form ref="form" :rules="rules" :model="form" label-width="143px">
            <el-form-item label="项目区编号" prop="projectAreaCode">
              <el-input v-model="form.projectAreaCode" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="项目区名称" prop="projectName">
              <el-input v-model="form.projectName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="项目类型">
              <el-select
                  v-model="form.projectType"
                  placeholder="请选择"
                  clearable
                  class="is-sesect-icon"
              >
                <el-option
                    v-for="item in projectTypeOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属区县" prop="regionName">
              <el-select
                  v-model="form.regionName"
                  placeholder="请选择"
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
            <el-form-item label="实施方案批文号" prop="approvalNo">
              <el-input v-model="form.approvalNo" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="拟实施年份">
              <el-date-picker
                  class="input_date"
                  value-format="yyyy"
                  v-model="form.implementedYear"
                  type="year"
                  placeholder="请选择">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="批复日期" prop="approvalDate">
              <el-input v-model="form.approvalDate" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="批准机关">
              <el-input v-model="form.approvalOffice" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="地块总面积">
              <el-input v-model="form.landArea" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="土地用途">
              <el-input v-model="form.landUse" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="城镇建新类型及面积">
              <el-select
                  v-model="form.buildNewType"
                  placeholder="请选择"
                  clearable
                  class="is-sesect-icon"
              >
                <el-option
                    v-for="item in buildNewTypeOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                >
                </el-option>
              </el-select>
              <el-input-number v-model="form.buildNewArea"  :min="1"></el-input-number>公顷
            </el-form-item>
            <el-form-item label="周转指标年度" prop="targetYear">
              <el-date-picker
                  class="input_date"
                  value-format="yyyy"
                  v-model="form.targetYear"
                  type="year"
                  placeholder="请选择">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="申请周转指标规模" prop="targetScale">
              <el-input v-model="form.targetScale" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="上报级别">
              <el-select
                  v-model="form.reportLevel"
                  placeholder="请选择"
                  clearable
                  class="is-sesect-icon"
              >
                <el-option
                    v-for="item in reportLevelOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="拆旧地块">拆旧地块</el-tab-pane>
      <el-tab-pane label="建新地块">建新地块</el-tab-pane>
      <el-tab-pane label="安置地块">安置地块</el-tab-pane>
      <el-tab-pane label="备注及附件">备注及附件</el-tab-pane>
      <el-tab-pane label="审批记录">审批记录</el-tab-pane>
    </el-tabs>


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
      tableData: [],
      regionOptions: [],
      planDateOptions: [],
      projectTypeOptions:["单独选址","批次"],
      buildNewTypeOptions:["工业用地","商业用地","住宅用地","其他建设用地"],
      reportLevelOptions:["报省","报市"],
      form:{
        projectAreaCode:null,//项目区编号
        projectName:null,//项目区名称
        projectType:null,//项目类型
        regionName:null,//所属区县
        approvalNo:null,//实施方案批文号
        implementedYear:null,//拟实施年份
        approvalDate:null,//批复日期
        approvalOffice:null,//批准机关
        landArea:null,//地块总面积
        landUse:null,//土地用途
        buildNewType:null,//城镇建新类型
        buildNewArea:null,//城镇建新面积
        targetYear:null,//周转指标年度
        targetScale:null,//申请周转指标规模
        reportLevel:null,//上报级别
      },
      rules: {
        projectAreaCode: [
          { required: true, message: "请输入", trigger: "blur" },
        ],
        projectName: [
          { required: true, message: "请输入", trigger: "blur" },
        ],
        approvalNo: [
          { required: true, message: "请输入", trigger: "blur" },
        ],
        approvalDate: [
          { required: true, message: "请选择", trigger: "change" },
        ],
        regionName: [
          { required: true, message: "请选择", trigger: "change" },
        ],
        targetYear: [
          { required: true, message: "请选择", trigger: "change" },
        ],
        targetScale: [
          { required: true, message: "请输入", trigger: "blur" },
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
    // this.handleUpdate();
    console.log(this.$route.params.type,'$route.params.type')
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
