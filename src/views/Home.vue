<template>
  <div class="l-inner mt-30">
    <p class="title-page mb-30">퍼블 완료 페이지 목록</p>
    <div class="mb-30">
      <router-link to="/guide" class="btn btn-size-large primary">공통 컴포넌트</router-link>
      <button class="btn btn-size-large primary ml-15" @click="popAlertActive = true">공통 alert 팝업</button>
    </div>
    <div class="mb-30"><router-link to="/" class="btn btn-size-large primary">스플래시</router-link></div>
    <div class="mb-30">
      <router-link to="/login" class="btn btn-size-large primary">로그인</router-link>
      <ul class="title mt-20">
        <li class="mb-10">로그인 메인페이지,</li>
        <li class="mb-10">로그인 팝업 - 로그인오류</li>
        <li class="mb-10">로그인 팝업 - 접속제한안내</li>
        <li class="mb-10">로그인 팝업 - 로그전송</li>
        <li class="mb-10">로그인 팝업 - 사번찾기</li>
        <li class="mb-10">로그인 팝업 - 비밀번호재발급</li>
        <li class="mb-10">로그인 팝업 - 최초 로그인시 비밀번호 설정</li>
        <li class="mb-10 ft-color-grey">미완료: 위치정보 제공동의 상세보기 팝업 (기획없음) , 회원가입</li>
      </ul>
    </div>
    <div class="mb-30">
      <router-link to="/dashboard" class="btn btn-size-large white">홈</router-link>
    </div>
    <div class="mb-30">
      <router-link to="/delivery-start" class="btn btn-size-large white">집배송 출발</router-link>
      <ul class="title mt-20">
        <li class="mb-10">집배송 출발 메인페이지 작업중</li>
        <li class="mb-10">집배송 출발 - 더보기</li>
        <li class="mb-10">집배송 출발 - 로딩</li>
        <li class="mb-10">집배송 출발 - 검색어리스트</li>
        <li class="mb-10">집배송 출발 - 리스트 없음</li>
        <li class="mb-10">집배송 출발 팝업 - 화물검색</li>
        <li class="mb-10">집배송 출발 팝업 - 운송장 번호</li>
        <li class="mb-10">집배송 출발 팝업 - 정렬방식선택</li>
        <li class="mb-10">집배송 출발 팝업 - 배송예정시간변경</li>
        <li class="mb-10">집배송 출발 팝업 - 대상 이관 요청</li>
        <li class="mb-10">집배송 출발 팝업 - 대상이관요청 사유 입력</li>
        <li class="mb-10">집배송 출발 팝업 - 이관 완료</li>
        <li class="mb-10 ft-color-grey">미완료: 집배송 출발 팝업 - 화물 상세 정보</li>
      </ul>
    </div>
    <div class="mb-30">
      <router-link to="/delivery-processing" class="btn btn-size-large white">집배송 처리</router-link>
    </div>

    <pop-alert v-if="popAlertActive" @click="popAlertActive = !popAlertActive" popTitle="팝업 타이틀" popMsg="팝업 메세지" popBtn="닫기"></pop-alert>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import PopAlert from "@/views/Modal/PopAlert";

export default {
  name: "Home",
  components: { PopAlert },
  //  mixins: [CommonUtil.mixingInfiniteScroll()],
  created() {},
  mounted() {},
  computed: {
    ...mapState([]),
  },
  watch: {},
  data() {
    return {
      popAlertActive: false,
    };
  },
  methods: {},
};
</script>
<style scoped></style>
