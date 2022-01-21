<template>
  <div class="l-dialog default pop-delivery-time">
    <el-dialog :visible.sync="PopTransferReason" @close="popClick" center>
      <div slot="title" class="el-dialog__title">
        <h2>이관 사유 입력</h2>
      </div>
      <div class="l-section-header mb-30">
        <p><span class="badge blue">$ 선불</span><span class="badge green ml-10">배송</span></p>
        <p>6105874614 외 <span class="ft-color-primary">3</span>건</p>
      </div>
      <el-form class="l-form" label-position="top">
        <el-form-item label="사유" class="mb-30">
          <div class="l-textarea">
            <el-input type="textarea" placeholder="이관 사유를 입력하세요." v-model="textarea"> </el-input>
          </div>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="transferReason">확인</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopTransferReason",
  data() {
    return {
      PopTransferReason: true,
      radioTypeList: "",
      textarea: "",
    };
  },
  methods: {
    popClick() {
      this.$emit("click");
    },
    transferReason() {
      this.$emit("click");
      this.$emit("transferReason");
    },
  },
};
</script>
