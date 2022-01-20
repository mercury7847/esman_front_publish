<template>
  <div class="l-container" v-loading="loading" element-loading-spinner="el-icon-loading">
    <gnb />
    <div class="l-contents delivery-start" :class="{ 'footer-active': !isCardSelected }">
      <div class="l-tab pt-20">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="1">
            <div slot="label"><span class="time">ALL</span><span class="number">10개</span></div>
            <div class="l-scroll">
              <el-form class="l-form">
                <el-form-item class="mb-20">
                  <div class="l-radio">
                    <el-radio-group v-model="radio" class="border">
                      <el-radio label="1" border>배송</el-radio>
                      <el-radio label="2" border>집하</el-radio>
                    </el-radio-group>
                  </div>
                </el-form-item>
              </el-form>
              <div class="l-section-header mb-15">
                <div class="left">
                  <el-form class="l-form">
                    <el-form-item class="checkbox">
                      <div class="l-checkbox">
                        <el-checkbox v-model="allSelected" @change="cardSelect()">
                          <div class="l-total"><span class="num">0</span><span class="total">/5</span></div>
                        </el-checkbox>
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="right">
                  <button class="btn btn-size-small white" :disabled="!isCardSelected">삭제</button>
                  <button class="btn btn-sorting" @click="isPopSortingActive = true"></button>
                  <button class="btn btn-scan" @click="isPopWaybillActive = true"></button>
                  <button class="btn btn-refresh"></button>
                  <button class="btn btn-search" @click="isPopSearchCargoActive = true"></button>
                </div>
              </div>
              <div class="l-tag mb-20">
                <el-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" effect="dark" @close="handleClose(tag)">
                  {{ tag }}
                </el-tag>
              </div>
              <div class="l-delivery-list scroll-y">
                <ul class="card-list is-select">
                  <li v-for="item in cardData" :key="item.index" :class="{ 'is-active': item.isSelected }">
                    <div class="card" @click="popDetail = true">
                      <div class="card-header">
                        <span class="badge" :class="[item.scan ? 'purple' : 'grey']">스캔</span>
                        <span class="delivery-number">{{ item.number }}</span>
                      </div>
                      <div class="card-content">
                        <span class="delivery-time">{{ item.time }}</span>
                        <span class="delivery-area">{{ item.area }}</span>
                        <span class="delivery-address">{{ item.address }}</span>
                      </div>
                    </div>
                    <el-popover placement="bottom" width="68" trigger="click" :visible-arrow="false" popper-class="l-popover" @show="item.popoverActive = true" @hide="item.popoverActive = false">
                      <ul class="contex-menu">
                        <li><router-link to="" class="menu">이관</router-link></li>
                        <li><router-link to="" class="menu">상태변경</router-link></li>
                        <li><router-link to="" class="menu">스캔취소</router-link></li>
                        <li><router-link to="" class="menu">문자</router-link></li>
                        <li><router-link to="" class="menu">통화</router-link></li>
                      </ul>
                      <button slot="reference" class="btn btn-more-vertical" :class="{ 'is-active': item.popoverActive }"></button>
                    </el-popover>
                    <el-form class="l-form">
                      <el-form-item>
                        <div class="l-checkbox">
                          <el-checkbox v-model="item.isSelected" @change="cardSelect()"></el-checkbox>
                        </div>
                      </el-form-item>
                    </el-form>
                  </li>
                </ul>
              </div>
              <div class="l-bottom">
                <div class="btn-group-02 mb-10" v-show="isCardSelected">
                  <button class="btn btn-size-full btn-size-large" @click="isPopDeliveryTimeActive = true">배송 시간 설정</button>
                  <button class="btn btn-size-full btn-size-large" @click="isPopTransferRequestActive = true">이관</button>
                </div>
                <div class="l-section-header mb-10">
                  <div class="left ft-weight-bold"><span>전체</span>&nbsp;<span class="ft-color-primary">10</span></div>
                  <div class="right">
                    <span>배송</span>&nbsp;<b class="ft-color-primary">10</b> <span class="ml-10">집하</span>&nbsp;<b class="ft-color-primary">10</b> <span class="ml-10">스캔</span>&nbsp;<b
                      class="ft-color-primary"
                      >10</b
                    >
                  </div>
                </div>
                <div class="btn-group">
                  <div class="l-radio">
                    <el-radio-group v-model="radioButton">
                      <el-radio-button label="수동"></el-radio-button>
                      <el-radio-button label="자동"></el-radio-button>
                    </el-radio-group>
                  </div>
                  <button class="btn btn-size-full btn-size-large primary" :disabled="!isScanActive">
                    출발 확정 대상
                    <span class="badge-circle white ml-5" v-show="isScanActive">2</span>
                  </button>
                  <button class="btn btn-list"><i class="icon-list"></i></button>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane name="2">
            <div slot="label"><span class="time">9시 ~ 10시</span><span class="number">2개</span></div>
          </el-tab-pane>
          <el-tab-pane name="3">
            <div slot="label"><span class="time">10시 ~ 11시</span><span class="number">2개</span></div>
          </el-tab-pane>
          <el-tab-pane name="4">
            <div slot="label"><span class="time">11시 ~ 12시</span><span class="number">2개</span></div>
          </el-tab-pane>
          <el-tab-pane name="5">
            <div slot="label"><span class="time">12시 ~ 13시</span><span class="number">2개</span></div>
          </el-tab-pane>
          <el-tab-pane name="6">
            <div slot="label"><span class="time">13시 ~ 14시</span><span class="number">2개</span></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!-- <foot-menu v-if="isFooterActive" /> -->
    <foot-menu v-if="!isCardSelected" />

    <!-- 운송장 번호 팝업 -->
    <pop-waybill v-if="isPopWaybillActive" @click="isPopWaybillActive = !isPopWaybillActive"></pop-waybill>
    <!-- 정렬방식선택 팝업 -->
    <pop-sorting v-if="isPopSortingActive" @click="isPopSortingActive = !isPopSortingActive"></pop-sorting>
    <!-- 화물 검색 팝업-->
    <pop-search-cargo v-if="isPopSearchCargoActive" @click="isPopSearchCargoActive = !isPopSearchCargoActive"></pop-search-cargo>
    <!-- 배송예정시간 변경 팝업 -->
    <pop-delivery-time v-if="isPopDeliveryTimeActive" @click="isPopDeliveryTimeActive = !isPopDeliveryTimeActive"></pop-delivery-time>
    <!-- 대상이관요청 팝업 -->
    <pop-transfer-request v-if="isPopTransferRequestActive" @click="isPopTransferRequestActive = !isPopTransferRequestActive"></pop-transfer-request>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import { Gnb, FootMenu } from "@/components/layout";
