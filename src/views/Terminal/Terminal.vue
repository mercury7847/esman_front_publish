<template>
<div class="service-layout">
  <Gnb />
  <div class="terminal">
    <div class="l-inner">
      <div class="l-inp">
        <div class="inp">
          <div class="inp-inner">
            <input type="text" class="input-text-line" placeholder="주소를 입력하세요." id="inp" autofocus>
          </div>
          <button class="btn search-btn"><i class="icon-search"></i></button>
        </div>
      </div>

      <div class="d-flex-be-center">
        <p class="txt-sub">최근 검색어</p>
        <button class="btn small-size white">전체 삭제</button>
      </div>
    </div>
      <div class="address-list">
        <ul>
          <li>
            <div class="address-txt">
              <p class="address-title">구로</p>
            </div>
            <div class="address-btn" v-show="!isSelect">
              <button class="btn-delete"></button>
            </div>
          </li>
        </ul>
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
    isSelect: false,
   };
  },
  methods: {
    switchSelect: function () {
      this.isSelect = !this.isSelect;
    },
  },
}
</script>