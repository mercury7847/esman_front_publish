<template>
  <div
    v-loading="loading"
    class="l-container"
    element-loading-spinner="el-icon-loading"
  >
    <gnb />
    <div
      class="l-contents delivery-start"
      :class="{ 'footer-active': isFooterActive }"
    >
      <div class="l-tab pt-20">
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick"
        >
          <el-tab-pane name="1">
            <div slot="label">
              <span class="time">ALL</span><span class="number">10개</span>
            </div>
            <div class="l-scroll">
              <el-form class="l-form">
                <el-form-item class="mb-20">
                  <div class="l-radio">
                    <el-radio-group
                      v-model="radio"
                      class="border"
                    >
                      <el-radio
                        label="1"
                        border
                      >
                        배송
                      </el-radio>
                      <el-radio
                        label="2"
                        border
                      >
                        집하
                      </el-radio>
                    </el-radio-group>
                  </div>
                </el-form-item>
              </el-form>
              <div class="l-section-header mb-20">
                <div class="left">
                  <el-form class="l-form">
                    <el-form-item class="checkbox">
                      <div class="l-checkbox">
                        <el-checkbox v-model="checkAll">
                          <div class="l-total">
                            <span class="num">0</span><span class="total">/5</span>
                          </div>
                        </el-checkbox>
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="right">
                  <button
                    class="btn btn-size-small white"
                    :disabled="!isChecked"
                  >
                    삭제
                  </button>
                  <button class="btn btn-sorting" />
                  <button class="btn btn-scan" />
                  <button class="btn btn-refresh" />
                  <button class="btn btn-search" />
                </div>
              </div>
              <div class="l-tag mb-20">
                <el-tag
                  v-for="tag in dynamicTags"
                  :key="tag"
                  closable
                  :disable-transitions="false"
                  effect="dark"
                  @close="handleClose(tag)"
                >
                  {{ tag }}
                </el-tag>
              </div>
              <div class="l-delivery-list scroll-y">
                <ul class="card-list is-select">
                  <li
                    v-for="item in cardData"
                    :key="item.index"
                    :class="{ 'is-active': item.isSelected }"
                  >
                    <div
                      class="card"
                      @click="popDetail = true"
                    >
                      <div class="card-header">
                        <span
                          class="badge"
                          :class="[item.scan ? 'purple' : 'grey']"
                        >스캔</span>
                        <span class="delivery-number">{{ item.number }}</span>
                      </div>
                      <div class="card-content">
                        <span class="delivery-time">{{ item.time }}</span>
                        <span class="delivery-area">{{ item.area }}</span>
                        <span class="delivery-address">{{ item.address }}</span>
                      </div>
                    </div>
                    <el-popover
                      placement="bottom"
                      width="68"
                      trigger="click"
                      :visible-arrow="false"
                      popper-class="l-popover"
                      @show="item.popoverActive = true"
                      @hide="item.popoverActive = false"
                    >
                      <ul class="contex-menu">
                        <li>
                          <router-link
                            to=""
                            class="menu"
                          >
                            이관
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to=""
                            class="menu"
                          >
                            상태변경
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to=""
                            class="menu"
                          >
                            스캔취소
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to=""
                            class="menu"
                          >
                            문자
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to=""
                            class="menu"
                          >
                            통화
                          </router-link>
                        </li>
                      </ul>
                      <button
                        slot="reference"
                        class="btn btn-more-vertical"
                        :class="{ 'is-active': item.popoverActive }"
                      />
                    </el-popover>
                    <el-form class="l-form">
                      <el-form-item>
                        <div class="l-checkbox">
                          <el-checkbox
                            v-model="item.checked"
                            @change="cardActive(item)"
                          />
                        </div>
                      </el-form-item>
                    </el-form>
                  </li>
                </ul>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane name="2">
            <div slot="label">
              <span class="time">9시 ~ 10시</span><span class="number">2개</span>
            </div>
          </el-tab-pane>
          <el-tab-pane name="3">
            <div slot="label">
              <span class="time">10시 ~ 11시</span><span class="number">2개</span>
            </div>
          </el-tab-pane>
          <el-tab-pane name="4">
            <div slot="label">
              <span class="time">11시 ~ 12시</span><span class="number">2개</span>
            </div>
          </el-tab-pane>
          <el-tab-pane name="5">
            <div slot="label">
              <span class="time">12시 ~ 13시</span><span class="number">2개</span>
            </div>
          </el-tab-pane>
          <el-tab-pane name="6">
            <div slot="label">
              <span class="time">13시 ~ 14시</span><span class="number">2개</span>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <foot-menu />
  </div>
</template>

<script>
import { Gnb, FootMenu } from '@/components/layout';

export default {
  name: 'DeliveryStart',
  components: { Gnb, FootMenu },
  data() {
    return {
      loading: false, //로딩
      isFooterActive: true, //하단 메뉴
      activeName: '1',
      radio: '1',
      isChecked: false,
      checkAll: false,
      check01: true,
      check02: false,
      popDetail: false,
      dynamicTags: ['A01', '간장게장 5kg', '청파동', '김한진', '검색 조건 01', '검색 조건 02'],
      cardData: [
        {
          scan: true,
          number: '9117159',
          time: '미정',
          area: 'A01',
          address: '청파동 1가 62-20 102호 청파동 1가 62-20 102호 청파동 1가 62-20 102호',
          isSelected: false,
          popoverActive: false,
        },
        {
          scan: false,
          number: '9117159',
          time: '미정',
          area: 'A01',
          address: '청파동 1가 62-20 102호',
          isSelected: false,
          popoverActive: false,
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    cardActive(item) {
      item.isSelected = !item.isSelected;
    },
  },
};
</script>
