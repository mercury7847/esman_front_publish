<template>
  <div class="l-container">
    <Gnb />
    <div class="message-record l-scroll">
      <el-tabs @tab-click="handleClick">
        <el-tab-pane label="문자(해피콜)">
          <div class="message l-scroll">
            <div class="l-inner l-fixed">
              <div class="d-flex-be-center">
                <div class="txt-sub">
                  <p v-show="!isSelect">총 <span class="txt-primary">4</span>건</p>
                  <div class="input-checkbox" v-show="isSelect">
                    <input type="checkbox" id="chk-all" />
                    <label for="chk-all"><span class="txt-primary">2</span> / <span class="txt-sub">4</span></label>
                  </div>
                </div>
                <div class="btn-group">
                  <button class="btn small-size white" v-show="!isSelect" @click="switchSelect">선택</button>
                  <button class="btn small-size primary" v-show="!isSelect" @click="drawerMessage = true">문자 보내기</button>
                  <button class="btn small-size primary" v-show="isSelect" @click="switchSelect">완료</button>
                  <button class="btn ml-20" v-show="isSelect"><i class="icon-trash"></i></button>
                </div>
              </div>
            </div>
            <div class="message-list scroll-y">
              <ul>
                <li v-for="item in messageList" :key="item.index" :class="{ 'is-select': isSelect }">
                  <div class="input-checkbox" v-show="isSelect">
                    <input type="checkbox" id="chk-01" />
                    <label for="chk-01"></label>
                  </div>
                  <div class="message-desc" @click="messageDialog = true">
                    <p class="message-number">{{ item.number }}</p>
                    <p class="message-msg">{{ item.msg }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="통화">
          <div class="call l-scroll">
            <div class="l-inner l-fixed">
              <div class="d-flex-be-center">
                <div class="txt-sub">
                  <p v-show="!isSelect">총 <span class="txt-primary">4</span>건</p>
                  <div class="input-checkbox" v-show="isSelect">
                    <input type="checkbox" id="chk-all" />
                    <label for="chk-all"><span class="txt-primary">2</span> / <span class="txt-sub">4</span></label>
                  </div>
                </div>
                <div class="btn-group">
                  <button class="btn small-size white" v-show="!isSelect2" @click="switchSelect2">선택</button>
                  <button class="btn small-size primary" v-show="isSelect2" @click="switchSelect2">완료</button>
                  <button class="btn ml-20" v-show="isSelect2"><i class="icon-trash"></i></button>
                </div>
              </div>
            </div>
            <div class="l-inner scroll-y">
              <ul>
                <li>
                  <div class="card type-02">
                    <div class="card-inner">
                      <div class="contents d-flex-be-center">
                        <div class="d-flex-align-center">
                          <div class="input-checkbox" v-show="isSelect2">
                            <input type="checkbox" id="chk-11" />
                            <label for="chk-11"></label>
                          </div>
                          <i class="icon-phone-outgoing medium" v-show="!isSelect2"></i>
                          <div class="l-call-list">
                            <p class="ft-weight-bold"><i class="icon-phone-outgoing medium mr-10" v-show="isSelect2"></i>+82 10-1234-1234</p>
                            <p class="txt-sub mt-5"><span>2021-10-13 13:30</span><span class="icon-dot"></span><span>10초</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="l-collapse">
                      <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item>
                          <div class="d-flex-be-center">
                            <button class="btn-close-pop">접기</button>
                            <button class="btn btn-circle blue">전화걸기</button>
                            <button class="btn btn-circle">전화걸기</button>
                            <button class="btn btn-circle">삭제</button>
                          </div>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card type-02">
                    <div class="card-inner">
                      <div class="contents d-flex-be-center">
                        <div class="d-flex-align-center">
                          <div class="input-checkbox" v-show="isSelect2">
                            <input type="checkbox" id="chk-11" />
                            <label for="chk-11"></label>
                          </div>
                          <i class="icon-phone-incoming medium" v-show="!isSelect2"></i>
                          <div class="l-call-list">
                            <p class="ft-weight-bold"><i class="icon-phone-incoming medium mr-10" v-show="isSelect2"></i>+82 10-1234-1234</p>
                            <p class="txt-sub mt-5"><span>2021-10-13 13:30</span><span class="icon-dot"></span><span>10초</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="l-collapse">
                      <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item>
                          <div class="d-flex-be-center">
                            <button class="btn-close-pop">접기</button>
                            <button class="btn btn-circle blue">전화걸기</button>
                            <button class="btn btn-circle">전화걸기</button>
                            <button class="btn btn-circle">삭제</button>
                          </div>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 신규 문자 보내기 -->
    <div class="l-drawer l-scroll l-drawer-msg-send">
      <el-drawer :visible.sync="drawerMessage" direction="btt" size="92%" :with-header="false">
        <div class="drawer-title d-flex-be-center">
          <span>문자 보내기</span>
        </div>
        <div class="l-inner l-inp">
          <label for="mob-number" class="txt-sub">받는사람</label>
          <div class="inp white">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="" id="mob-number" autofocus />
            </div>
          </div>
          <button class="btn btn-plus"></button>
        </div>
        <div></div>
        <div class="l-msg-form">
          <div class="l-inner l-inp">
            <button class="btn btn-camera ml-0"></button>
            <div class="inp white">
              <div class="inp-inner">
                <input type="text" class="input-text-line" placeholder="메세지를 입력해주세요." id="msg" autofocus />
              </div>
            </div>
            <button class="btn txt-type" disabled>전송</button>
          </div>
        </div>
      </el-drawer>
    </div>

    <!-- 문자기록상세 -->
    <div class="l-dialog">
      <el-dialog title="+82 10-1234-1234" :visible.sync="messageDialog" class="el-dialog-full bg-white" width="100%">
        <div slot="title" class="el-dialog__title">+82 10-1234-1234</div>
        <div class="l-bubble">
          <ul>
            <li class="bubble left">배송이 늦어요. 언제오나요? 1시까지라고 들었는데?</li>
            <li class="bubble right">죄송합니다. 최대한 빨리 배송해드리겠습니다.</li>
          </ul>
        </div>
        <div class="l-msg-form">
          <div class="l-inner l-inp">
            <button class="btn btn-camera ml-0"></button>
            <div class="inp white">
              <div class="inp-inner">
                <input type="text" class="input-text-line" placeholder="메세지를 입력해주세요." id="msg" autofocus />
              </div>
            </div>
            <button class="btn txt-type" disabled>전송</button>
          </div>
        </div>
      </el-dialog>
    </div>
    <Foot-menu />
  </div>
</template>

<script>
import Gnb from "../../components/layout/Gnb";
import FootMenu from "../../components/layout/FootMenu";
export default {
  components: { Gnb, FootMenu },
  name: "MessageRecord",
  data() {
    return {
      isSelect: false,
      isSelect2: false,
      drawerMessage: false,
      messageDialog: false,
      messageList: [
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
        {
          number: "+82 10-1234-1234",
          msg: "고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할 고객님의 소중한 택배가 금일 오후 2시에 도착할",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(val) {
      console.log(val);
    },
    switchSelect: function() {
      this.isSelect = !this.isSelect;
    },
    switchSelect2: function() {
      this.isSelect2 = !this.isSelect2;
    },
  },
};
</script>
