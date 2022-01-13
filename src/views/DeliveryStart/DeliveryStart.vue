<template>
  <div class="l-container">
    <gnb />
    <div class="l-contents delivery-start">
      <div class="l-inner">
        <div class="l-tab mt-20">
          <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane name="1">
              <div slot="label"><span class="time">ALL</span><span class="number">10개</span></div>
              1tab
            </el-tab-pane>
            <el-tab-pane name="2">
              <div slot="label"><span class="time">9시 ~ 10시</span><span class="number">2개</span></div>
            </el-tab-pane>
            <el-tab-pane name="3">
              <div slot="label"><span class="time">10시 ~ 11시</span><span class="number">2개</span></div>
            </el-tab-pane>
            <el-tab-pane name="4">
              <div slot="label"><span class="time">11시 ~ 12시</span><span class="number">2개</span></div>
            </el-tab-pane>
            <el-tab-pane name="5">
              <div slot="label"><span class="time">12시 ~ 13시</span><span class="number">2개</span></div>
            </el-tab-pane>
            <el-tab-pane name="6">
              <div slot="label"><span class="time">13시 ~ 14시</span><span class="number">2개</span></div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gnb from "../../components/layout/Gnb";
export default {
  components: { Gnb },
  name: "DeliveryStart",
  data() {
    return {
      activeName: "1",
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
  },
};
</script>
