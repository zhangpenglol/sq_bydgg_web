<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-27 10:00:00
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-27 10:21:34
-->

<template>
  <div class="container-main" v-loading="loading">
    <h2 class="form-title">
      {{
        $route.params.type === "isUpdate"
          ? "编辑指标流转记录"
          : "新增指标流转记录"
      }}
    </h2>
    <el-tabs type="border-card" v-loading="loading">
      <el-tab-pane label="基本信息">
        <Basic :res="res" />
      </el-tab-pane>
      <el-tab-pane label="拆旧地块"><OldBlock /> </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Basic from "./components/basic";
import OldBlock from "./components/oldblock";
import { findTargetMovingById } from "@/api/targetmanage/targetexchange";
export default {
  components: {
    Basic,
    OldBlock,
  },
  data() {
    return {
      loading: false,
      res: undefined,
      form: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.handleUpdate();
    },
    handleUpdate() {
      if (this.$route.params.type !== "isUpdate") return;
      this.loading = true;
      findTargetMovingById(this.$route.params.id).then((res) => {
        this.res = res.data;
        this.loading = false;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.handles {
  margin-top: 72px;
  .el-button {
    width: 104px;
  }
}
</style>

<style scoped>

</style>
