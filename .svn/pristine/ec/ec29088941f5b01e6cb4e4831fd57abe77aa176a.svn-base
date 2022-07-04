<template>
  <div class="header_nav"  :class="{isMap:isMap}">
    <div class="systemInfo" @click="homePage">
      <img src="../../../assets/logo.png" />
      <span class="title">宿迁市增减挂钩系统</span>
    </div>
    <div class="setting_box">
      <i class="iconfont icon-shouye1" @click="homePage"></i>
      <screenfull class="screenfull"></screenfull>
      <i class="iconfont icon-xiaoxi" @click="skipIndex"></i>
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img src="../../../assets/logo.png" />
        用户名<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">首页</el-dropdown-item>
        <el-dropdown-item @click.native="logout" icon="el-icon-circle-check">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    
  </div>
</template>

<script>
import Screenfull from "../../Screenfull/index.vue";
export default {
  name: "headerNav",
  components:{
    Screenfull
  },
  props:{
    isMap:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {      
    };
  },
  created() {
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      window.location.reload();
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    skipIndex(){},
    homePage(){
        this.$router.push({path: '/home'});
      }
  },
};
</script>
<style scoped lang="scss">
.isMap{
  width: 100%;
  position: fixed;
  opacity: 1 !important;
  background: rgba(13, 39, 156, 0.5) !important;
  backdrop-filter: blur(10px);
}
.header_nav {
  display: flex;
  justify-content: space-between;
  height: 80px;
  line-height: 80px;
  color: #ffffff;
  background-color: #3757E2;
}
.systemInfo {
  margin-left: 48px;
  font-size: 24px;
  margin-right: 100px;
  cursor: pointer;
  img {
    width: 48px;
    height: 48px;
    vertical-align: middle;
    margin-right: 16px;
  }
}
.setting_box {
  margin-right: 26px;
  display: flex;
  i{
    margin-right: 33px;
    vertical-align: middle;
    cursor: pointer;
  }
  .screenfull{
    cursor: pointer;
    margin-right: 33px;
  }
  img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 8px;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
