<template>
  <div class="container_left">
    <el-menu
      :collapse-transition="false"
      :unique-opened="true"
      :collapse="isCollapse"
      :class="{ul_pad:isCollapse}"
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="#333333"
      background-color="#FFFFFF"
      active-text-color="#3757E2"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in menulist">
        <el-submenu
          v-if="item.child && item.child.length > 0"
          :index="item.path"
          :key="item.path"
        >
          <template slot="title">
            <i class="iconfont" :class="item.meta ? item.meta.icon : ''"></i>
            <span>{{ item.meta ? item.meta.title : ''}}</span>
          </template>

          <template>
            <sidebar-item :menulist="item.child"></sidebar-item>
          </template>
        </el-submenu>

        <el-menu-item v-else :key="item.path" :index="item.path">
          <i class="iconfont" :class="item.meta ? item.meta.icon : ''"></i>
          <span slot="title">{{ item.meta ? item.meta.title : '' }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    menulist: {
      type: Array,
      default: [],
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: 0;
}
.icon_img {
  width: 28px;
  height: 28px;
  margin-right: 8px;
}
.iconfont{
  margin-right: 9px;
}
</style>

<style scoped>
.el-submenu /deep/ .el-submenu__title {
  text-align: left;
  padding: 0 16px;
  font-size: 16px;
}
.el-menu-item{
  font-size: 16px;
}
.el-submenu .el-menu-item{
  width: 100%;
  margin-left: 20px;
  font-size: 14px;
}
.el-menu-item.is-active {
  color: #fff;
  /* background-image: url('../../../assets/images/selectMenu.png'); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/* .el-menu /deep/ .el-tooltip,.el-submenu__title{
  padding: 0px 20px !important;
}
.el-submenu /deep/ .el-submenu__title{
  padding: 0px 20px !important;
} */
</style>