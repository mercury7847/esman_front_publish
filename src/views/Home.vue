<template>
  <div class="home">
<!--    <router-link to="/"><el-button>Home</el-button></router-link>-->
<!--    <router-link to="/landing"><el-button type="primary">Splash</el-button></router-link>-->
<!--    <router-link to="/login"><el-button>Login</el-button></router-link>-->
    <div><router-link to="/login"><el-button>login</el-button></router-link></div>
    <div><router-link to="/dashboard"><el-button>Dashboard</el-button></router-link></div>
    <div><router-link to="/address"><el-button>주소록관리</el-button></router-link></div>
    <div><router-link to="/terminal"><el-button>터미널, 영업점조회</el-button></router-link></div>
    <div><router-link to="/delivery"><el-button>집배송 출발</el-button></router-link></div>
    <div><router-link to="/message-record"><el-button>문자/통화 기록</el-button></router-link></div>
    <div><router-link to="/customer-service"><el-button>고객 응대 내역</el-button></router-link></div>
  </div>
</template>

<script>

import {mapGetters, mapState} from "vuex";

export default {
  name: "Home",
  components: { },
  //  mixins: [CommonUtil.mixingInfiniteScroll()],
  created() {

  },
  mounted() {

  },
  computed: {
    ...mapState([

    ]),



  },
  watch: {},
  data() {
    return {}
  },
  methods: {

  }
}

</script>
<style   scoped>
 .home a {
    display: inline-block;
  }


</style>
