<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-13 09:46:40
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-13 10:23:45
-->
<template>
  <div class="pupop-items">
    <i :class="className"></i>
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      default: "el-icon-close",
    },
    title: {
      type: String,
      default: "取个名字",
    },
  },
};
</script>
<style scoped>
.pupop-items {
  white-space: nowrap;
  font-size: 13px;
  color: #777777;
  padding: 10px 18px;
  cursor: pointer;
  align-self: stretch;
  text-align: left;
}
.pupop-items:hover {
  color: #333333;
  background-color: rgba(54, 86, 226, 0.16);
}
.pupop-items:hover i {
  color: #3757e2;
}
.pupop-items span {
  margin-left: 3px;
}
</style>
