<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-27 10:07:51
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-27 10:43:57
-->
<template>
  <div class="form">
    <el-form ref="form" :model="form" label-width="113px">
      <el-form-item label="地块流转合同号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="实施方案批文号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="流转日期">
        <el-select
          v-model="form.region"
          placeholder="请选择活动区域"
          class="is-sesect-icon"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="成交价">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="竞得人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="成交指标指标面积">
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
<style lang="scss" scoped></style>
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
  grid-area: 1/2/6/-1;
}
</style>
