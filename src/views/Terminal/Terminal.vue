<template>
  <div class="l-container">
    <Gnb />
    <div class="terminal l-scroll">
      <div class="l-inner l-fixed">
        <div class="l-inp l-search">
          <div class="inp">
            <div class="inp-inner">
              <input type="text" class="input-text-line" placeholder="주소를 입력하세요." id="inp" autofocus />
            </div>
            <button class="btn btn-search"><i class="icon-search small"></i></button>
          </div>
        </div>

        <div class="d-flex-be-center" v-show="!searchResult">
          <p class="txt-sub">최근 검색어</p>
          <button class="btn small-size white">전체 삭제</button>
        </div>
        <div class="d-flex-be-center" v-show="searchResult">
          <p class="txt-sub">검색결과 <span class="txt-primary">4</span></p>
          <button class="btn small-size white">전체 삭제</button>
        </div>
      </div>
      <div class="address-list scroll-y" v-show="!searchResult">
        <ul>
          <li v-for="item in recentSearchList" :key="item">
            <div class="address-txt">
              <p class="address-title txt-weight-normal">{{ item.title }}</p>
            </div>
            <div class="address-btn">
              <button class="btn-delete"></button>
            </div>
          </li>
        </ul>
      </div>
      <div class="address-list scroll-y" v-show="searchResult">
        <ul>
          <li v-for="item in searchList" :key="item">
            <div class="address-txt">
              <p class="address-title" v-html="item.title"></p>
              <p class="address-desc" v-html="item.address"></p>
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
  name: "Terminal",
  data() {
    return {
      searchResult: true,
      recentSearchList: [
        {
          title: "구로",
        },
        {
          title: "고양시 덕양구",
        },
        {
          title: "용산구 청파동",
        },
        {
          title: "청파동",
        },
      ],
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
      ],
    };
  },
  methods: {
    switchSearch: function() {
      this.searchResult = !this.searchResult;
    },
  },
};
</script>
