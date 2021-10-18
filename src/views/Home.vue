<template>
  <div class="home">
<!--    <router-link to="/"><el-button>Home</el-button></router-link>-->
<!--    <router-link to="/landing"><el-button type="primary">Splash</el-button></router-link>-->
<!--    <router-link to="/login"><el-button>Login</el-button></router-link>-->
    <router-link to="/dashboard"><el-button>Dashboard</el-button></router-link>
    <router-link to="/address"><el-button>주소록관리</el-button></router-link>
    <router-link to="/terminal"><el-button>터미널, 영업점조회</el-button></router-link>

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



</style>
