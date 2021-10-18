<template>
<div class="l-service">
  <Gnb />
  <div class="delivery-start">
  <el-tabs @tab-click="handleClick">
    <el-tab-pane label="배송">
      <div class="l-inner">
        <div class="l-total">
          <div class="d-flex-align-center">
            <div class="input-checkbox">
              <input type="checkbox" id="chk-all"/>
              <label for="chk-all"></label>
            </div>
            <div class="d-inline-block txt-sub">
              <p>0/<span class="txt-primary">4</span></p>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn small-size secondary" disabled>삭제</button>
            <button class="btn small-size white">송장번호</button>
            <button class="btn"><i class="icon-refresh"></i></button>
            <button class="btn"><i class="icon-search small"></i></button>
          </div>
        </div>
        <ul>
          <li v-for="item in addressList" :key="item">
            <div class="card type-02">
              <div class="card-inner">
                <div class="contents d-flex-be-center">
                  <div class="d-flex-align-center">
                    <div class="input-checkbox">
                      <input type="checkbox" id="chk-01"/>
                      <label for="chk-01"></label>
                    </div>
                    <div class="l-delivery-address">
                      <div class="delivery-address-badge">
                        <!-- 스캔 처리 안된 경우: gray, 스캔 완료 된 경우 purple -->
                        <span class="badge gray">스캔</span>
                        <span class="badge green">배송</span>
                        <span class="txt-sub ft-size-xsmall">{{ item.number }}</span>
                      </div>
                      <p class="delivery-address-desc">{{ item.address }}</p>
                    </div>
                  </div>
                  <div class="btn-group">
                    <button class="btn" @click="switchPop"><i class="icon-more-vertical"></i></button>
                  </div>
                </div>
              </div>
              <div class="card-inner d-flex-be-center" v-show="isPopOn">
                <button class="btn-close-pop" @click="switchPop">접기</button>
                <button class="btn btn-circle blue">출발확정</button>
                <button class="btn btn-circle">삭제</button>
                <button class="btn btn-circle">스캔취소</button>
                <button class="btn btn-circle">상세</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </el-tab-pane>
    <el-tab-pane label="집하">
      <div class="l-inner">
        <button class="btn-edit" v-show="isPopOn" @click="drawer = true">추가</button>
      </div>
    </el-tab-pane>
  </el-tabs>
  </div>

  <div class="l-delivery-pop card">
    <ul class="txt">
      <li>
        <span class="title">배송</span><span class="num ft-color-green">4</span>
      </li>
      <li>
        <span class="title">집하</span><span class="num ft-color-yellow">4</span>
      </li>
      <li>
        <span class="title">스캔</span><span class="num ft-color-purple">4</span>
      </li>
    </ul>
    <button class="btn full-size reg-size primary badge-circle">출발 확정 대상</button>
  </div>
  <Foot-menu />
</div>
</template>

<script>
import Gnb from '../../components/layout/Gnb'
import FootMenu from '../../components/layout/FootMenu'
export default {
  components: { Gnb, FootMenu },
  name:'DeliveryStart',
  data() {
    return {
      isPopOn: false,
      addressList: [
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
        {
          number: '610587461481',
          address: '청파동 1가 62-20 102호',
        },
      ],
   };
  },
  methods: {
   handleClick(tab, event) {
    console.log(tab, event);
   },
  switchPop: function () {
    this.isPopOn = !this.isPopOn;
  },
  }
}
</script>