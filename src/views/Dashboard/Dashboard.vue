<template>
  <div class="l-service bg-page">
    <gnb />
    <div class="dashboard">
      <div class="status">
        <div class="status-start" @click="$router.push('/delivery')">
          <strong>집배송출발</strong>
          <i class="icon-start"></i>
          <span class="ea"><span class="ea-num">22</span></span>
        </div>
        <div class="status-complet">
          <strong>집배송처리</strong>
          <i class="icon-complet"></i>
          <span class="ea"><span class="ea-num">5</span></span>
        </div>
        <div class="status-searh">
          <strong>실적조회</strong>
          <i class="icon-search"></i>
        </div>
      </div>
      <div class="card today">
        <div class="card-inner">
          <div class="card-header">
            <h2 class="card-tabs">오늘</h2>
            <h2 class="card-tabs yesterday">어제</h2>
            <button class="btn-more"><span>더보기</span><i class="icon-more"></i></button>
          </div>
          <!-- content -->
          <div class="contents">
            <ul>
              <li><span class="badge green">배송</span><ins>12</ins></li>
              <li><span class="badge yello">집하</span><ins>5</ins></li>
              <li><span class="badge red">오류</span><ins>0</ins></li>
            </ul>
          </div>
        </div>
        <button class="btn-delete" v-show="!isEdit"></button>
      </div>
      <div class="card life">
        <div class="card">
          <div class="card-inner">
            <div class="card-header">
              <h2>날씨</h2>
            </div>
            <div class="contents">
              <div class="weather">
                <span>33</span><span class="unit">&deg;</span>
              </div>

            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-inner">
            <div class="card-header">
              <h2>건강</h2>
            </div>
            <div class="contents">
              <div class="health">
                <span>76</span> <span class="unit">bpm</span>
              </div>
            </div>
          </div>
        </div>
        <button class="btn-delete" v-show="!isEdit"></button>
      </div>
      <div class="card shipping-issue">
        <div class="card-inner">
          <div class="card-header">
            <h2>집배송 특이사항</h2>
          </div>
          <!-- content -->
          <div class="contents">
            <div class="table-issue">
              <table>
                <colgroup>
                  <col width="30%">
                  <col width="35%">
                  <col width="35%">
                </colgroup>
                <tbody>
                <tr>
                  <th>전략화주</th>
                  <td><span class="badge red">반품</span><span class="data">6</span>건</td>
                  <td><span class="badge yello">배송</span><span class="data">12</span>건</td>
                </tr>
                <tr>
                  <th>전략화주</th>
                  <td><span class="badge red">반품</span><span class="data">6</span>건</td>
                  <td><span class="badge yello">배송</span><span class="data">12</span>건</td>
                </tr>
                <tr>
                  <th>반송필요</th>
                  <td colspan="2"><span class="data">0</span>건</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button class="btn-delete" v-show="!isEdit"></button>
      </div>
      <div class="card notice">
        <div class="card-inner">
          <div class="card-header">
            <h2>공지사항</h2>
            <button class="btn-more"><span>더보기</span><i class="icon-more"></i></button>
          </div>
          <!-- content -->
          <div class="contents">
            <div class="notice-list">

              <ul>
                <li>새로운 E/S man 이 서비스됩니다!</li>
                <li>E/S man 2.0이 런칭되었습니다.</li>
                <li>nFocus가 화주포탈로 이름이 변경되었습니다.</li>
              </ul>

            </div>
          </div>
        </div>
        <button class="btn-delete" v-show="!isEdit"></button>
      </div>
      <div class="card claim">
        <div class="card-inner">
          <div class="card-header">
            <h2>금일 고객 클래임</h2>
            <button class="btn-more"><span>더보기</span><i class="icon-more"></i></button>
          </div>
          <!-- content -->
          <div class="contents">
            <ul>
              <li><span class="badge green">접수</span><ins>12</ins></li>
              <li><span class="badge yello">열람</span><ins>5</ins></li>
            </ul>
          </div>
        </div>
        <button class="btn-delete" v-show="!isEdit"></button>
      </div>
      <div class="card new">
        <div class="card-inner">
          <div class="card-header">
            <h2>신규 취급점</h2>
            <button class="btn-more"><span>더보기</span><i class="icon-more"></i></button>
          </div>
          <!-- content -->
          <div class="contents">
            <ul>
              <li><span class="badge green">요청</span><ins>12</ins></li>
              <li><span class="badge yello">열람</span><ins>5</ins></li>
              <li><span class="badge purple">거래중기화주</span></li>
            </ul>
          </div>
        </div>
        <button class="btn-delete" v-show="!isEdit"></button>
      </div>
      <div class="dashboard-edit">
        <button class="btn-edit" v-show="isEdit" @click="switchEdit">편집</button>
        <button class="btn-edit" v-show="!isEdit" @click="drawer = true">추가</button>
        <button class="btn-edit" v-show="!isEdit" @click="switchEdit">완료</button>
      </div>
    </div>
    <div class="l-drawer">
      <el-drawer
          :visible.sync="drawer"
          direction="btt"
          size="92%"
          :with-header="false">
        <div class="drawer-title">위젯등록</div>
        <ul class="l-list">
          <li v-for="item in drawerList" :key="item">
            <p class="list-title">{{ item.title }}</p>
            <div>
              <el-switch v-model="item.value">
              </el-switch>
              <button class="btn-drag"></button>
            </div>
          </li>
        </ul>
      </el-drawer>
    </div>
    <foot-menu />
  </div>
</template>
<script>
import Gnb from '../../components/layout/Gnb'
import FootMenu from '../../components/layout/FootMenu'
export default {
  components: { FootMenu,Gnb },
  name:'Dashboard',
  data() {
    return {
      isEdit : true,
      drawer: false,
      // value1: true,
      drawerList: [
        {
          title: '집배송 실적',
        },
        {
          title: '헬스케어',
        },
        {
          title: '날씨',
        },
        {
          title: '집배송 특이사항',
        },
        {
          title: '공지사항',
        },
        {
          title: '금일 고객 클레임',
        },
        {
          title: '신규 취급점',
        },
        {
          title: '집배송',
        },
      ],
    }
  },
  methods: {
    switchEdit: function () {
      this.isEdit = !this.isEdit;
    },
  },
  mounted() {
    console.log(this.isEdit);
  }

}
</script>
