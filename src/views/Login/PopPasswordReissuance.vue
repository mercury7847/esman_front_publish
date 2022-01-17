<template>
  <div class="l-dialog">
    <el-dialog
      title="비밀번호 재발급"
      :visible.sync="PopPasswordReissuance"
      width="322px"
      center
      @close="popClick"
    >
      <div class="dialog-body">
        <p class="title-sub mb-20">
          등록된 휴대폰 번호로 찾기
        </p>
        <el-form
          class="l-form"
          label-position="top"
        >
          <el-form-item
            label="사번"
            class="mb-20"
          >
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input
                    v-model="input01"
                    type="number"
                    placeholder="가입된 사번을 입력하세요."
                    class="inp-text-line"
                  />
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item
            label="이름"
            class="mb-20"
          >
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input
                    v-model="input02"
                    type="number"
                    placeholder="이름을 입력하세요."
                    class="inp-text-line"
                  />
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item
            label="휴대전화 번호"
            class="mb-20"
          >
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input
                    v-model="input03"
                    type="number"
                    placeholder="휴대전화 번호를 입력하세요."
                    class="inp-text-line"
                  />
                </div>
              </div>
              <button class="btn btn-size-large primary">
                인증번호
              </button>
            </div>
          </el-form-item>
          <el-form-item label="인증 번호">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input
                    v-model="input04"
                    type="number"
                    placeholder="인증 번호를 입력하세요."
                    class="inp-text-line"
                  >
                    <span slot="suffix">2:33</span>
                  </el-input>
                </div>
              </div>
              <button class="btn btn-size-large primary">
                확인
              </button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="popClick"
        >
          임시 비밀번호 발급
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PopPasswordReissuance',
  data() {
    return {
      PopPasswordReissuance: true,
      input01: '',
      input02: '',
      input03: '',
      input04: '',
    };
  },
  methods: {
    popClick() {
      this.$emit('click');
    },
  },
};
</script>
