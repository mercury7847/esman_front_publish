<template>
  <div class="l-dialog default pop-delivery-time">
    <el-dialog :visible.sync="PopTransferRequest" @close="popClick" center>
      <div slot="title" class="el-dialog__title">
        <h2>대상 이관 요청</h2>
      </div>
      <div class="l-section-header mb-20">
        <p><span class="badge blue">$ 선불</span><span class="badge green ml-10">배송</span></p>
        <p>6105874614 외 <span class="ft-color-primary">3</span>건</p>
      </div>
      <div class="l-section-header mb-15 bg-yellow">
        <span>이관 대상 E/S man</span>
        <span>송파 1 집배점</span>
      </div>
      <el-form class="l-form scroll-y">
        <el-form-item>
          <div class="l-radio list mb-30">
            <el-radio-group v-model="radioTypeList">
              <el-radio label="1"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="2"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="3"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="4"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="5"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="6"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="7"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="8"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="9"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="10"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="11"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
              <el-radio label="12"><span>김한진</span><span class="ml-10">010-XXX-XXXX</span></el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="transferRequest">확인</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopTransferRequest",
  data() {
    return {
      PopTransferRequest: true,
      radioTypeList: "",
    };
  },
  methods: {
    popClick() {
      this.$emit("click");
    },
    transferRequest() {
      this.$emit("click");
      this.$emit("transferRequest");
    },
  },
};
</script>
