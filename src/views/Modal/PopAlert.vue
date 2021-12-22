<template>
  <div class="l-dialog small">
    <el-dialog :visible.sync="PopAlert" width="300px" center @close="popClick">
      <div slot="title" class="el-dialog__title">
        {{ popTitle }}
      </div>
      <div class="ft-align-center" v-html="popMsg"></div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="popClick">{{ popBtn }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PopAlert",
  props: {
    popTitle: {
      type: String,
      default: "",
    },
    popMsg: {
      type: String,
      default: "",
    },
    popBtn: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      PopAlert: true,
    };
  },
  methods: {
    popClick: function() {
      this.$emit("click");
    },
  },
};
</script>
