<template>
<div class="service-layout">
    <Gnb />
  <div class="password">
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="사번 찾기">
        <div class="l-inner">
            <div class="join-form form">
                <div class="join-cid">
                    <label for="c-mob">휴대전화 번호</label>
                    <div class="l-inp">
                        <div class="inp">
                            <div class="inp-inner">
                                <input type="text" class="input-text-line" placeholder="휴대전화 번호입력 (‘-’ 제외)" id="c-mob" autofocus>
                            </div>
                        </div>
                        <button class="btn regular secondary reg-size">인증번호</button>
                    </div>
                    <label for="c-pw">인증번호</label>
                    <div class="l-inp">
                        <div class="inp">
                            <div class="inp-inner">
                                <input type="text" class="input-text-line" placeholder="인증번호 입력" id="c-pw" autofocus>
                            </div>
                        </div>
                        <button class="btn regular secondary reg-size">확인</button>
                    </div>
                </div>
            </div>
            <div class="btn-group"><button class="btn full-size large primary">사번 찾기</button></div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="비밀번호 찾기">
        <div class="l-inner">
            <h2 class="txt-title">등록된 휴대폰 번호로 찾기</h2>
            <div class="join-form form">
                <div class="join-cid">
                    <label for="c-id">사번</label>
                    <div class="l-inp">
                        <div class="inp">
                            <div class="inp-inner">
                                <input type="text" class="input-text-line" placeholder="사번을 입력하세요" id="c-id" autofocus>
                            </div>
                        </div>
                    </div>
                    <label for="c-name">이름</label>
                    <div class="l-inp">
                        <div class="inp">
                            <div class="inp-inner">
                                <input type="text" class="input-text-line" placeholder="이름을 입력하세요." id="c-name" autofocus>
                            </div>
                        </div>
                    </div>
                    <label for="c-mob">휴대전화 번호</label>
                    <div class="l-inp">
                        <div class="inp">
                            <div class="inp-inner">
                                <input type="text" class="input-text-line" placeholder="휴대전화 번호를 입력하세요." id="c-mob" autofocus>
                            </div>
                        </div>
                        <button class="btn regular secondary reg-size">인증번호 전송</button>
                    </div>
                    
                    <label for="c-certified">인증번호</label>
                    <div class="l-inp">
                        <div class="inp">
                            <div class="inp-inner">
                                <input type="text" class="input-text-line" placeholder="인증번호를 입력하세요." id="c-certified" autofocus>
                            </div>
                        </div>
                    </div>
                    <label for="c-email">메일주소</label>
                    <div class="l-inp">
                        <div class="inp">
                            <div class="inp-inner">
                                <input type="text" class="input-text-line" placeholder="비밀번호를 수신할 메일 주소를 입력하세요." id="c-email" autofocus>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-group"><button class="btn full-size large primary">비밀번호 찾기</button></div>
        </div>
    </el-tab-pane>
</el-tabs>
  </div>  
</div>
</template>

<script>
import Gnb from '../../components/layout/Gnb'
export default {
    components: { Gnb },
  name:'Password',
   data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>