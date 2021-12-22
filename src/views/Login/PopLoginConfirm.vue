<template>
  <div class="l-dialog small">
    <el-dialog title="접속제한 안내" :visible.sync="PopPassword" width="300px" center @close="popClick">
      <div class="ft-align-center">비밀번호 5회 연속 오류로 인하여<br />해당 사번으로로그인이 제한됩니다.</div>
      <div class="ft-align-center mt-10">재 로그인을 위해서 본인의 핸드폰 번호로<br />재인증해주시기 바랍니다.</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="popClick">닫기</el-button>
        <el-button type="primary" @click="popClick">비밀번호 재발급</el-button>
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
    };
  },
  methods: {
    popClick: function() {
      this.$emit("click");
    },
  },
};
</script>
