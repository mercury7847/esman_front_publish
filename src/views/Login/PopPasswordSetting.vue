<template>
  <div class="l-dialog">
    <el-dialog title="비밀번호 설정" :visible.sync="PopPassword" width="322px" center @close="popClick">
      <div class="dialog-body">
        <el-form class="l-form" label-position="top">
          <el-form-item label="현재 비밀번호" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="password" placeholder="비밀번호를 입력하세요." v-model="input01" class="inp-text-line"></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="새 비밀번호" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="password" placeholder="비밀번호를 입력하세요." v-model="input02" class="inp-text-line"></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="새 비밀번호 확인" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="password" placeholder="비밀번호를 입력하세요." v-model="input03" class="inp-text-line"></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="popClick">비밀번호 변경</el-button>
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
      input03: "",
    };
  },
  methods: {
    popClick: function() {
      this.$emit("click");
    },
  },
};
</script>
