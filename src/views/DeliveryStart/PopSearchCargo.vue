<template>
  <div class="l-dialog default">
    <el-dialog :visible.sync="PopSearchCargo" @close="popClick" center>
      <div slot="title" class="el-dialog__title">
        <h2>화물 검색</h2>
      </div>
      <div class="l-dialog-body">
        <el-form class="l-form" label-position="top">
          <el-form-item label="집배송 권역" class="mb-20">
            <div class="l-select">
              <div class="select">
                <el-select v-model="select01" value-key="value" placeholder="select">
                  <el-option v-for="item in selectOptions1" :key="item.value" :label="item.label" :value="item"> </el-option>
                </el-select>
              </div>
              <div class="select">
                <el-select v-model="select02" value-key="value" placeholder="select">
                  <el-option v-for="item in selectOptions2" :key="item.value" :label="item.label" :value="item"> </el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="상품명" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="text" placeholder="상품명을 입력하세요." v-model="input01" class="inp-text-line" clearable></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="주소" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="text" placeholder="주소를 입력하세요." v-model="input02" class="inp-text-line" clearable></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="송하인" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="text" placeholder="송하인 이름을 입력하세요." v-model="input03" class="inp-text-line" clearable></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="수하인">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="text" placeholder="수하인 이름을 입력하세요." v-model="input04" class="inp-text-line" clearable></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="popClick">검색</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopSearchCargo",
  data() {
    return {
      PopSearchCargo: true,
      input01: "",
      input02: "",
      input03: "",
      input04: "",
      select01: "",
      select02: "",
      selectOptions1: [
        {
          value: "1",
          label: "송파석촌",
        },
        {
          value: "2",
          label: "송파석촌",
        },
      ],
      selectOptions2: [
        {
          value: "1",
          label: "잠실 2(집)",
        },
      ],
    };
  },
  methods: {
    popClick() {
      this.$emit("click");
    },
  },
  created() {
    this.select01 = this.selectOptions1[0];
    this.select02 = this.selectOptions2[0];
  },
};
</script>
