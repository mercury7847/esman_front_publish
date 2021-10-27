<template>
<div class="floating">
  <div class="l-floating">
    <button class="btn btn-floating" @click="switchFloating"></button>
    <div class="l-bookmark" v-show="floatingOn">
      <div class="bookmark-list">
        <ul>
          <li>
            <router-link to="" class="floating-menu">
              <p class="floating-menu-icon"><i class="icon-customer-inquiry"></i></p>
              <p class="floating-menu-title">고객응대</p>
              <span class="badge-circle-blue">3</span>
              <button class="btn-delete" v-show="isFloatingEdit"></button>
            </router-link>
          </li>
          <li>
            <router-link to="" class="floating-menu">
              <p class="floating-menu-icon"><i class="icon-map"></i></p>
              <p class="floating-menu-title">화물추적</p>
              <button class="btn-delete" v-show="isFloatingEdit"></button>
            </router-link>
          </li>
          <li>
            <router-link to="" class="floating-menu">
              <p class="floating-menu-icon"><i class="icon-refund"></i></p>
              <p class="floating-menu-title">반품</p>
              <button class="btn-delete" v-show="isFloatingEdit"></button>
            </router-link>
          </li>
          <li>
            <router-link to="" class="floating-menu">
              <p class="floating-menu-icon"><i class="icon-mileage"></i></p>
              <p class="floating-menu-title">마일리지</p>
              <button class="btn-delete" v-show="isFloatingEdit"></button>
            </router-link>
          </li>
          <li>
            <router-link to="" class="floating-menu">
              <p class="floating-menu-icon"><i class="icon-report-defective"></i></p>
              <p class="floating-menu-title">불량신고</p>
              <button class="btn-delete" v-show="isFloatingEdit"></button>
            </router-link>
          </li>
          <li>
            <router-link to="" class="floating-menu">
              <p class="floating-menu-icon"><i class="icon-happycall"></i></p>
              <p class="floating-menu-title">해피콜</p>
              <button class="btn-delete" v-show="isFloatingEdit"></button>
            </router-link>
          </li>
          <li>
            <router-link to="" class="floating-menu">
              <p class="floating-menu-icon"><i class="icon-sms"></i></p>
              <p class="floating-menu-title">SMS</p>
              <button class="btn-delete" v-show="isFloatingEdit"></button>
            </router-link>
          </li>
          <li>
            <button class="btn btn-bookmark-add" @click="drawerBookmark = true"><i class="icon-plus"></i></button>
          </li>
          <li>
            <button class="btn btn-bookmark-add" @click="drawerBookmark = true"><i class="icon-plus"></i></button>
          </li>
        </ul>
      </div>
      <button class="btn btn-floating" @click="switchFloating"></button>
      <button class="btn btn-edit" @click="switchFloatingEdit" v-show="!isFloatingEdit">편집</button>
      <button class="btn btn-edit" @click="switchFloatingEdit" v-show="isFloatingEdit">완료</button>
    </div>
  </div>
  <div class="l-drawer l-drawer-floating">
    <el-drawer
      :visible.sync="drawerBookmark"
      direction="btt"
      size="92%"
      :with-header="false">
      <div class="l-menu l-scroll sub-menu">
        <div class="l-fixed">
          <div class="drawer-title">즐겨찾기 등록</div>
          <div class="l-inner">
            <div class="l-inp l-search mt-15">
              <div class="inp">
                <div class="inp-inner">
                  <input type="text" class="input-text-line" placeholder="검색어를 입력하세요." id="inp-01" autofocus>
                </div>
                <button class="btn btn-search small"></button>
                <button class="btn-close"></button>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </el-drawer>
  </div>
</div>
</template>

<script>
  export default {
    name:'Floating',
    data() {
      return {
        floatingOn: false,
        isFloatingEdit: false,
        drawerBookmark: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      switchFloating: function () {
        this.floatingOn = !this.floatingOn;
      },
      switchFloatingEdit: function () {
        this.isFloatingEdit = !this.isFloatingEdit;
      },
    }
  }
</script>