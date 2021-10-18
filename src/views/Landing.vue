<template>
  <div class="landing">
    <div class="logo">
      <img src="@/assets/images/lending_logo.png" alt="">
      <p class="slogun"><span>소비자 중심경영 인증기업</span></p>
    </div>
    <div class="welcom-message">
      <p>WELCOME  — 기쁨 전하는 행복상자 한진택배</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'Landing',

  mounted(){
    setTimeout(()=>{
      this.$router.push("/Login")
    }, 2 * 1000)

  }
}
</script>


