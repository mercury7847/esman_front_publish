<template>
  <div class="l-dialog small pop-waybill">
    <el-dialog title="운송장 번호" :visible.sync="PopWaybill" width="300px" center>
      <div class="l-inp">
        <div class="inp">
          <div class="inp-inner">
            <el-input type="number" placeholder="운송장 번호를 입력하세요." v-model="inputWaybill" class="inp-text-line">
              <button slot="append" class="btn btn-camera"></button>
            </el-input>
          </div>
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
      inputWaybill: "",
    };
  },
  methods: {
    popClick() {
      this.$emit("click");
    },
  },
};
</script>
