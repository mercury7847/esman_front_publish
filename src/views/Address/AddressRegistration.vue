<template>
<div class="l-service">
  <Gnb />
  <div class="address-registration">
    <div class="l-inner">
      <div class="form">
        <label for="address-name">주소 이름</label>
        <div class="l-inp">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="구로 터미널" id="address-name" autofocus>
            </div>
          </div>
        </div>
        <label for="c-pw">주소</label>
        <div class="l-inp">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="검색어를 입력하세요." id="c-pw" autofocus>
            </div>
          </div>
          <button class="btn primary reg-size" @click="drawer = true">검색</button>
        </div>
      </div>
      <div class="btn-group bottom"><button class="btn full-size large primary">등록하기</button></div>
    </div>
  </div>

  <div class="l-drawer l-scroll">
    <el-drawer
      :visible.sync="drawer"
      direction="btt"
      size="92%"
      :with-header="false">
      <div class="drawer-title">주소검색</div>
      <div class="l-inner l-fixed">
        <div class="l-inp l-search">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="주소를 입력하세요.
              " id="inp" autofocus>
            </div>
            <button class="btn btn-search"><i class="icon-search"></i></button>
          </div>
        </div>
        <div class="l-total">
          <span class="txt-sub">검색결과</span> <span class="txt-primary">6</span>
        </div>
      </div>
      <div class="address-list scroll-y">
        <ul>
          <li v-for="item in searchList" :key="item" class="d-flex-be-center">
            <div class="address-txt">
              <p class="address-title" v-html="item.title"></p>
              <p class="address-desc" v-html="item.address"></p>
            </div>
            <button class="btn small-size white">지도</button>
          </li>
        </ul>
      </div>
    </el-drawer>
  </div>
</div>
</template>

<script>
import Gnb from '../../components/layout/Gnb'
export default {
  components: { Gnb },
  name:'AddressRegistration',
  data() {
    return {
      drawer: false,
      searchList: [
        {
          title: '한진택배 <span class="txt-primary">구로</span> 터미널',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83<br>터미널 코드 110',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 1 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 2 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
        {
          title: '한진택배 <span class="txt-primary">구로</span> 3 영업점',
          address: '서울특별시 <span class="txt-primary">구로</span>구 가산디지털 2로 83',
        },
      ],
    };
  },
}
</script>