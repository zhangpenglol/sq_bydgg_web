
<template>
  <div class="container-main">
    <h2 class="form-title">查看/编辑已验收的拆旧地块</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息">
        <div class="form">
          <el-form ref="form" :model="form" label-width="113px">
            <el-form-item label="规划名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="建新面积（公顷）">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="所属区域">
              <el-select
                v-model="form.region"
                placeholder="请选择活动区域"
                class="is-sesect-icon"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="结余面积（公顷）">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="规划期（年）">
              <el-select
                v-model="form.region"
                placeholder="请选择活动区域"
                class="is-sesect-icon"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="农村建设用地拆旧区总面积（公顷）">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="复垦面积（公顷）">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item class="upload-list" label="上传附件">
              <xx-upload-list></xx-upload-list>
            </el-form-item>
          </el-form>
          <div class="handles">
            <el-button type="primary">确定</el-button>
            <el-button>取消</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="复垦进度">复垦进度</el-tab-pane>
      <el-tab-pane label="转占卜情况">转占卜情况</el-tab-pane>
      <el-tab-pane label="流转情况">流转情况</el-tab-pane>
      <el-tab-pane label="挂钩实施方案">挂钩实施方案</el-tab-pane>
      <el-tab-pane label="剩余指标">剩余指标</el-tab-pane>
      <el-tab-pane label="地块核减">地块核减</el-tab-pane>
      <el-tab-pane label="审批记录">审批记录</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.layer-title,
.form-title {
  font-weight: normal;
}
.form-title {
  font-size: 16px;
  color: #333333;
  margin-bottom: 26px;
}

.layer-title {
  font-size: 14px;
  color: #3757e2;
  margin-bottom: 12px;
  cursor: pointer;
}
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
<style scoped>
.el-tabs--border-card {
  box-shadow: none;
  border: none;
  border-top: 0.005208rem solid #dcdfe6;
}
.container-main >>> .el-tabs__nav-scroll {
  border-left: 0.005208rem solid #dcdfe6;
  border-right: 0.005208rem solid #dcdfe6;
}
.container-main
  >>> .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item.is-active {
  color: #3757e2;
}
</style>
