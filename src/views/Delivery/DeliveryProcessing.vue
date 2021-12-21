<template>
  <!-- service-menu focusout일 경우 'focus-out'추가-->
  <div class="l-container focus-out">
    <gnb />
    <div class="delivery-processing">
      <div class="l-inner l-scroll">
        <div class="l-total">
          <div class="d-flex-align-center">
            <div class="input-checkbox">
              <input type="checkbox" id="chk-all" />
              <label for="chk-all"></label>
            </div>
            <div class="d-inline-block txt-sub">
              <p><span class="txt-primary">1</span>/12</p>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn small-size secondary">삭제</button>
            <button class="btn small-size white" @click="popVisible">송장번호</button>
            <button class="btn"><i class="icon-refresh"></i></button>
            <button class="btn" @click="switchSearch" :class="isSearch ? 'is-on' : 'is-default'"><i class="icon-search small"></i></button>
          </div>
        </div>

        <div class="l-inp l-search" v-show="isSearch">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="화물을 검색하세요." id="inp-01" autofocus />
            </div>
            <button class="btn btn-search small" @click="switchSearch"></button>
          </div>
        </div>

        <!-- 1102 select 추가 -->
        <div class="l-select bg mb-16" v-show="!deliveryNone">
          <div class="select">
            <el-select v-model="value" value-key="value" placeholder="select" :popper-append-to-body="false">
              <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item"> </el-option>
            </el-select>
          </div>
          <div class="select mr-0">
            <el-select v-model="value" value-key="value" placeholder="select" :popper-append-to-body="false">
              <el-option v-for="item in selectOptions2" :key="item.value" :label="item.label" :value="item"> </el-option>
            </el-select>
          </div>
        </div>
        <!-- //1102 select 추가 -->

        <div class="delivery-list scroll-y" v-show="!deliveryNone">
          <ul class="card-list is-drag">
            <li>
              <div class="input-checkbox">
                <input type="checkbox" id="chk-01" />
                <label for="chk-01"></label>
              </div>
              <div class="delivery-txt" @click="detailDialogVisible = true">
                <p class="delivery-title">
                  <span class="badge orange ft-weight-normal"><span>$ 착불</span></span>
                  <span class="badge green ft-weight-normal">배송</span>
                  <span class="txt-sub ft-size-xsmall ft-weight-regular">610587461481</span>
                </p>
                <p class="delivery-desc">
                  <span class="ft-weight-bold">~11시</span><span class="badge-circle-secondary">A</span>
                  <span class="ft-weight-regular"> 청파동 1가 62-20 102호</span>
                </p>
              </div>
              <div class="delivery-btn">
                <button class="btn-drag"></button>
              </div>
            </li>
          </ul>
          <ul class="card-list">
            <li>
              <div class="input-checkbox">
                <input type="checkbox" id="chk-02" />
                <label for="chk-02"></label>
              </div>
              <div class="delivery-txt" @click="detailDialogVisible = true">
                <p class="delivery-title">
                  <span class="badge blue">$ 선불</span>
                  <span class="badge green">배송</span>
                  <span class="txt-sub ft-size-xsmall">610587461481</span>
                </p>
                <p class="delivery-desc">
                  <span class="ft-weight-bold">~11시</span><span class="badge-circle-secondary">A</span>
                  <span class="ft-weight-regular"> 청파동 1가 62-20 102호</span>
                </p>
              </div>
              <div class="delivery-btn">
                <button class="btn-drag"></button>
              </div>
            </li>
          </ul>
          <ul class="card-list card-list-group" :class="isVisible ? 'is-on' : 'is-default'">
            <li>
              <div class="input-checkbox">
                <input type="checkbox" id="chk-03" />
                <label for="chk-03"></label>
              </div>
              <div class="delivery-txt" @click="visibleLayer">
                <p class="delivery-title">
                  <span class="txt-sub d-inline-flex mr-10 ft-weight-bold">총<span class="txt-primary">3</span>개</span>
                  <span class="badge green">배송</span><span class="mr-10 ft-weight-bold">2</span> <span class="badge yellow">집하</span><span class="mr-10 ft-weight-bold">1</span>
                </p>
                <p class="delivery-desc">
                  <span class="ft-weight-bold">~11시</span><span class="badge-circle-secondary">C</span>
                  <span class="ft-weight-regular"> 청파동 1가 62-20 102호</span>
                </p>
              </div>
              <div class="delivery-btn">
                <button class="btn-drag" v-show="!isVisible"></button>
                <button class="btn txt-sub ft-size-xsmall btn-txt" v-show="isVisible">접기</button>
              </div>
            </li>
            <li class="l-card-layer" v-show="isVisible">
              <ul>
                <li>
                  <div class="input-checkbox">
                    <input type="checkbox" id="chk-01" />
                    <label for="chk-01"></label>
                  </div>
                  <div class="delivery-txt" @click="detailDialogVisible = true">
                    <p class="delivery-title">
                      <span class="badge blue ft-weight-normal">$ 선불</span>
                      <span class="badge green ft-weight-normal">배송</span>
                      <span class="txt-sub ft-size-xsmall">610587461481</span>
                    </p>
                    <p class="delivery-desc">
                      <span class="ft-weight-bold">~11시</span><span class="badge-circle-secondary">A</span>
                      <span class="ft-weight-regular"> 청파동 1가 62-20 102호</span>
                    </p>
                  </div>
                  <div class="delivery-btn">
                    <button class="btn-drag"></button>
                  </div>
                </li>
                <li>
                  <div class="input-checkbox">
                    <input type="checkbox" id="chk-01" />
                    <label for="chk-01"></label>
                  </div>
                  <div class="delivery-txt" @click="detailDialogVisible = true">
                    <p class="delivery-title">
                      <span class="badge orange ft-weight-normal">$ 착불</span>
                      <span class="badge green ft-weight-normal">배송</span>
                      <span class="txt-sub ft-size-xsmall">610587461481</span>
                    </p>
                    <p class="delivery-desc">
                      <span class="ft-weight-bold">~11시</span><span class="badge-circle-secondary">A</span>
                      <span class="ft-weight-regular"> 청파동 1가 62-20 102호</span>
                    </p>
                  </div>
                  <div class="delivery-btn">
                    <button class="btn-drag"></button>
                  </div>
                </li>
                <li>
                  <div class="input-checkbox">
                    <input type="checkbox" id="chk-01" />
                    <label for="chk-01"></label>
                  </div>
                  <div class="delivery-txt" @click="detailDialogVisible = true">
                    <p class="delivery-title">
                      <span class="badge orange ft-weight-normal">$ 착불</span>
                      <span class="badge yellow ft-weight-normal">집하</span>
                      <span class="txt-sub ft-size-xsmall">610587461481</span>
                    </p>
                    <p class="delivery-desc">
                      <span class="ft-weight-bold">~11시</span><span class="badge-circle-secondary">A</span>
                      <span class="ft-weight-regular"> 청파동 1가 62-20 102호</span>
                    </p>
                  </div>
                  <div class="delivery-btn">
                    <button class="btn-drag"></button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- 화물없는경우 -->
        <div class="l-delivery-none" v-show="deliveryNone">
          <p class="ft-size-small">
            처리할 화물이 없습니다.
          </p>
        </div>
      </div>
    </div>
    <div class="l-delivery-bottom processing" v-show="!deliveryNone">
      <button class="btn full-size reg-size white">대상 이관</button>
      <div class="btn-group-wrap">
        <div class="btn-group">
          <button class="btn full-size reg-size">집하</button>
          <button class="btn full-size reg-size">대량집하</button>
        </div>
        <div class="btn-group">
          <button class="btn full-size reg-size">배송</button>
          <button class="btn full-size reg-size">미배송</button>
        </div>
      </div>
    </div>

    <!-- 화물 상세정보 -->
    <!-- 집하인 경우 isPickup -->
    <div class="l-dialog l-delivery-detail" :class="{ pickup: isPickup }">
      <el-dialog title="화물 상세정보" :visible.sync="detailDialogVisible" class="el-dialog-full" width="100%">
        <div slot="title" class="el-dialog__title">화물 상세정보 <button class="btn btn-setting"></button></div>
        <div class="content">
          <p class="ft-size-large ft-weight-bold">운송료</p>
          <p class="ft-size-xxlarge">13,000</p>
          <div class="card">
            <div class="card-inner">
              <div class="d-flex-be-center">
                <div>
                  <span class="badge blue" v-show="!isPickup">$ 선불</span>
                  <span class="badge green" v-show="!isPickup">배송</span>
                  <span class="badge orange" v-show="isPickup">$ 착불</span>
                  <span class="badge yellow" v-show="isPickup">집하</span>
                </div>
                <span class="ft-size-xsmall">610587461481</span>
              </div>
              <div class="desc">
                <span>배송중 &middot; 배송지 근처 <span class="ft-weight-bold">10m</span></span>
              </div>
            </div>
            <div class="btn-group">
              <button class="btn ft-size-xsmall">배송</button>
              <button class="btn ft-size-xsmall">미배송</button>
              <button class="btn ft-size-xsmall">대상 이관</button>
              <button class="btn ft-size-xsmall">삭제</button>
            </div>
          </div>
          <div class="l-list-line">
            <ul>
              <li>
                <div class="d-flex-be-start">
                  <p class="title">도로명 주소</p>
                  <p class="desc">경기도 고양시 덕양구<br />덕수천 2로 118</p>
                </div>
                <div class="d-flex-be-start">
                  <p class="title">지번 주소</p>
                  <p class="desc">경기도 고양시 덕양구<br />동산동 368-3 창릉초등학교</p>
                </div>
              </li>
              <li>
                <div class="d-flex-be-start">
                  <p class="title">송장번호</p>
                  <p class="desc">610587461481</p>
                </div>
                <div class="d-flex-be-start">
                  <p class="title">화물 유형</p>
                  <p class="desc">
                    <span class="badge green mr-0" v-show="!isPickup">배송</span>
                    <span class="badge yellow mr-0" v-show="isPickup">집하</span>
                  </p>
                </div>
                <div class="d-flex-be-start">
                  <p class="title">화물 이동내역</p>
                  <p class="desc">배송중</p>
                </div>
                <div class="d-flex-be-start">
                  <p class="title">현재 위치</p>
                  <p class="desc">배송지 근처 <span class="ft-weight-bold">0m</span></p>
                </div>
              </li>
              <li>
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
                <div class="d-flex-be-start">
                  <p class="title">운송료</p>
                  <p class="desc">
                    <span class="badge blue" v-show="!isPickup">$ 선불</span>
                    <span class="badge orange" v-show="isPickup">$ 착불</span>
                    <span class="ft-color-black ft-weight-bold">13,000</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-dialog>
    </div>
    <foot-menu />

    <!-- 송장번호입력 -->
    <pop-waybill v-if="popOn" @click="popVisible" />

    <!-- 배송 완료 -->
    <div class="l-drawer l-scroll l-delivery-complete">
      <el-drawer :visible.sync="drawerDeliveryComplete" direction="btt" size="92%" :with-header="false">
        <div class="drawer-title">
          <span>배송 완료</span>
        </div>
        <div class="l-inner">
          <div class="box">
            <div>
              <span class="badge blue">$ 선불</span>
              <span class="badge green">배송</span>
            </div>
            <p>610587461481 외 <span class="txt-primary">3</span>건</p>
          </div>
          <p class="ft-weight-bold">배송 처리 유형 (사유)</p>
        </div>
        <div class="scroll-y l-radio l-list">
          <el-radio-group v-model="radio" class="">
            <el-radio :label="1">고객 본인</el-radio>
            <el-radio :label="2">
              <div class="d-iflex-be-center">
                <p>위탁</p>
                <div class="l-photo">
                  <button class="btn small-size white" v-show="!photo">사진</button>
                  <div v-show="photo">
                    <img src="@/assets/images/img-test.png" alt="배송완료 이미지" />
                    <button class="btn small-size white">변경</button>
                  </div>
                </div>
              </div>
            </el-radio>
            <el-radio :label="3">문 앞</el-radio>
            <el-radio :label="4">편의점</el-radio>
            <el-radio :label="5">가족</el-radio>
          </el-radio-group>
        </div>
        <div class="l-btn-bottom">
          <button class="btn full-size primary">확인</button>
        </div>
      </el-drawer>
    </div>
    <DeliveryComplete />
  </div>
