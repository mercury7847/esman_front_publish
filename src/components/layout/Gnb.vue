<template>
  <div class="header">
    <div class="user" v-if="headerStyle == 'gnb'">
      <div class="user-thumb">
        <img src="../../assets/images/user.png" alt="">
      </div>
      <div class="user-info">
        <span class="user-name">김한진</span>
        <span class="user-addr">용산2</span>
      </div>
    </div>
    <div class="nivigation" v-else-if="headerStyle == 'navi'">
        <div class="navi-action">
          <button class="btn btn-prev" @click="back">뒤로</button>
        </div>
        <div class="subject">
          <h2><span>{{$route.name}}</span></h2>
        </div>
    </div>
    <div class="global-state">
      <button class="btn btn-bluetooth"></button>
      <button class="btn btn-alarm"><span class="alram-count-num badge-circle-blue">2</span></button>
      <button class="btn btn-menu" @click="sideMenuOn = true"></button>
    </div>
    <side-menu v-if="sideMenuOn" @click="toggleSideMenu"/>
  </div>
</template>
<script>
import SideMenu from '../../components/layout/SideMenu'
export default {
  components: { SideMenu },
  name:'Gnb',
  data() {
    return {
      headerStyle:'',
      sideMenuOn: false,
    }
  },
  mounted() {
    // 페이지별 해더 변경
    // 기존 소스 적용 안됨 -> 수정 2021.10.13 by.j2hyun
    let page_path = window.location.pathname;
    page_path = page_path.split('/')[1]
    // console.log(page_path);
    this.headerStyle = page_path == 'dashboard'  ? 'gnb' : 'navi'
  },
  watch: {},
  methods: {
    back(){
      this.$router.back();
    },
    toggleSideMenu: function () {
      this.sideMenuOn = !this.sideMenuOn;
    },
  }
}

</script>

