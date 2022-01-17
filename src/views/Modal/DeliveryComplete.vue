<template>
  <div class="l-dialog small">
    <el-dialog title="운송장 번호" :visible.sync="DeliveryComplete" width="300px" center>
      <div class="l-inp l-search">
        <div class="inp">
          <div class="inp-inner">
            <input type="text" class="input-text-line" placeholder="송장번호를 입력하세요." id="inp-01" autofocus />
            <button class="btn-close"></button>
          </div>
          <button class="btn btn-search"></button>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="popClick">닫기</el-button>
        <el-button type="primary" @click="popClick">입력</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopWaybill",
  data() {
    return {
      PopWaybill: true,
    };
  },
  methods: {
    popClick: function() {
      this.$emit("click");
    },
  },
};
</script>