</template>

<script>
import Gnb from "../../components/layout/Gnb";
import FootMenu from "../../components/layout/FootMenu";
import PopWaybill from "../Modal/PopWaybill";
import DeliveryComplete from "../Modal/DeliveryComplete";
export default {
  components: { Gnb, FootMenu, PopWaybill, DeliveryComplete },
  name: "Delivery",
  data() {
    return {
      activeNames: "",
      deliveryNone: false,
      detailDialogVisible: false,
      isSearch: false,
      isPickup: false,
      isVisible: false,
      popOn: false,
      value: "",
      selectOptions: [
        {
          value: "1",
          label: "전체",
        },
        {
          value: "2",
          label: "선불",
        },
        {
          value: "3",
          label: "착불",
        },
      ],
      selectOptions2: [
        {
          value: "1",
          label: "전체",
        },
        {
          value: "2",
          label: "배송",
        },
        {
          value: "3",
          label: "집하",
        },
      ],
      drawerDeliveryComplete: true,
      radio: "",
      photo: false,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(val) {
      console.log(val);
    },
    switchSearch: function() {
      this.isSearch = !this.isSearch;
    },
    visibleLayer: function() {
      this.isVisible = !this.isVisible;
    },
    popVisible: function() {
      this.popOn = !this.popOn;
    },
  },
  created() {
    this.value = this.selectOptions[0];
  },
};
</script>
