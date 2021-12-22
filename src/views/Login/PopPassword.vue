<template>
  <div class="l-dialog">
    <el-dialog title="사번 찾기" :visible.sync="PopPassword" width="322px" center @close="popClick">
      <div class="dialog-body">
        <el-form class="l-form" label-position="top">
          <el-form-item label="휴대전화 번호" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="number" placeholder="휴대전화 번호를 입력하세요." v-model="input01" class="inp-text-line"></el-input>
                </div>
              </div>
              <button class="btn btn-size-large primary">인증번호</button>
            </div>
          </el-form-item>
          <el-form-item label="인증 번호">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="number" placeholder="인증 번호를 입력하세요." v-model="input02" class="inp-text-line">
                    <span slot="suffix">2:33</span>
                  </el-input>
                </div>
              </div>
              <button class="btn btn-size-large primary">확인</button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="popClick">사번 찾기</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopPassword",
  data() {
    return {
      PopPassword: true,
      input01: "",
      input02: "",
    };
  },
  methods: {
    popClick: function() {
      this.$emit("click");
    },
  },
};
</script>
