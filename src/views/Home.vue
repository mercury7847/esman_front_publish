<template>
  <div class="l-inner mt-30">
    <p class="title-page mb-30">퍼블 완료 페이지 목록</p>
    <router-link to="/guide" class="btn btn-size-large primary mb-30">공통 컴포넌트</router-link>
    <div class="mb-30">
      <router-link to="/login" class="btn btn-size-large primary">로그인</router-link>
      <ul class="title mt-20">
        <li class="mb-10">로그인 메인페이지,</li>
        <li class="mb-10">로그인오류팝업,</li>
        <li class="mb-10">접속제한안내팝업,</li>
        <li class="mb-10">로그전송팝업,</li>
        <li class="mb-10">사번찾기팝업,</li>
        <li class="mb-10">비밀번호재발급 팝업,</li>
        <li class="mb-10">최초 로그인시 비밀번호 설정팝업</li>
        <li class="mb-10">미완료: 위치정보 제공동의 상세보기 팝업 (기획없음)</li>
      </ul>
    </div>
    <div>
      <router-link to="/delivery-start" class="btn btn-size-large primary">집배송 출발</router-link>
    </div>
    <div>
      <router-link to="/delivery-processing"><el-button>집배송 처리</el-button></router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  //  mixins: [CommonUtil.mixingInfiniteScroll()],
  created() {},
  mounted() {},
  computed: {
    ...mapState([]),
  },
  watch: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.home a {
  display: inline-block;
}
</style>
