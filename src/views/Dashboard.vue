<template>
  <div>
    <h2>대시보드 페이지 입니다.</h2>
    <ul class="list">
      <li>
        <router-link to="/">
          메인페이지로 이동
        </router-link>
        <router-link to="/landing">
          렌딩이미지
        </router-link>
        <router-link to="/dashboard">
          데시보드 이동
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {

  name: 'Dashboard',
};
</script>
<style  scoped>
.list {
  border: 1px red solid;
}
</style>
