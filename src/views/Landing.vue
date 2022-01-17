<template>
  <div class="landing" v-loading="loading" element-loading-spinner="el-icon-loading">
    <div class="logo">
      <img src="@/assets/images/logo-white.svg" alt="" />
      <p class="slogun ft-size-regular"><span>소비자 중심경영 인증기업</span></p>
    </div>
    <div class="welcom-message ft-size-regular">
      <span>기쁨 전하는 행복상자 한진택배</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.$router.push("/Login");
    }, 2 * 1000);
  },
};
</script>
