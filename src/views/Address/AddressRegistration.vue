<template>
<div class="l-service">
  <Gnb />
  <div class="address-registration">
    <div class="l-inner">
      <div class="form">
        <label for="address-name">주소 이름</label>
        <div class="l-inp">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="구로 터미널" id="address-name" autofocus>
            </div>
          </div>
        </div>
        <label for="c-pw">주소</label>
        <div class="l-inp">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="검색어를 입력하세요." id="c-pw" autofocus>
            </div>
          </div>
          <button class="btn primary reg-size">검색</button>
        </div>
      </div>
      <div class="btn-group bottom"><button class="btn full-size large primary">등록하기</button></div>
    </div>
  </div>
</div>
</template>

<script>
import Gnb from '../../components/layout/Gnb'
export default {
  components: { Gnb },
  name:'Address',
  data() {
   return {

   };
  },
}
</script>