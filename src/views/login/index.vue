<template>
  <div class="container">
    <div class="login">
      <div class="login-header">
        <h1>报检系统后台管理端</h1>
      </div>
      <div class="login-title">
        <span
          style="
            font-size: 28px;
            font-weight: 600;
            letter-spacing: 0.5rex;
            margin-right: 5px;
          "
          >登录</span
        >
        <span style="color: #cccccc">Signup</span>
      </div>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        status-icon
        label-width="120px"
        class="login-form"
        label-position="top"
        :rules="rules"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            autocomplete="off"
            maxlength="11"
            :prefix-icon="User"
            v-model="loginForm.username"
            placeholder="请输入账号"
            clearable
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            autocomplete="off"
            :prefix-icon="Lock"
            v-model="loginForm.password"
            maxlength="32"
            clearable
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item label="项目" prop="project">
          <el-select
            v-model="loginForm.project"
            placeholder="请选择项目"
            style="width: 100%"
          >
            <el-option label="惠州" value="/HZ26-6" />
            <el-option label="西江" value="/XJ30-2" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.pwdChecked" class="remberPwd"
            >记住密码</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin(loginFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="navbar">
        <p>没有账号？<el-link>去注册</el-link></p>
      </div>
      <div class="footer">
        <p>粤公网安备 44049302000140号</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Lock } from "@element-plus/icons-vue";
import { ref, reactive, onMounted } from "vue";
import { loginRequest } from "../../Network/login.js";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import instance from "@/Network/index";
const userStore = useUserStore();
const router = useRouter();

const loginForm = reactive({
  username: "",
  password: "",
  project: "",
  pwdChecked: false,
});

onMounted(() => {
  if (
    localStorage.getItem("loginForm") != null &&
    Object.keys(localStorage.getItem("loginForm").length > 2)
  ) {
    loginForm.pwdChecked = true;
    let userPwdInfo = JSON.parse(localStorage.getItem("loginForm"));

    loginForm.username = userPwdInfo.username;
    loginForm.password = userPwdInfo.password;
  } else {
    loginForm.pwdChecked = false;
  }
});

const rules = reactive({
  username: [{ required: true, message: "请输入用户账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  project: [{ required: true, message: "请选择项目", trigger: "blur" }],
});

const loginFormRef = ref();
async function handleLogin(formEl) {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      instance.defaults.baseURL = process.env.VUE_APP_BASE_API + loginForm.project
      console.log(instance.defaults.baseURL);
      loginRequest(loginForm)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.Status === 1) {
              if (loginForm.pwdChecked) {
                localStorage.setItem("loginForm", JSON.stringify(loginForm));
              } else {
                localStorage.setItem("loginForm", JSON.stringify({}));
              }

              userStore.userForm = res.data;
              console.log(userStore.userForm);
              sessionStorage.setItem("roles", res.data.PowerId);
              ElMessage.success("登录成功！");
              router.push({
                path: "/layout",
              });
            } else {
              return Promise.reject(res.data.Note);
            }
          }
        })
        .catch((error) => {
          ElMessage.error(error);
        });
    } else {
      console.log("error submit!", fields);
    }
  });
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/image/login/loginBackground.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(15%, 15%);
    width: 30%;
    height: 70%;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    box-shadow: 1px 0px 2px 1px #cecece;
    .login-header {
      text-align: center;
      color: #20525c;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
    }
    .login-title {
      padding: 0 25px;
      color: #2f3c4b;
    }
    .login-form {
      margin-top: 40px;
      padding: 0px 25px;
      .el-button {
        width: 100%;
        height: 40px;
        margin-top: 20px;
      }
      .el-input {
        height: 40px;
      }
      ::v-deep .el-select .el-input__inner {
        height: 40px;
      }
    }
    .navbar {
      padding: 0 25px;
      text-align: right;
    }
    .footer {
      position: absolute;
      bottom: 30px;
      color: #aaa;
    }
  }
}
</style>
