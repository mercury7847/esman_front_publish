<template>
  <div class="l-container footer-active bg">
    <gnb />
    <div class="l-contents dashboard">
      dashboard
    </div>
    <foot-menu />
  </div>
</template>
<script>
import Gnb from "../../components/layout/Gnb";
import FootMenu from "../../components/layout/FootMenu";
export default {
  components: { FootMenu, Gnb },
  name: "Dashboard",
  data() {
    return {};
  },
  methods: {},
};
</script>
