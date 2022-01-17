<template>
  <div class="l-login">
    <div class="login">
      <div class="login-header">
        <div class="login-header-inner">
          <h1>
            <img
              src="@/assets/images/login_title.svg"
              alt="login"
            >
          </h1>
          <p class="ft-color-sub ft-weight-bold">
            한진택배 사번을 입력하세요
          </p>
        </div>
      </div>
      <el-form
        class="l-form login-form"
        label-position="top"
      >
        <el-form-item
          label="사번"
          class="mb-15"
        >
          <div class="l-inp">
            <div class="inp">
              <div class="inp-inner">
                <el-input
                  v-model="id"
                  type="text"
                  placeholder="사번을 입력하세요"
                  class="inp-text-line"
                  clearable
                />
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="비밀번호">
          <div class="l-inp">
            <div class="inp">
              <div class="inp-inner">
                <el-input
                  v-model="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  class="inp-text-line"
                  clearable
                />
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <el-form class="l-form login-terms">
        <el-form-item class="checkbox mb-15">
          <div class="d-flex-be-center">
            <div class="l-checkbox login-service-check">
              <el-checkbox v-model="isAcceptLocation">
                <span class="ft-weight-bold">위치정보 제공동의</span>
              </el-checkbox>
            </div>
            <button class="btn btn-more">
              <span>상세보기</span>
            </button>
          </div>
        </el-form-item>
      </el-form>
      <div class="login-btn-group">
        <button
          class="btn btn-size-full primary"
          :disabled="!canLogin"
          @click="$router.push('/dashboard')"
        >
          로그인
        </button>
        <!-- <button class="btn btn-size-full primary" :disabled="!canLogin" @click="loginAlertActive = true">로그인</button>
        <button class="btn btn-size-full primary" :disabled="!canLogin" @click="loginConfirmActive = true">로그인</button>
        <button class="btn btn-size-full primary" :disabled="!canLogin" @click="pwSettingActive = true">로그인</button> -->
        <button
          class="btn btn-size-full white is-active mt-15"
          @click="$router.push('/join')"
        >
          회원가입
        </button>
      </div>
      <div class="login-service">
        <button
          class="btn btn-txt underline ft-color-sub"
          @click="logAlertActive = true"
        >
          로그 전송
        </button>
        <div>
          <button
            class="btn btn-txt underline ft-color-sub"
            @click="passwordActive = true"
          >
            사번 찾기
          </button>
          <button
            class="btn btn-txt underline ft-color-sub ml-15"
            @click="passwordReissuance = true"
          >
            비밀번호 재발급
          </button>
        </div>
      </div>
      <div class="welcom-message ft-size-small">
        <span>기쁨 전하는 행복상자 한진택배</span>
      </div>
    </div>

    <!-- 로그인오류 팝업 -->
    <pop-alert
      v-if="loginAlertActive"
      pop-title="로그인 오류"
      pop-msg="사번 또는 비밀번호가<br>일치하지 않습니다."
      pop-btn="닫기"
      @click="loginAlertActive = !loginAlertActive"
    />
    <!-- 접속제한안내 팝업 -->
    <pop-login-confirm
      v-if="loginConfirmActive"
      @click="loginConfirmActive = !loginConfirmActive"
    />
    <!-- 로그전송 -->
    <pop-alert
      v-if="logAlertActive"
      pop-title="로그 전송"
      pop-msg="현재 E/S맨 앱의 시스템 로그를<br>서버에 전송합니다."
      pop-btn="확인"
      @click="logAlertActive = !logAlertActive"
    />
    <!-- 사번찾기 -->
    <pop-password
      v-if="passwordActive"
      @click="passwordActive = !passwordActive"
    />
    <!-- 비밀번호 재발급 -->
    <pop-password-reissuance
      v-if="passwordReissuance"
      @click="passwordReissuance = !passwordReissuance"
    />
    <!-- 최초 로그인시 비밀번호 설정 -->
    <pop-password-setting
      v-if="pwSettingActive"
      @click="pwSettingActive = !pwSettingActive"
    />
  </div>
</template>

<script>
import PopAlert from '@/views/Modal/PopAlert';
import PopLoginConfirm from '@/views/Login/PopLoginConfirm';
import PopPassword from '@/views/Login/PopPassword';
import PopPasswordReissuance from '@/views/Login/PopPasswordReissuance';
import PopPasswordSetting from '@/views/Login/PopPasswordSetting';

export default {
  name: 'Login',
  components: {
    PopAlert, PopLoginConfirm, PopPassword, PopPasswordReissuance, PopPasswordSetting,
  },
  data() {
    return {
      id: '',
      password: '',
      isAcceptLocation: true,
      loginAlertActive: false,
      loginConfirmActive: false,
      logAlertActive: false,
      passwordActive: false,
      passwordReissuance: false,
      pwSettingActive: false,
      ruleForm: {},
      rules: {
        id: [{ required: true, message: '사번을 입력해주세요', trigger: 'blur' }],
        password: [{ required: true, message: '비밀번호를 입력해주세요.', trigger: 'blur' }],
      },
    };
  },
  computed: {
    canLogin() {
      return this.isAcceptLocation;
    },
  },
  methods: {},
};
</script>
