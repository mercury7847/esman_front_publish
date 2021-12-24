<template>
  <div class="l-container">
    <Gnb />
    <div class="l-tab join">
      <el-tabs v-model="activeName">
        <el-tab-pane label="1" name="1">
          <h2 class="title-section ft-color-primary mb-30">인원 정보 #1</h2>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="l-form" label-position="top">
            <el-form-item label="성명 (국문)" prop="name" class="mb-20">
              <div class="l-inp">
                <div class="inp">
                  <div class="inp-inner">
                    <el-input type="text" placeholder="성명 (국문)을 입력하세요." class="inp-text-line" v-model="ruleForm.name"></el-input>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="성명 (영문)" class="mb-20">
              <div class="l-inp">
                <div class="inp">
                  <div class="inp-inner">
                    <el-input type="text" placeholder="성명 (영문)을 입력하세요." class="inp-text-line" v-model="ruleForm.name2"></el-input>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="소속 조직 (집배점)" class="mb-20">
              <div class="l-inp">
                <div class="inp">
                  <div class="inp-inner">
                    <el-input type="text" placeholder="" class="inp-text-line" v-model="ruleForm.name2"></el-input>
                  </div>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="성명" class="mb-20">
              <div class="l-inp">
                <div class="inp">
                  <div class="inp-inner">
                    <el-input type="text" placeholder="" class="inp-text-line" v-model="ruleForm.name2"></el-input>
                  </div>
                </div>
              </div>
            </el-form-item>
          </el-form>

          <div class="l-inner">
            <div class="join-service-check">
              <div class="input-checkbox">
                <input type="checkbox" id="cterm1" checked />
                <label for="cterm1"><span>위치정보 제공동의</span></label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="cterm2" checked />
                <label for="cterm2"><span>개인정보 수집 및 이용안내</span></label>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="cterm3" />
                <label for="cterm3"><span>개인정보 제공 안내</span></label>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="2" name="2">
          <template class="">
            <el-tabs type="card" @tab-click="handleClick">
              <el-tab-pane label="자동차등록증">
                <div class="l-inner">
                  <div class="txt-warning">
                    *는 필수 등록입니다.
                  </div>
                  <h3 class="txt-title">
                    회원가입을 위해<br />
                    자동차 등록증을 준비해주세요.
                  </h3>
                  <div class="bx-certificate"></div>
                  <div class="txt-message">
                    테두리 안쪽에 신분증을 위치하시고<br />
                    빛이 투영되지 않도록 촬영해주세요.
                  </div>
                  <div class="btn-group"><button class="btn btn-size-full primary">촬영</button></div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="운전면허증">
                <div class="l-inner">
                  <div class="txt-warning">
                    *는 필수 등록입니다.
                  </div>
                  <h3 class="txt-title">
                    회원가입을 위해<br />
                    운전면허증을 준비해주세요.
                  </h3>
                  <div class="bx-certificate"></div>
                  <div class="txt-message">
                    테두리 안쪽에 신분증을 위치하시고<br />
                    빛이 투영되지 않도록 촬영해주세요.
                  </div>
                  <div class="btn-group"><button class="btn btn-size-full primary">촬영</button></div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="화물종사자격증">
                <div class="l-inner">
                  <h3 class="txt-title">
                    회원가입을 위해<br />
                    화물종사자격증을 준비해주세요.
                  </h3>
                  <div class="bx-certificate"></div>
                  <div class="txt-message">
                    테두리 안쪽에 신분증을 위치하시고<br />
                    빛이 투영되지 않도록 촬영해주세요.
                  </div>
                  <div class="btn-group"><button class="btn btn-size-full primary">촬영</button></div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
        </el-tab-pane>
        <el-tab-pane label="3" name="3">
          <div class="l-inner">
            <div class="join-complete">
              <i class="icon-complete icon-size-xxxlarge"></i>
              <h2 class="txt-title">회원가입이 완료되었습니다.</h2>
              <div class="txt-secondary">로그인 후 E/S man 서비스를<br />사용할 수 있습니다.</div>
            </div>
            <div class="btn-group">
              <router-link to="/login"><button class="btn btn-size-full primary">로그인 화면으로 이동</button></router-link>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Gnb from "../../components/layout/Gnb";
export default {
  components: { Gnb },
  name: "Join",
  data() {
    return {
      activeName: "1",
      selected: "",
      ruleForm: {
        name: "",
        name2: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "성명 (국문)을 입력해주세요", trigger: "blur" }],
        password: [{ required: true, message: "비밀번호를 입력해주세요.", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
