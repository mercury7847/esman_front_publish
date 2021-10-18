<template>
  <div class="l-inner">
    <div class="login">
      <div class="login-header">
        <div class="login-header-inner">
          <h1><img src="@/assets/images/login_title.svg" alt="login"></h1>
          <p>한진택배 사번을 입력하세요</p>
        </div>
      </div>

      <div class="login-form">

        <div class="login-cid">
          <label for="c-id">사번</label>
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="사번을 입력하세요" id="c-id" autofocus>
            </div>
          </div>
        </div>

        <div class="login-cpw">
          <label for="c-pw">비밀번호</label>
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="비밀번호를 입력하세요" id="c-pw">
              <button class="btn-close"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="login-service">

        <div class="login-service-check">
          <div class="input-checkbox">
            <input type="checkbox" id="cspot" v-model="isAcceptLocation"/>
            <label for="cspot"><span>위치정보 제공동의</span></label>
          </div>
        </div>
        <div class="login-service-detailview">
          <router-link to="" class="text-link detail"><span>상세보기</span><i class="icon-xs icon-arrow-r"></i>
          </router-link>
        </div>

      </div>
      <div class="btn-group">
        <button class="btn full-size large primary" :disabled="!canLogin"  @click="$router.push('/home')" >로그인</button>
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
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      isAcceptLocation : false,
    }
  },
 /* watch: {
    isAcceptLocation(v){
      alert(v)
    }
  },*/
  computed: {
    // 계산된 getter
    canLogin: function () {
      return this.isAcceptLocation
    }
  }
}
</script>
