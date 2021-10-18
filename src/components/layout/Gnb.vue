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
          <button class="prev-btn" @click="back">뒤로</button>
        </div>
        <div class="subject">
          <h2><span>{{$route.name}}</span></h2>
        </div>
    </div>


    <div class="global-state">
      <div class="icon-bluetooth">
        <button></button>
      </div>
      <div class="icon-alram">
        <button></button>
        <span class="alram-count"><span class="alram-count-num">2</span></span>
      </div>
      <div class="icon-menu">
        <button></button>
        <!-- <span class="global-state-count"></span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Gnb',
  data() {
    return {
      headerStyle:''
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
    }
  }
}

</script>
<style   scoped>
/*@import "../../assets/scss/var.scss";
@import "../../assets/scss/layout/layout.scss";*/
</style>

