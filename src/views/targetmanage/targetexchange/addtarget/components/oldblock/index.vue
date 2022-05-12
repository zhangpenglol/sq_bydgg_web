<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-27 10:20:41
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-27 10:29:10
-->
<template>
  <div class="old-block-container">
    <el-table
      ref="singleTable"
      :data="tableData"
      @current-change="handleCurrentChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" width="70" label="序号"> </el-table-column>
      <el-table-column property="date" label="地块编号"> </el-table-column>
      <el-table-column property="name" label="所属区域"> </el-table-column>
      <el-table-column property="address" label="项目编号"> </el-table-column>
      <el-table-column property="address" label="地块剩余可用新增农用地面积">
      </el-table-column>
      <el-table-column property="address" label="操作">
        <template slot-scope="scope">
          <xx-popup>
            <xx-item
              @click.native="xxx"
              className="el-icon-info"
              title="查看"
            />
            <xx-item className="el-icon-info" title="修改" />
            <xx-item title="删除" @click.native="ddd" />
            <xx-item title="地图审查" />
          </xx-popup>
        </template>
      </el-table-column>
    </el-table>
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
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style scoped>
.old-block-container >>> .el-table {
  width: 774px;
}
</style>
