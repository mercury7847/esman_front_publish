<template>
  <div class="l-dialog default pop-delivery-time">
    <el-dialog :visible.sync="PopDeliveryTime" @close="popClick" center>
      <div slot="title" class="el-dialog__title">
        <h2>선택 화물의 배송 예정 시간 설정</h2>
      </div>
      <p class="title ft-color-grey mb-15">예정 시간을 선택하세요.</p>
      <el-form class="l-form scroll-y">
        <el-form-item>
          <div class="l-radio list mb-30">
            <el-radio-group v-model="radioTypeList">
              <el-radio label="1">미설정</el-radio>
              <el-radio label="2">9시 ~ 10시</el-radio>
              <el-radio label="3">10시 ~ 11시</el-radio>
              <el-radio label="4">11시 ~ 12시</el-radio>
              <el-radio label="5">12시 ~ 13시</el-radio>
              <el-radio label="6">13시 ~ 14시</el-radio>
              <el-radio label="7">14시 ~ 15시</el-radio>
              <el-radio label="8">15시 ~ 16시</el-radio>
              <el-radio label="9">16시 ~ 17시</el-radio>
              <el-radio label="10">17시 ~ 18시</el-radio>
              <el-radio label="11">18시 ~ 19시</el-radio>
              <el-radio label="12">19시 ~ 20시</el-radio>
              <el-radio label="13">20시 ~ 21시</el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
      </el-form>
      <!-- <div class="l-scroll">
      </div> -->

      <div slot="footer" class="dialog-footer">
        <el-button @click="popClick">취소</el-button>
        <el-button type="primary" @click="popClick">확인</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopDeliveryTime",
  data() {
    return {
      PopDeliveryTime: true,
      radioTypeList: "1",
    };
  },
  methods: {
    popClick() {
      this.$emit("click");
    },
  },
};
</script>
