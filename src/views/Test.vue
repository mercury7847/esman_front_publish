<template>
  <div>
    <button @click="onTest">test</button>
  </div>
</template>
<script>

import {setUserSession, test} from "@/store/module/userAuth";

export default {

  name: "Test",
  methods:{
    onTest(){
      this.$fetchData({
        url: '/api/esmn/v1/logn/comncd',
        method: 'GET',
        data: {

        },
      }).then((response) => {
        console.log('성공');
        console.log(response);
        this.$store.dispatch(test, response);
      });
    }
  }
}
</script>
<style  scoped>
.list {
  border: 1px red solid;
}
</style>
