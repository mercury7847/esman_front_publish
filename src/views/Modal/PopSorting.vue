<template>
  <div class="l-dialog small pop-sorting">
    <el-dialog title="정렬방식 선택" :visible.sync="PopSorting" width="300px" center>
      <div class="l-radio list">
        <el-radio-group v-model="radioTypeList">
          <el-radio label="1">기본순</el-radio>
          <el-radio label="2">스캔순</el-radio>
          <el-radio label="3">권역순</el-radio>
        </el-radio-group>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="popClick">닫기</el-button>
        <el-button type="primary" @click="popClick">확인</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopSorting",
  data() {
    return {
      PopSorting: true,
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