import PopWaybill from "@/views/Modal/PopWaybill";
import PopSorting from "@/views/Modal/PopSorting";
import PopSearchCargo from "@/views/DeliveryStart/PopSearchCargo";
import PopDeliveryTime from "@/views/DeliveryStart/PopDeliveryTime";
import PopTransferRequest from "@/views/DeliveryStart/PopTransferRequest";

export default {
  components: { Gnb, FootMenu, PopWaybill, PopSorting, PopSearchCargo, PopDeliveryTime, PopTransferRequest },
  name: "DeliveryStart",
  data() {
    return {
      loading: false, //로딩
      isFooterActive: true, //하단 메뉴
      isPopWaybillActive: false,
      isPopSortingActive: false,
      isPopSearchCargoActive: false,
      isPopDeliveryTimeActive: false,
      isPopTransferRequestActive: false,
      isCardSelected: false, // 선택한 카드가 있는 경우
      isScanActive: true, //스캔 완료한 화물이 있는 경우
      activeName: "1",
      radio: "1",
      popDetail: false,
      dynamicTags: ["A01", "간장게장 5kg", "청파동", "김한진", "검색 조건 01", "검색 조건 02"],
      cardData: [
        {
          scan: true,
          number: "9117159",
          time: "미정",
          area: "A01",
          address: "청파동 1가 62-20 102호 청파동 1가 62-20 102호 청파동 1가 62-20 102호",
          isSelected: false,
          popoverActive: false,
        },
        {
          scan: false,
          number: "9117159",
          time: "미정",
          area: "A01",
          address: "청파동 1가 62-20 102호",
          isSelected: false,
          popoverActive: false,
        },
        {
          scan: false,
          number: "9117159",
          time: "미정",
          area: "A01",
          address: "청파동 1가 62-20 102호",
          isSelected: false,
          popoverActive: false,
        },
        {
          scan: false,
          number: "9117159",
          time: "미정",
          area: "A01",
          address: "청파동 1가 62-20 102호",
          isSelected: false,
          popoverActive: false,
        },
      ],
      radioButton: "수동",
    };
  },
  computed: {
    allSelected: {
      set(isSelected) {
        this.cardData.forEach(function(item) {
          item.isSelected = isSelected;
        });
      },
      get() {
        return this.cardData.every(function(item) {
          return item.isSelected;
        });
      },
    },
  },

  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    cardSelect() {
      this.isCardSelected = this.cardData.find((item) => item.isSelected) !== undefined;
    },
  },
};
</script>
