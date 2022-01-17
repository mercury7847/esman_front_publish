<template>
  <div class="l-header">
    <div class="header">
      <div
        v-if="$route.name == 'dashboard'"
        class="user"
      >
        <div class="user-thumb">
          <img
            src="@/assets/images/user.svg"
            alt=""
          >
        </div>
        <div class="user-info">
          <span class="user-name">김한진</span>
          <span class="user-company">용산2</span>
        </div>
      </div>
      <div
        v-else
        class="navi"
      >
        <div class="navi-action">
          <button
            class="btn btn-prev"
            @click="back"
          >
            뒤로
          </button>
        </div>
        <div class="navi-title">
          <h1 class="title-page">
            <span>{{ $route.name }}</span>
          </h1>
        </div>
      </div>
      <div class="global-state">
        <button
          v-if="$route.name === 'dashboard'"
          class="btn btn-bluetooth"
        />
        <button
          v-if="$route.name === '집배송 출발'"
          class="btn btn-clock"
          @click="timeTabelActive = true"
        />
        <button class="btn btn-alarm">
          <span class="alram-count-num badge-circle-blue">2</span>
        </button>
        <button
          class="btn btn-menu"
          @click="sideMenuActive = !sideMenuActive"
        />
      </div>
      <side-menu
        v-if="sideMenuActive"
        @click="sideMenuActive = !sideMenuActive"
      />
    </div>
  </div>
</template>
<script>
import SideMenu from '../../components/layout/SideMenu';
export default {
  name: 'Gnb',
  components: { SideMenu },
  data() {
    return {
      sideMenuActive: false,
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
