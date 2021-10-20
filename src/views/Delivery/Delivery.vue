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
            <button class="btn small-size white" @click="centerDialogVisible = true">송장번호</button>
            <button class="btn"><i class="icon-refresh"></i></button>
            <button class="btn" @click="switchSearch" :class="isSearch ? 'is-on': 'is-default'"><i class="icon-search small"></i></button>
          </div>
        </div>
        <div class="l-inp l-search" v-show="isSearch">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="화물을 검색하세요." id="inp" autofocus>
            </div>
            <button class="btn btn-search" @click="switchSearch"><i class="icon-search small"></i></button>
          </div>
        </div>
        <!-- 스캔 후 -->
        <ul class="l-scroll-list" v-show="!isScanBefore">
          <li v-for="item in deliveryList01" :key="item">
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
                        <!-- <span class="badge purple">스캔</span> -->
                        <span class="badge green">배송</span>
                        <span class="txt-sub ft-size-xsmall">{{ item.number }}</span>
                      </div>
                      <p class="delivery-address-desc">{{ item.address }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="l-collapse">
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item>
                    <div class="d-flex-be-center">
                      <button class="btn-close-pop">접기</button>
                      <button class="btn btn-circle blue">출발확정</button>
                      <button class="btn btn-circle">삭제</button>
                      <button class="btn btn-circle">스캔취소</button>
                      <button class="btn btn-circle" @click="detailDialogVisible = true">상세</button>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </li>
        </ul>
        <!-- 스캔 전 -->
        <div class="l-scan-before" v-show="isScanBefore">
          <p class="ft-size-xsmall txt-sub">
            배송 대상 화물이 등록되지 않았습니다.<br>
            송장의 바코드를 스캔해서 등록해주세요.
          </p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="집하">
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
            <button class="btn small-size white" @click="centerDialogVisible = true">송장번호</button>
            <button class="btn"><i class="icon-refresh"></i></button>
            <button class="btn" @click="switchSearch" :class="isSearch ? 'is-on': 'is-default'"><i class="icon-search small"></i></button>
          </div>
        </div>
        <div class="l-inp l-search" v-show="isSearch">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="화물을 검색하세요." id="inp" autofocus>
            </div>
            <button class="btn btn-search" @click="switchSearch"><i class="icon-search small"></i></button>
          </div>
        </div>
        <!-- 스캔 후 -->
        <ul class="l-scroll-list" v-show="!isScanBefore">
          <li v-for="item in deliveryList02" :key="item">
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
                        <!-- <span class="badge purple">스캔</span> -->
                        <span class="badge yellow">집하</span>
                        <span class="txt-sub ft-size-xsmall">{{ item.number }}</span>
                      </div>
                      <p class="delivery-address-desc">{{ item.address }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="l-collapse">
                <el-collapse accordion>
                  <el-collapse-item name="">
                    <div class="d-flex-be-center">
                      <button class="btn-close-pop">접기</button>
                      <button class="btn btn-circle blue">출발확정</button>
                      <button class="btn btn-circle">삭제</button>
                      <button class="btn btn-circle">스캔취소</button>
                      <button class="btn btn-circle" @click="detailDialogVisible = true">상세</button>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </li>
        </ul>
        <!-- 스캔 전 -->
        <div class="l-scan-before" v-show="isScanBefore">
          <p class="ft-size-xsmall txt-sub">
            배송 대상 화물이 등록되지 않았습니다.<br>
            송장의 바코드를 스캔해서 등록해주세요.
          </p>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
  </div>

  <div class="l-delivery-pop card">
    <ul class="txt">
      <li><span class="title">배송</span><span class="num ft-color-green">4</span></li>
      <li><span class="title">집하</span><span class="num ft-color-yellow">4</span></li>
      <li><span class="title">스캔</span><span class="num ft-color-purple">4</span></li>
    </ul>
    <button class="btn full-size reg-size primary badge-circle">출발 확정 대상</button>
  </div>

  <!-- 송장번호입력 -->
  <el-dialog
    title="운송장 번호"
    :visible.sync="centerDialogVisible"
    width="100%"
    center>
    <div class="l-inp l-search">
      <div class="inp">
        <div class="inp-inner">
          <input type="text" class="input-text-line" placeholder="송장번호를 입력하세요." id="inp" autofocus>
        </div>
        <button class="btn btn-search"><i class="icon-search"></i></button>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">닫기</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">입력</el-button>
    </span>
  </el-dialog>

  <!-- 화물 상세정보 -->
  <el-dialog
    title="화물 상세정보"
    :visible.sync="detailDialogVisible"
    class = "el-dialog-full"
    width="100%">
    <div class="content">
      <p class="ft-size-large ft-weight-bold">운송료</p>
      <p class="ft-size-xxlarge">13,000</p>
      <div class="l-badge d-flex-be-center">
        <div>
          <span class="badge purple">스캔</span>
          <span class="badge green">배송</span>
          <span class="txt-sub ft-size-xsmall">610587461481</span>
        </div>
        <button class="btn"><i class="icon-more-vertical"></i></button>
      </div>
      <div class="l-list-line">
        <ul>
          <li>
            <div class="d-flex-be-start">
              <p class="title">도로명 주소</p>
              <p class="desc">경기도 고양시 덕양구<br>덕수천 2로 118</p>
            </div>
            <div class="d-flex-be-start">
              <p class="title">지번 주소</p>
              <p class="desc">경기도 고양시 덕양구<br>동산동 368-3 창릉초등학교</p>
            </div>
          </li>
          <li>
            <div class="d-flex-be-start">
              <p class="title">화물 이동내역</p>
              <p class="desc">간선상차 완료</p>
            </div>
            <div class="d-flex-be-start">
              <p class="title">상품명</p>
              <p class="desc">간장게장</p>
            </div>
          </li>
          <li>
            <div class="d-flex-be-start">
              <p class="title">송하인</p>
              <p class="desc">김송하</p>
            </div>
            <div class="d-flex-be-start">
              <p class="title">수하인</p>
              <p class="desc">이수령</p>
            </div>
          </li>
          <li>
            <div class="d-flex-be-start">
              <p class="title">고객요청사항</p>
              <p class="desc">문앞에 놓아주세요. (예정 시간 7시)</p>
            </div>
            <div class="d-flex-be-start">
              <p class="title">메모</p>
              <p class="desc">진상 고객임</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </el-dialog>
  <Foot-menu />
</div>
</template>

<script>
import Gnb from '../../components/layout/Gnb'
import FootMenu from '../../components/layout/FootMenu'
export default {
  components: { Gnb, FootMenu },
  name:'Delivery',
  data() {
    return {
      activeNames: '',
      isScanBefore: false,
      centerDialogVisible: false,
      detailDialogVisible: false,
      isSearch: false,
      deliveryList01: [
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
      deliveryList02: [
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
    handleChange(val) {
      // console.log(val);
    },
    switchSearch: function () {
      this.isSearch = !this.isSearch;
    },
  }
}
</script>