<template>
  <div class="l-container">
    <Gnb />
    <div class="address l-scroll">
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
            <button class="btn btn-small-size white" v-show="!isSelect" @click="switchSelect">선택</button>
            <router-link to="/address-registration" class="btn btn-small-size primary btn-link" v-show="!isSelect">주소 등록</router-link>
            <button class="btn btn-small-size primary" v-show="isSelect" @click="switchSelect">선택</button>
            <button class="btn" v-show="isSelect"><i class="icon-trash"></i></button>
          </div>
        </div>
      </div>
      <div class="address-list scroll-y">
        <ul>
          <li>
            <div class="input-checkbox" v-show="isSelect">
              <input type="checkbox" id="chk-01" />
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
              <input type="checkbox" id="chk-02" />
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
              <input type="checkbox" id="chk-03" />
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
              <input type="checkbox" id="chk-04" />
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
              <input type="checkbox" id="chk-04" />
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
              <input type="checkbox" id="chk-04" />
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
              <input type="checkbox" id="chk-04" />
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
              <input type="checkbox" id="chk-04" />
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
              <input type="checkbox" id="chk-04" />
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
              <input type="checkbox" id="chk-04" />
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
              <input type="checkbox" id="chk-04" />
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
              <input type="checkbox" id="chk-04" />
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
  </div>
</template>

<script>
import Gnb from "../../components/layout/Gnb";
export default {
  components: { Gnb },
  name: "Address",
  data() {
    return {
      isSelect: false,
    };
  },
  methods: {
    switchSelect: function() {
      this.isSelect = !this.isSelect;
    },
  },
};
</script>
