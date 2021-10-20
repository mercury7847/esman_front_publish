<template>
<div class="l-service">
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
                <input type="checkbox" id="chk-all"/>
                <label for="chk-all"><span class="txt-primary">2</span> / <span class="txt-sub">4</span></label>
              </div>
            </div>
            <div class="btn-group">
              <button class="btn small-size white" v-show="!isSelect" @click="switchSelect">선택</button>
              <router-link to="/address-registration" class="btn small-size primary btn-link" v-show="!isSelect">주소 등록</router-link>
              <button class="btn small-size primary" v-show="isSelect" @click="switchSelect">선택</button>
              <button class="btn" v-show="isSelect"><i class="icon-trash"></i></button>
            </div>
          </div>
        </div>
          <div class="address-list scroll-y">
            <ul>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-01"/>
                  <label for="chk-01"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">구로 터미널</p>
                  <p class="address-desc">서울특별시 금천구 가산디지털2로 83</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-02"/>
                  <label for="chk-02"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-03"/>
                  <label for="chk-03"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">구로 터미널</p>
                  <p class="address-desc">서울특별시 금천구 가산디지털2로 83</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
              <li>
                <div class="input-checkbox" v-show="isSelect">
                  <input type="checkbox" id="chk-04"/>
                  <label for="chk-04"></label>
                </div>
                <div class="address-txt">
                  <p class="address-title">GS 홈쇼핑</p>
                  <p class="address-desc">서울특별시 영등포구 선유로 75</p>
                </div>
                <div class="address-btn" v-show="!isSelect">
                  <button class="btn"><i class="icon-edit"></i></button>
                  <button class="btn"><i class="icon-trash"></i></button>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="통화">
    </el-tab-pane>
  </el-tabs>
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
      console.log(val);
    },
    switchSearch: function () {
      this.isSearch = !this.isSearch;
    },
  }
}
</script>