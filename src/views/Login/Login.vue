<template>
  <div class="l-inner">
    <div class="login">
      <div class="login-header">
        <div class="login-header-inner">
          <h1><img src="@/assets/images/login_title.svg" alt="login" /></h1>
          <p class="ft-color-secondary">한진택배 사번을 입력하세요</p>
        </div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="l-form login-form" label-position="top">
        <el-form-item label="사번" class="mb-20">
          <div class="l-inp">
            <div class="inp">
              <div class="inp-inner">
                <el-input type="text" placeholder="사번을 입력하세요" v-model="ruleForm.id" class="inp-text-line" clearable></el-input>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="비밀번호" class="mb-20">
          <div class="l-inp">
            <div class="inp">
              <div class="inp-inner">
                <el-input type="password" placeholder="비밀번호를 입력하세요." v-model="ruleForm.password" class="inp-text-line" clearable></el-input>
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <el-form class="l-form login-service">
        <el-form-item class="checkbox mb-20">
          <div class="d-flex-be-center">
            <div class="l-checkbox login-service-check">
              <el-checkbox v-model="isAcceptLocation">위치정보 제공동의</el-checkbox>
            </div>
            <div class="login-service-detailview">
              <router-link to="" class="text-link detail"><span>상세보기</span><i class="icon-xs icon-arrow-r"></i> </router-link>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div class="btn-group">
        <!-- <button class="btn btn-full-size primary" :disabled="!canLogin" @click="$router.push('/dashboard')">로그인</button> -->
        <button class="btn btn-full-size primary" :disabled="!canLogin" @click="loginAlertActive = true">로그인</button>
        <!-- <button class="btn btn-full-size primary" :disabled="!canLogin" @click="loginConfirmActive = true">로그인</button> -->
      </div>
      <div class="option">
        <div class="app-version">v2.1.1</div>
        <div class="option-service">
          <router-link to="/password" class="text-link underline">비밀번호 찾기</router-link>
          <router-link to="/join" class="text-link underline">회원가입</router-link>
        </div>
      </div>
      <div class="welcom-message">
        <p>기쁨 전하는 행복상자 한진택배</p>
      </div>
    </div>

    <!-- 로그인 오류 팝업 -->
    <pop-login-alert v-if="loginAlertActive" @click="loginAlertActive = !loginAlertActive"></pop-login-alert>
    <!-- 비밀번호 오류 팝업 -->
    <pop-login-confirm v-if="loginConfirmActive" @click="loginConfirmActive = !loginConfirmActive"></pop-login-confirm>
  </div>
</template>

<script>
import PopLoginAlert from "@/views/Login/PopLoginAlert";
import PopLoginConfirm from "@/views/Login/PopLoginConfirm";

export default {
  components: { PopLoginAlert, PopLoginConfirm },
  name: "Login",
  data() {
    return {
      isAcceptLocation: true,
      loginAlertActive: false,
      loginConfirmActive: false,
      ruleForm: {
        id: "",
        password: "",
      },
      rules: {
        id: [{ required: true, message: "사번을 입력해주세요", trigger: "blur" }],
        password: [{ required: true, message: "비밀번호를 입력해주세요.", trigger: "blur" }],
      },
    };
  },
  methods: {},
  computed: {
    canLogin() {
      return this.isAcceptLocation;
    },
  },
};
</script>
