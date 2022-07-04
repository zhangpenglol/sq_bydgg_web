
<template>
  <div class="container-main">
    <h2 class="form-title">
      {{
        $route.query.type == "see"
          ? "查看已验收的拆旧地块"
          : "编辑已验收的拆旧地块"
      }}
    </h2>
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息"><JBXX /> </el-tab-pane>
      <el-tab-pane label="复垦进度"><ReclamationPlan /></el-tab-pane>
      <el-tab-pane label="地块挂钩转占补情况"><GGZZ /></el-tab-pane>
      <el-tab-pane label="地块流转情况">流转情况</el-tab-pane>
      <el-tab-pane label="地块挂钩实施方案情况">挂钩实施方案</el-tab-pane>
      <el-tab-pane label="地块剩余指标情况">剩余指标</el-tab-pane>
      <el-tab-pane label="地块核减">地块核减</el-tab-pane>
      <el-tab-pane label="审批记录">审批记录</el-tab-pane>
    </el-tabs>
    <div class="handles">
      <el-button type="primary">确定</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
import ReclamationPlan from "../components/ReclamationPlan";
import GGZZ from "./components/GGZZ";
import JBXX from "./components/JBXX";
export default {
  components: { JBXX, ReclamationPlan, GGZZ },
  data() {
    return {};
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

</style>
