<template>
  <div class="l-container">
    <Gnb />
    <div class="join">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="1" name="first">
          <div class="l-inner">
            <div class="join-form form">
              <div class="join-cid">
                <label for="c-id">사번</label>
                <div class="l-inp">
                  <!-- default : 클래스 명 'inp' -->
                  <!-- disabled 일 경우 : 클래스 명 'inp disabled' , input 태그에 disabled 추가 -->
                  <div class="inp disabled">
                    <div class="inp-inner">
                      <input type="text" class="input-text-line" placeholder="사번을 입력하세요" id="c-id" autofocus disabled />
                    </div>
                  </div>
                  <button class="btn secondary btn-regular-size">생성</button>
                </div>
                <label for="c-pw">비밀번호</label>
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <input type="text" class="input-text-line" placeholder="비밀번호를 입력하세요." id="c-pw" autofocus />
                    </div>
                  </div>
                </div>
                <label for="c-pw2">비밀번호 확인</label>
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <input type="text" class="input-text-line" placeholder="비밀번호를 입력하세요." id="c-pw2" autofocus />
                    </div>
                  </div>
                </div>
                <label for="c-mob">휴대전화 번호</label>
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <input type="text" class="input-text-line" placeholder="휴대전화 번호를 입력하세요." id="c-mob" autofocus />
                    </div>
                  </div>
                  <button class="btn secondary btn-regular-size">인증번호 전송</button>
                </div>
                <label for="c-name">이름</label>
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <input type="text" class="input-text-line" placeholder="이름을 입력하세요." id="c-name" autofocus />
                    </div>
                  </div>
                </div>
                <label for="c-birth">생년월일</label>
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <input type="text" class="input-text-line" placeholder="생년월일 8자리를 입력하세요." id="c-birth" autofocus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        <el-tab-pane label="2" name="second">
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
                  <div class="btn-group"><button class="btn btn-full-size primary">촬영</button></div>
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
                  <div class="btn-group"><button class="btn btn-full-size primary">촬영</button></div>
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
                  <div class="btn-group"><button class="btn btn-full-size primary">촬영</button></div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
        </el-tab-pane>
        <el-tab-pane label="3" name="third">
          <div class="l-inner">
            <div class="join-complete">
              <i class="icon-complete icon-xlg"></i>
              <h2 class="txt-title">회원가입이 완료되었습니다.</h2>
              <div class="txt-secondary">로그인 후 E/S man 서비스를<br />사용할 수 있습니다.</div>
            </div>
            <div class="btn-group">
              <router-link to="/login"><button class="btn btn-full-size primary">로그인 화면으로 이동</button></router-link>
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
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
