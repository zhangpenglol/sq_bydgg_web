<template>
  <div class="login_container">
    <div class="sys_title">
      <img src="../../assets/logo.png" />
      <span class="title">宿迁市城乡建设用地增减挂钩全生命周期管理系统</span>
    </div>
    <div class="form_box">
      <div class="login_title">账户密码登陆</div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <el-form-item prop="name" label="账号:">
          <div class="input_one">
            <el-input
              placeholder="请输入账号"
              class="el_input"
              ref="name"
              v-model="loginForm.name"
              name="name"
              type="text"
              tabindex="10s"
              autocomplete="on"
            />
          </div>
        </el-form-item>

        <el-tooltip
          v-model="capsTooltip"
          content="大写锁定已开启"
          placement="right"
          manual
        >
          <el-form-item prop="pwd" label="密码:">
            <div class="input_one input_pwd">
              <el-input
                placeholder="请输入密码"
                :key="passwordType"
                ref="pwd"
                v-model="loginForm.pwd"
                :type="passwordType"
                name="pwd"
                tabindex="2"
                autocomplete="on"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
              />
              <div class="show_pwd" @click="showPwd">
                <i
                  class="iconfont"
                  :class="
                    passwordType === 'password'
                      ? 'icon-yanjing1'
                      : 'icon-yanjing'
                  "
                ></i>
              </div>
            </div>
          </el-form-item>
        </el-tooltip>
        <div class="check_btn">
          <el-checkbox v-model="checked"
            ><span style="color: #333333">记住密码</span></el-checkbox
          >
        </div>
        <el-button
          class="btn_submit"
          :loading="loading"
          type="primary"
          @click.native.prevent="handleLogin"
        >
          登录
        </el-button>
        <div class="copyright">
          Copyright @xx规划局与自然资源局，All Rights Reserv
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user.js";
import { Message } from "element-ui";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        name: "",
        pwd: "",
        verifyCodes: "",
        finalcodekey: "",
        verification: "",
      },
      loginRules: {},
      passwordType: "password",
      capsTooltip: false,
      loading: false, //按钮是否加载中状态
      showDialog: false,
      redirect: undefined,
      verifyCodeImgUrl: "",
      finalcodekey: "", //验证码key
      checked: true,
      configInfo: "", //系统名称
    };
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["loginInfo"]),
    handleLogin() {
      this.loginInfo(this.loginForm)
        .then((res) => {
          if (res.status == 200) {
            this.$message.success("登录成功");
            this.$router.push({ path: "/home" });
            this.loading = false;
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
    filterPath(path) {
      return this.BaseURL + path;
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.pwd.focus();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login_container {
  position: relative;
  width: 100%;
  height: 100%;
  color: #333333;
  background: url("../../assets/bg.png") no-repeat;
  background-size: cover;
  .sys_title {
    position: absolute;
    top: 73px;
    right: 50px;
    width: 704px;
    height: 64px;
    line-height: 64px;
    margin-top: -32px;
    font-size: 28px;
    font-family: PingFang SC-粗体, PingFang SC;
    img {
      width: 64px;
      height: 64px;
      vertical-align: middle;
      margin-right: 24px;
    }
  }
  .form_box {
    position: absolute;
    top: 50%;
    right: 129px;
    margin-top: -315px;
    width: 546px;
    height: 630px;
    background: #ffffff;
    box-shadow: 0px 1px 32px 1px rgba(0, 18, 86, 0.17000000178813934);
    border-radius: 8px 8px 8px 8px;
    opacity: 1;
    padding: 64px 40px 58px 40px;
    .login_title {
      text-align: center;
      font-size: 24px;
      margin-bottom: 58px;
    }
    .check_btn {
      margin-top: 2px;
      height: 20px;
      line-height: 20px;
      margin-bottom: 64px;
      font-size: 14px;
    }
    .btn_submit {
      width: 466px;
      height: 52px;
      background: #3757e2;
      border-radius: 4px 4px 4px 4px;
      opacity: 1;
      font-size: 20px;
      margin-bottom: 28px;
    }
    .copyright {
      font-size: 14px;
      color: #777777;
    }
  }
}
</style>
<style scoped>
.el-form /deep/ .el-form-item__label {
  font-size: 16px;
}
.input_one /deep/ .el-input__inner {
  width: 466px;
  height: 52px;
  background: #ffffff;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  border: 1px solid #aaaaaa;
  font-size: 15px;
}
.input_pwd /deep/ .el-input {
  position: relative;
}
.show_pwd {
  position: absolute;
  top: 48px;
  right: 10px;
  cursor: pointer;
}
</style>