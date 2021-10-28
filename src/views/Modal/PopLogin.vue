<template>
  <div class="l-dialog small">
    <el-dialog
      title="로그인 오류"
      :visible.sync="PopLogin"
      width="300px"
      center>
      <div class="ft-align-center">
        사번 또는 비밀번호가<br>일치하지 않습니다.
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="popClick">닫기</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PopLogin',
  data() {
    return {
      PopLogin: true,
    }
  },
  methods: {
    popClick: function () {
      this.$emit('click')
    },
  }
}
</script>
