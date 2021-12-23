<template>
  <div class="l-header">
    <div class="header">
      <div class="user" v-if="$route.name == 'dashboard'">
        <!-- <router-link to="/dashboard">
        <button class="btn"><i class="icon-home">홈</i></button>
      </router-link> -->
        <!-- <img src="@/assets/images/logo.svg" alt="한진택배" class="logo" /> -->
        <div class="user-thumb">
          <img src="../../assets/images/user.png" alt="" />
        </div>
        <div class="user-info">
          <span class="user-name">김한진</span>
          <span class="user-num">9117159</span>
        </div>
      </div>

      <div class="navi" v-else>
        <div class="navi-action">
          <button class="btn btn-prev" @click="back">뒤로</button>
        </div>
        <div class="subject">
          <h1 class="title-page">
            <span>{{ $route.name }}</span>
          </h1>
        </div>
      </div>

      <!-- <div class="menu">
      <button class="btn" v-show="$route.name === '거래처 관리' || $route.name === '보내는 분 관리' || $route.name === '부사용자 관리'" @click="popSearch = true">
        <i class="icon-search"></i>
      </button>
      <button class="btn btn-small-size btn-edi" v-show="$route.name === '출력 관리'">EDI 출력</button>

      <button class="btn" @click="sideMenuOn = true"><i class="icon-menu">menu</i></button>
    </div> -->

      <div class="global-state">
        <button class="btn btn-bluetooth"></button>
        <button class="btn btn-alarm" @click="toggleDrawer"><span class="alram-count-num badge-circle-blue">2</span></button>
        <button class="btn btn-menu" @click="toggleSideMenu"></button>
      </div>
      <side-menu v-if="sideMenuOn" @click="toggleSideMenu" />
    </div>

    <!-- 알림 -->
    <div class="l-notification l-drawer l-scroll">
      <el-drawer :visible.sync="drawerNoti" direction="btt" size="92%" :with-header="false" :modal="false">
        <div class="drawer-title d-flex-be-center">
          <span>알림 <span class="txt-primary">4</span></span>
          <button class="btn btn-size-regular white">알림 모두 지우기</button>
        </div>
        <ul class="l-list scroll-y">
          <li v-for="noti in notiList" :key="noti.title">
            <div class="noti-list" @click="popVisible">
              <p class="ft-color-black">
                <span class="ft-weight-bold mr-10">{{ noti.title }}</span>
                <span class="txt-sub ft-size-xsmall">{{ noti.time }}</span>
              </p>
              <p class="mt-5 txt-sub ft-size-xsmall">{{ noti.desc }}</p>
            </div>
            <button class="btn-delete"></button>
          </li>
        </ul>
      </el-drawer>
    </div>

    <pop-notification v-if="popOn" @click="popVisible" />
  </div>
</template>
<script>
import SideMenu from "../../components/layout/SideMenu";
import PopNotification from "../../views/Modal/PopNotification";
export default {
  components: { SideMenu, PopNotification },
  name: "Gnb",
  data() {
    return {
      sideMenuOn: false,
      drawerNoti: false,
      popOn: false,
      notiList: [
        {
          title: "오늘의 배송물량",
          time: "1시간 전",
          desc: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        },
        {
          title: "오늘의 집하 물량",
          time: "1시간 전",
          desc: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        },
        {
          title: "오늘의 기상 현황",
          time: "2시간 전",
          desc: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        },
        {
          title: "인근 반품 건",
          time: "(화) 오전 7:45분",
          desc: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        },
      ],
    };
  },
  mounted() {
    // let page_path = window.location.pathname;
    // page_path = page_path.split("/")[1];
    // console.log(page_path);
    // this.headerStyle = page_path == "dashboard" ? "gnb" : "navi";
  },
  watch: {},
  methods: {
    back() {
      this.$router.back();
    },
    toggleSideMenu: function() {
      this.sideMenuOn = !this.sideMenuOn;
    },
    toggleDrawer: function() {
      this.drawerNoti = !this.drawerNoti;
    },
    popVisible: function() {
      this.popOn = !this.popOn;
    },
  },
};
</script>
