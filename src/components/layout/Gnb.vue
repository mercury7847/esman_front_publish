<template>
  <div class="header">
    <div class="user" v-if="$route.name == '대시보드'">
      <div class="user-thumb">
        <img src="../../assets/images/user.png" alt="" />
      </div>
      <div class="user-info">
        <span class="user-name">김한진</span>
        <span class="user-addr">용산2</span>
      </div>
    </div>
    <div class="nivigation" v-else>
      <div class="navi-action">
        <button class="btn btn-prev" @click="back">뒤로</button>
      </div>
      <div class="subject">
        <h2>
          <span>{{ $route.name }}</span>
        </h2>
      </div>
    </div>
    <div class="global-state">
      <button class="btn btn-bluetooth"></button>
      <button class="btn btn-alarm" @click="toggleDrawer"><span class="alram-count-num badge-circle-blue">2</span></button>
      <button class="btn btn-menu" @click="toggleSideMenu"></button>
    </div>
    <side-menu v-if="sideMenuOn" @click="toggleSideMenu" />

    <!-- 알림 -->
    <div class="l-notification l-drawer l-scroll">
      <el-drawer :visible.sync="drawerNoti" direction="btt" size="92%" :with-header="false" :modal="false">
        <div class="drawer-title d-flex-be-center">
          <span>알림 <span class="txt-primary">4</span></span>
          <button class="btn small-size white">알림 모두 지우기</button>
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
