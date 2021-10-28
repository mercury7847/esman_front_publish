<template>
  <div class="l-dialog small">
    <el-dialog
      title="화물 검색"
      :visible.sync="PopSearch"
      width="300px"
      center>
      <div class="l-inp l-search">
        <div class="inp">
          <div class="inp-inner">
            <input type="text" class="input-text-line" placeholder="화물을 검색하세요." id="inp-01" autofocus>
            <button class="btn-close"></button>
          </div>
          <button class="btn btn-search"></button>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="popClick">닫기</el-button>
        <el-button type="primary" @click="popClick">검색</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PopSearch',
  data() {
    return {
      PopSearch: true,
    }
  },
  methods: {
    popClick: function () {
      this.$emit('click')
    },
  }
}
</script>
