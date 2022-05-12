<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-27 10:00:00
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-27 10:21:34
-->

<template>
  <div class="container-main">
    <h2 class="form-title">新增/编辑指标流转记录</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息"> <Basic /> </el-tab-pane>
      <el-tab-pane label="拆旧地块"><OldBlock /> </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Basic from "./components/basic";
import OldBlock from "./components/oldblock";
export default {
  components: {
    Basic,
    OldBlock,
  },
};
</script>
<style lang="scss" scoped>
.form-title {
  font-weight: normal;
}
.form-title {
  font-size: 16px;
  color: #333333;
  margin-bottom: 26px;
}

.handles {
  margin-top: 72px;
  .el-button {
    width: 104px;
  }
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
