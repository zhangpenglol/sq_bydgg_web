<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-14 09:47:47
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-14 14:27:33
-->
<template>
  <div class="container-main" v-loading="loading">
    <h2 class="form-title">
      {{
        $route.query.type == "see" ? "查看未核验拆旧地块" : "验收未核验拆旧地块"
      }}
    </h2>
    <div class="grid">
      <div>地块编号</div>
      <div>{{ info.landCode }}</div>
      <div>所属区域</div>
      <div>{{ info.regionName }}</div>
      <div>项目编号</div>
      <div>{{ info.projectNo }}</div>
      <div>地块建设规模</div>
      <div>{{ info.buildArea }}</div>
      <div>新增农用地面积</div>
      <div>{{ info.farmingArea }}</div>
      <div>新增耕地面积</div>
      <div>{{ info.ploughArea }}</div>
      <div>耕地类型</div>
      <div>{{ info.ploughType }}</div>
      <div>权属性质</div>
      <div>{{ info.ownershipProperty }}</div>
      <div>复垦前地类</div>
      <div>{{ info.reclamationAgoType }}</div>
      <div>复垦后新增耕地质量等级</div>
      <div>{{ info.laterLandGrade }}</div>
      <div>验收文号</div>
      <div>{{ info.receptionProof }}</div>
      <div>验收日期</div>
      <div>{{ info.receptionTime }}</div>
      <div>论证文件</div>
      <div>{{ info.fileId }}</div>
    </div>
    <div class="im-layer">
      <h2 class="layer-title">复垦进度</h2>
      <ReclamationPlan />
    </div>
    <div class="handles">
      <el-button
        type="primary"
        v-if="$route.query.type == 'see'"
        @click="handleConfirm"
        >确定</el-button
      >
      <el-button type="primary" v-else @click="handleAccept"
        >确认验收</el-button
      >
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
import {
  findOldLandDetailById,
  updateLandDemolitionOld,
} from "@/api/dismantlingOld";
import ReclamationPlan from "../components/ReclamationPlan";
export default {
  components: { ReclamationPlan },
  data() {
    return {
      loading: false,

      info: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getList();
    },
    getList() {
      this.loading = true;
      findOldLandDetailById(this.$route.query.id).then((res) => {
        this.info = res.data.landDetail;
        this.loading = false;
      });
    },
    handleAccept() {
      updateLandDemolitionOld({
        id: this.$route.query.id,
        progress: "已核验",
      }).then((res) => {
        this.$message({
          type: "success",
          message: "成功",
        });
        this.$router.push({ name: "dismantlingOld" });
      });
    },
    handleConfirm() {
      this.$router.push({ name: "dismantlingOld" });
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  width: 70%;
  display: grid;
  grid-template-columns: 150px 1fr 150px 1fr;
  margin-bottom: 50px;
  row-gap: 20px; /* 行间隙为10px */
  column-gap: 20px; /* 列间隙为20px */
  font-size: 14px;
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
