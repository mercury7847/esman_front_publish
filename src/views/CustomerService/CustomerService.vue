<template>
  <div class="l-container focus-out">
    <Gnb />
    <div class="customer-service l-scroll-tab">
      <el-tabs @tab-click="handleClick">
        <el-tab-pane label="고객의 말씀">
          <div slot="label">고객의 말씀<span class="badge-circle-blue ml-8">3</span></div>
          <div class="l-scroll l-cs-msg ">
            <div class="l-inner l-fixed">
              <div class="d-flex-be-center">
                <div class="txt-sub ft-weight-bold">
                  <p>총 <span class="txt-primary">12</span>건</p>
                </div>
                <div class="btn-group">
                  <button class="btn" @click="switchSearch" :class="{ 'is-on': isSearch }"><i class="icon-search small"></i></button>
                </div>
              </div>
              <div class="l-inp l-search mb-0" v-show="isSearch">
                <div class="inp">
                  <div class="inp-inner">
                    <input type="text" class="input-text-line" placeholder="송장번호와 수하인명, 주소 등을 검색하세요." id="inp" autofocus />
                  </div>
                  <button class="btn btn-search small" @click="switchSearch"></button>
                </div>
              </div>
            </div>
            <div class="l-list scroll-y">
              <ul>
                <li @click="csDialog = true">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="csDialog = true">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="csDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="csDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="csDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="csDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="csDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="csDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="클레임">
          <div slot="label">클레임<span class="badge-circle-blue ml-8">2</span></div>
          <div class="l-scroll l-cs-msg ">
            <div class="l-inner l-fixed">
              <div class="d-flex-be-center">
                <div class="txt-sub ft-weight-bold">
                  <p>총 <span class="txt-primary">12</span>건</p>
                </div>
                <div class="btn-group">
                  <button class="btn" @click="switchSearch" :class="{ 'is-on': isSearch }"><i class="icon-search small"></i></button>
                </div>
              </div>
              <div class="l-inp l-search mb-0" v-show="isSearch">
                <div class="inp">
                  <div class="inp-inner">
                    <input type="text" class="input-text-line" placeholder="송장번호와 수하인명, 주소 등을 검색하세요." id="inp" autofocus />
                  </div>
                  <button class="btn btn-search small" @click="switchSearch"></button>
                </div>
              </div>
            </div>
            <div class="l-list scroll-y">
              <ul>
                <li @click="claimDialog = true">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="claimDialog = true">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="claimDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="claimDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="claimDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="claimDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="claimDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
                <li @click="claimDialog = true" class="is-read">
                  <p class="cs-msg-icon"><i class="icon-envelope"></i></p>
                  <div class="cs-msg">
                    <p class="cs-msg-title">
                      <span class="cs-msg-number">+82 10-1234-1234</span>
                      <span class="cs-msg-name">이범주</span>
                      <span class="txt-primary ml-10">답변완료</span>
                    </p>
                    <p class="cs-msg-address">아이파크 114동 204호</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 고객의말씀 대응 -->
    <div class="l-dialog l-dialog-cs">
      <el-dialog title="" :visible.sync="csDialog" class="el-dialog-full bg-white" width="100%">
        <div slot="title" class="el-dialog__title">
          <span>821012341234<span class="ft-weight-regular ml-10">이범주</span></span>
        </div>
        <p class="cs-title">고객의 말씀</p>
        <div class="cs-desc">
          배송 시작한 지 3일이 넘었는데 아직 물건이 도착하지 않고 있어요. 처리좀 부탁합니다.
        </div>
        <p class="cs-title mt-30">고객 응대 내역</p>
        <div class="cs-desc">
          <div class="l-textarea">
            <textarea placeholder="내용을 입력하세요." maxlength="150"></textarea>
            <div class="input__count"><span class="txt-primary">0</span>/150</div>
          </div>
        </div>
        <div class="btn-group bottom"><button class="btn btn-size-full primary" @click="csDialog = false">등록하기</button></div>
      </el-dialog>
    </div>

    <!-- 클레임 -->
    <div class="l-dialog l-dialog-cs">
      <el-dialog title="" :visible.sync="claimDialog" class="el-dialog-full bg-white" width="100%">
        <div slot="title" class="el-dialog__title">
          <span>821012341234<span class="ft-weight-regular ml-10">이범주</span></span>
        </div>
        <p class="cs-title">클레임</p>
        <div class="cs-desc">
          배송 시작한 지 3일이 넘었는데 아직 물건이 도착하지 않고 있어요. 처리좀 부탁합니다.
        </div>
        <p class="cs-title mt-30">고객 응대 내역</p>
        <div class="cs-desc">
          <div class="l-textarea">
            <textarea placeholder="내용을 입력하세요." maxlength="150"></textarea>
            <div class="input__count"><span class="txt-primary">0</span>/150</div>
          </div>
        </div>
        <div class="btn-group bottom"><button class="btn btn-size-full primary" @click="claimDialog = false">등록하기</button></div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Gnb from "../../components/layout/Gnb";
import FootMenu from "../../components/layout/FootMenu";
export default {
  components: { Gnb },
  name: "CustomerService",
  data() {
    return {
      isSearch: false,
      csDialog: false,
      claimDialog: false,
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
  },
};
</script>
