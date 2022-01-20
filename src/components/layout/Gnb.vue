<template>
  <div class="l-header">
    <div class="header">
      <div class="user" v-if="$route.name == 'dashboard'">
        <div class="user-thumb">
          <img src="@/assets/images/user.svg" alt="" />
        </div>
        <div class="user-info">
          <span class="user-name">김한진</span>
          <span class="user-company">용산2</span>
        </div>
      </div>
      <div class="navi" v-else>
        <div class="navi-action">
          <button class="btn btn-prev" @click="back">뒤로</button>
        </div>
        <div class="navi-title">
          <h1 class="title-page">
            <span>{{ $route.name }}</span>
          </h1>
        </div>
      </div>
      <div class="global-state">
        <button class="btn btn-bluetooth" v-if="$route.name === 'dashboard'"></button>
        <button class="btn btn-clock" v-if="$route.name === '집배송 출발'" @click="timeTabelActive = true"></button>
        <button class="btn btn-alarm"><span class="alram-count-num badge-circle blue">2</span></button>
        <button class="btn btn-menu"></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gnb",
  data() {
    return {
      timeTabelActive: false,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
