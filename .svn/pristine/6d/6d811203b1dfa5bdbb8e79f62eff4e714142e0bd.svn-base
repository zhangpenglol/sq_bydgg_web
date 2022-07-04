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
        <el-input v-model="form.contractNo"></el-input>
      </el-form-item>

      <el-form-item label="流转日期">
        <el-date-picker
          v-model="form.movingDate"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="成交价">
        <el-input v-model="form.transactionPrice"></el-input>
      </el-form-item>
      <el-form-item label="竞得人">
        <el-input v-model="form.competitivePerson"></el-input>
      </el-form-item>
      <el-form-item label="成交指标指标面积">
        <el-input v-model="form.transactionArea"></el-input>
      </el-form-item>
      <el-form-item class="upload-list" label="上传附件">
        <xx-upload-list></xx-upload-list>
      </el-form-item>
    </el-form>
    <div class="handles">
      <el-button type="primary" @click="handleConfirm">确定</el-button>
      <el-button
        @click="
          $router.push({
            name: 'targetexchange',
          })
        "
        >取消</el-button
      >
    </div>
  </div>
</template>

<script>
import {
  saveTargetMoving,
  updateTargetMoving,
} from "@/api/targetmanage/targetexchange";
export default {
  props: {
    res: {
      require: true,
    },
  },

  data() {
    return {
      form: {
        id: undefined,
        contractNo: "",
        movingDate: "",
        transactionPrice: "",
        competitivePerson: "",
        transactionArea: "",
      },
    };
  },

  watch: {
    res: function (newVal, oldVal) {
      for (let key in this.form) {
        this.form[key] = newVal[key];
      }
    },
  },
  created() {},
  methods: {
    handleConfirm() {
      if (this.$route.params.type === "isUpdate") {
        updateTargetMoving(this.form)
          .then((res) => {
            this.$message({
              type: "success",
              message: "成功",
            });
            this.$router.push({ name: "targetexchange" });
          })
          .catch((res) => {
            this.$message({
              type: "error",
              message: "失败",
            });
            this.$router.push({ name: "targetexchange" });
          });
      } else {
        saveTargetMoving(this.form)
          .then((res) => {
            this.$message({
              type: "success",
              message: "成功",
            });
            this.$router.push({ name: "targetexchange" });
          })
          .catch((res) => {
            this.$message({
              type: "error",
              message: "失败",
            });
            this.$router.push({ name: "targetexchange" });
          });
      }
    },
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
