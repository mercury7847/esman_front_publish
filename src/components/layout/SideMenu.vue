<template>
  <div class="l-side-menu">
    <div class="l-menu l-scroll">
      <div class="l-fixed">
        <div class="menu-header">
          <img src="@/assets/images/logo.svg" alt="한진택배">
          <div class="btn-group">
            <button class="btn btn-setting" @click="switchSetting"></button>
            <button class="btn btn-close" @click="switchSideMenu"></button>
          </div>
        </div>
        <div class="menu-user">
          <div class="user-thumb">
            <img src="../../assets/images/user.png" alt="">
          </div>
          <div class="user-info">
            <p class="user-name"><span class="ft-weight-bold">김한진</span>님 안녕하세요</p>
            <p class="user-addr">용산2</p>
          </div>
        </div>
        <div class="l-inner">
          <div class="l-inp l-search">
            <div class="inp">
              <div class="inp-inner">
                <input type="text" class="input-text-line" placeholder="검색어를 입력하세요." id="inp-01" autofocus>
              </div>
              <button class="btn btn-search small"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-list scroll-y" v-show="!isSearch">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class=""
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <span>고객/클레임 관리</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">- 1대1 고객문의 메시지함</el-menu-item>
                  <el-menu-item index="1-2">- SMS 전송목록</el-menu-item>
                  <el-menu-item index="1-3">- 고객 응대내역<span class="badge-circle-blue">3</span></el-menu-item>
                  <el-menu-item index="1-4">- 클레임 열람장표</el-menu-item>
                  <el-menu-item index="1-5">- 고객정보 확인</el-menu-item>
                  <el-menu-item index="1-6">- 해피콜</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <span>화물 조회/관리</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">- 취급점 집하 조회</el-menu-item>
                  <el-menu-item index="2-2">- 화물 추적</el-menu-item>
                  <el-menu-item index="2-3">- 반품 배송 출발</el-menu-item>
                  <el-menu-item index="2-4">- 출력 조회</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <span>서비스 마일리지</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span>사진촬영 신고</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span>배송 지역, 터미널 조회</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="l-inner l-search-result" v-show="isSearch">
        <p class="ft-weight-bold">메뉴 검색결과 <span class="txt-primary">3</span>건</p>
        <ul>
          <li>- 화물 <span class="txt-primary">조회</span> 관리</li>
          <li>- 화물 조회/관리 &gt; 취급점 집하 <span class="txt-primary">조회</span></li>
          <li>- 화물 조회/관리 &gt; 출력 <span class="txt-primary">조회</span></li>
        </ul>
      </div>
    </div>
    <div class="l-setting" v-show="settingOn">
      <div class="setting-header">
        <button class="btn btn-prev" @click="switchSetting"></button>
        <h2>설정</h2>
      </div>
      <div class="l-menu sub-menu">
        <div class="menu-list scroll-y">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class=""
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <span>기본 설정</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1" class="d-flex-be-center">- SMS 고객 정보 확인<el-switch v-model="value1"></el-switch></el-menu-item>
                    <el-menu-item index="1-2" class="d-flex-be-center">- 자동 라우팅 사용<el-switch v-model="value2"></el-switch></el-menu-item>
                    <el-menu-item index="1-3" class="d-flex-be-center">- 시간 자동 설정 사용<el-switch v-model="value3"></el-switch></el-menu-item>
                    <el-menu-item index="1-4" class="d-flex-be-center">- 통화 고객 확인 사용<el-switch v-model="value4"></el-switch></el-menu-item>
                    <el-menu-item index="1-5" class="d-flex-be-center">- 위탁 문자 전송 동의<el-switch v-model="value5"></el-switch></el-menu-item>
                    <el-menu-item index="1-6" class="d-flex-be-center">- 집배송 출발 문자 발송<el-switch v-model="value6"></el-switch></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <span>차량 번호 등록</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">-</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <span>개인 위치 확인 주기</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">-</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <span>프로필 사진</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">-</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <span>로그 전송 여부</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">-</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'SideMenu',
    data() {
      return {
        sideMenuOn: true,
        isSearch : false,
        settingOn: false,
        value1: false,
        value2: false,
        value3: false,
        value4: false,
        value5: false,
        value6: false,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      switchSideMenu: function () {
        this.$emit('click')
      },
      switchSetting: function () {
        this.settingOn = !this.settingOn;
      },
    }
  }
</script>