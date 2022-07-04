<template>
  <div class="ReclamationPlan-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="复垦前" name="first"></el-tab-pane>
      <el-tab-pane label="复垦中" name="second"></el-tab-pane>
      <el-tab-pane label="复垦后" name="third"></el-tab-pane>
    </el-tabs>
    <el-table :data="tableData">
      <el-table-column prop="date" label="位置(经纬度)"> </el-table-column>
      <el-table-column prop="name" label="方位"> </el-table-column>
      <el-table-column prop="address" label="现状描述"> </el-table-column>
      <el-table-column prop="name" label="照片"> </el-table-column>
      <el-table-column prop="address" label="进度上报日期"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown
            trigger="click"
            @command="(type) => handleDropdownChange(type, scope.row)"
          >
            <span class="el-dropdown-link">
              <i class="ddd-title">...</i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="iconfont icon-xiangqingchakan"
                >查看</el-dropdown-item
              >
              <el-dropdown-item icon="iconfont icon-xiangqingchakan"
                >删除</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.ReclamationPlan-container {
  .el-table {
    width: 70%;
  }
}
</style>
<style scoped>
/* 复垦前复垦中复垦后  开始*/
.ReclamationPlan-container >>> .el-tabs__nav-scroll {
  border-left: 0px !important;
  border-right: 0px !important;
}
.ReclamationPlan-container >>> .el-tabs__nav-wrap::after {
  background-color: transparent;
}
/* 复垦前复垦中复垦后  结束*/
</style>
