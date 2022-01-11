<template>
  <div class="l-container menu-active">
    <gnb />
    <div class="l-contents">
      <div class="l-tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="input" name="1">
            <el-form class="l-form" label-position="top">
              <el-form-item label="label" class="mb-20">
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <el-input type="text" placeholder="텍스트를 입력하세요." v-model="input01" class="inp-text-line"></el-input>
                    </div>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="휴대전화 번호" class="mb-20">
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <el-input type="text" placeholder="휴대전화 번호를 입력하세요." v-model="input01" class="inp-text-line"></el-input>
                    </div>
                  </div>
                  <button class="btn btn-size-large primary">인증번호</button>
                </div>
              </el-form-item>
              <el-form-item label="인증 번호" class="mb-20">
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <el-input type="text" placeholder="인증 번호를 입력하세요." v-model="input01" class="inp-text-line">
                        <span slot="suffix">2:33</span>
                      </el-input>
                    </div>
                  </div>
                  <button class="btn btn-size-large primary">확인</button>
                </div>
              </el-form-item>
              <el-form-item label="disabled" class="mb-20">
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <el-input type="text" placeholder="텍스트를 입력하세요." class="inp-text-line" disabled value="이정민"></el-input>
                    </div>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="camera" class="mb-20">
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <el-input type="number" placeholder="" v-model="input01" class="input-with-select">
                        <button slot="append" class="btn btn-camera"></button>
                      </el-input>
                    </div>
                  </div>
                </div>
              </el-form-item>
            </el-form>
            <el-form class="l-form login-form" label-position="top">
              <el-form-item label="비밀번호(clearable)" class="mb-20">
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <el-input type="password" placeholder="비밀번호를 입력하세요." v-model="inputpw" class="inp-text-line" clearable></el-input>
                    </div>
                  </div>
                </div>
              </el-form-item>
            </el-form>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="l-form" label-position="top">
              <el-form-item label="label(validation)" prop="sender" class="mb-20">
                <div class="l-inp">
                  <div class="inp">
                    <div class="inp-inner">
                      <el-input type="text" placeholder="보내는 분을 입력해주세요." class="inp-text-line" v-model="ruleForm.sender"></el-input>
                    </div>
                  </div>
                </div>
              </el-form-item>
            </el-form>
            <el-form class="l-form"> </el-form>
          </el-tab-pane>

          <el-tab-pane label="select" name="2">
            <el-form class="l-form" label-position="top">
              <el-form-item label="이메일" class="mb-20">
                <div class="l-select">
                  <div class="select">
                    <el-select v-model="selectEmail" value-key="value" placeholder="select">
                      <el-option v-for="item in selectOptionsEmail" :key="item.value" :label="item.label" :value="item"> </el-option>
                    </el-select>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="소속 조직 (집배점)" class="mb-20">
                <div class="l-select">
                  <div class="select">
                    <el-select v-model="select01" value-key="value" placeholder="select">
                      <el-option v-for="item in selectOptions1" :key="item.value" :label="item.label" :value="item"> </el-option>
                    </el-select>
                  </div>
                  <div class="select">
                    <el-select v-model="select02" value-key="value" placeholder="select">
                      <el-option v-for="item in selectOptions2" :key="item.value" :label="item.label" :value="item"> </el-option>
                    </el-select>
                  </div>
                </div>
              </el-form-item>
            </el-form>
          </el-tab-pane>

          <el-tab-pane label="checkbox/radio/switch" name="3">
            <h2 class="title-sub mb-15">checkbox</h2>
            <el-form class="l-form">
              <el-form-item label="checkboxLabel" class="checkbox mb-20">
                <div class="l-checkbox">
                  <el-checkbox v-model="check01"><span class="ft-weight-bold">위치정보 제공동의</span></el-checkbox>
                </div>
              </el-form-item>
            </el-form>
            <el-form class="l-form">
              <el-form-item class="checkbox mb-20">
                <div class="l-checkbox">
                  <el-checkbox v-model="check01">전체 약관 동의</el-checkbox>
                </div>
              </el-form-item>
              <el-form-item class="checkbox mb-15">
                <div class="l-checkbox">
                  <el-checkbox v-model="check02">위치정보 제공동의</el-checkbox>
                </div>
              </el-form-item>
              <el-form-item class="checkbox mb-15">
                <div class="l-checkbox">
                  <el-checkbox v-model="check03">위치정보 제공동의</el-checkbox>
                </div>
              </el-form-item>
              <el-form-item class="checkbox mb-15">
                <div class="l-checkbox">
                  <el-checkbox v-model="check04">위치정보 제공동의</el-checkbox>
                </div>
              </el-form-item>
            </el-form>
            <el-divider></el-divider>
            <h2 class="title-sub mb-15">radio</h2>
            <el-form :model="ruleForm" ref="ruleForm" class="l-form" label-position="top">
              <el-form-item label="radioLabel" prop="radioType" class="mb-20">
                <div class="l-radio">
                  <el-radio-group v-model="ruleForm.radioType1">
                    <el-radio :label="1">배송</el-radio>
                    <el-radio :label="2">집하</el-radio>
                  </el-radio-group>
                </div>
              </el-form-item>
            </el-form>
            <el-form :model="ruleForm" ref="ruleForm" class="l-form" label-position="top">
              <el-form-item label="radio with border" prop="radioType" class="mb-20">
                <div class="l-radio">
                  <el-radio-group v-model="ruleForm.radioType2" class="border">
                    <el-radio :label="1" border>배송</el-radio>
                    <el-radio :label="2" border>집하</el-radio>
                  </el-radio-group>
                </div>
              </el-form-item>
              <el-form-item label="radio with border" prop="radioType" class="mb-20">
                <div class="l-radio">
                  <el-radio-group v-model="ruleForm.radioType3" class="border">
                    <el-radio :label="1" border>전체</el-radio>
                    <el-radio :label="2" border>배송</el-radio>
                    <el-radio :label="3" border>집하</el-radio>
                  </el-radio-group>
                </div>
              </el-form-item>
            </el-form>
            <h2 class="title-sub mb-15">switch</h2>
            <el-form :model="ruleForm" ref="ruleForm" class="l-form">
              <el-form-item label="label" class="switch mb-20">
                <div class="l-switch">
                  <el-switch v-model="switch01"></el-switch>
                </div>
              </el-form-item>
            </el-form>
          </el-tab-pane>

          <el-tab-pane label="button" name="4">
            <div class="btn-group mb-20">
              <button class="btn btn-size-full primary">btn-size-full 50 / primary</button>
            </div>
            <div class="btn-group mb-20">
              <button class="btn btn-size-full primary" disabled>full / disabled</button>
            </div>
            <div class="btn-group mb-20">
              <button class="btn btn-size-large secondary">btn-size-large 45 / secondary</button>
            </div>
            <div class="btn-group mb-20">
              <button class="btn btn-size-regular white">btn-size-regular 37 / white</button>
            </div>
            <div class="btn-group mb-20">
              <button class="btn btn-size-small white is-active">btn-size-small 30 / white is-active</button>
              <button class="btn btn-size-small white primary">btn-size-small 30 / white primary</button>
            </div>
            <div class="btn-group mb-20">
              <button class="btn btn-size-xsmall primary">btn-size-xsmall 26</button>
              <button class="btn btn-size-xsmall white">btn-size-xsmall white</button>
              <button class="btn btn-size-xsmall point">btn-size-xsmall point</button>
            </div>
            <div class="btn-group type-02 mb-20" style="width: auto">
              <button class="btn btn-size-large white primary">수동</button>
              <button class="btn btn-size-large white">자동</button>
            </div>
            <div class="btn-group mb-20">
              <button class="btn btn-txt">btn-txt</button>
              <button class="btn btn-txt underline">btn-txt underline</button>
            </div>
            <p class="title-sub mb-15">더보기 버튼</p>
            <div class="btn-group mb-20">
              <button class="btn btn-more"></button>
              <button class="btn btn-more small"><span>상세보기</span></button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="badge" name="5">
            <span class="badge yellow">집하</span>
            <span class="badge red">오류</span>
            <span class="badge purple">스캔</span>
            <span class="badge grey">스캔</span>
            <span class="badge blue">$ 선불</span>
            <span class="badge orange">$ 착불</span>
            <el-divider></el-divider>
          </el-tab-pane>
          <el-tab-pane label="slider" name="6">
            <p class="title mb-15">스캔 속도</p>
            <div class="l-slider mb-15">
              <span class="slider-title">일반</span>
              <div class="slider">
                <el-slider v-model="slider01" :max="10"></el-slider>
                <span class="slider-value" v-html="slider01"></span>
              </div>
            </div>
            <div class="l-slider">
              <span class="slider-title">대량집하</span>
              <div class="slider">
                <el-slider v-model="slider02" :max="10"></el-slider>
                <span class="slider-value" v-html="slider02"></span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="table" name="7">
            <div class="l-table row2">
              <table>
                <colgroup>
                  <col span="2" />
                  <col width="76px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>이름</th>
                    <th>상태</th>
                    <th rowspan="2"></th>
                  </tr>
                  <tr>
                    <th>전화번호</th>
                    <th>신청일시</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="item in tableData">
                    <tr :key="item.index">
                      <td>{{ item.name }}</td>
                      <td>{{ item.status }}</td>
                      <td rowspan="2">
                        <div class="btn-group">
                          <button class="btn btn-size-xsmall white is-active">요청</button>
                          <button class="btn btn-size-xsmall white mt-20">삭제</button>
                        </div>
                      </td>
                    </tr>
                    <tr :key="item.index">
                      <td>{{ item.phone }}</td>
                      <td>{{ item.date }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <div class="l-table mt-30 mb-30">
              <el-table :data="tableData2" style="width: 100%">
                <el-table-column prop="name" label="이름" align="center">
                  <el-table-column prop="date" label="전화번호" min-width="132" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="state" label="상태" align="center"> </el-table-column>
                <el-table-column prop="city" label="신청일시" min-width="132" align="center"></el-table-column>
                <el-table-column prop="zip" label="Date" min-width="76" align="center"></el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="step" name="8">
            <div class="l-step">
              <el-steps :active="activeStep">
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
              </el-steps>
              <el-button @click="next">Next step</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="font" name="9">
            <p class="ft-size-large mb-20">ft-size-large : 18px</p>
            <p class="ft-size-regular mb-20">ft-size-regular : 14px</p>
            <p class="ft-size-small mb-20">ft-size-small : 12px</p>
            <el-divider></el-divider>
            <p class="ft-color-primary mb-20">ft-color-primary</p>
            <p class="ft-color-sub mb-20">ft-color-sub</p>
            <p class="ft-color-grey mb-20">ft-color-grey</p>
            <el-divider></el-divider>
            <p class="ft-align-center mb-20">ft-align-center</p>
            <p class="ft-align-left mb-20">ft-align-left</p>
            <p class="ft-align-right mb-20">ft-align-right</p>
            <el-divider></el-divider>
            <p class="ft-weight-bold mb-20">ft-weight-bold : 700</p>
            <p class="ft-weight-medium mb-20">ft-weight-medium : 500</p>
            <p class="ft-weight-regular mb-20">ft-weight-regular : 400</p>
            <p class="ft-weight-light mb-20">ft-weight-light : 300</p>
            <el-divider></el-divider>
            <p class="title-page mb-20">title-page</p>
            <h2 class="title-section mb-20">title-section : 18px</h2>
            <h2 class="title-section ft-color-primary mb-20">인원 정보 #1</h2>
            <h2 class="title mb-20">title : 14px</h2>
            <h2 class="title-sub mb-20">title-sub : 12px</h2>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <foot-menu />
  </div>
</template>

<script>
import { Gnb, FootMenu } from "@/components/layout";
// import Floating from "../../components/layout/Floating";

export default {
  components: { Gnb, FootMenu },
  name: "Guide",
  data() {
    return {
      activeName: "1",
      inputpw: "",
      input01: "",
      check01: false,
      check02: false,
      check03: false,
      check04: false,
      switch01: false,
      selectEmail: "",
      select01: "",
      select02: "",
      slider01: 5,
      slider02: 7,
      activeStep: 1,
      ruleForm: {
        company: "",
        phone: "",
        cellphone: "",
        cellphone2: "",
        address: "",
        manager: "",
        sender: "",
        recipient: "(주)한진패션",
        department: "",
        email: "",
        itemName: "",
        itemPrice: "",
        productType: "일반 택배",
        paymentTerms: "신용",
        radioType1: "",
        radioType2: "",
        radioType3: "",
        waybillQuantity: "1",
        releaseNumber: "",
        datePicker: "",
      },
      rules: {
        company: [{ required: true, message: "상호를 입력해주세요", trigger: "blur" }],
        phone: [{ required: true, message: "전화번호를 입력해주세요.", trigger: "blur" }],
        cellphone: [{ required: true, message: "휴대폰 번호를 입력해주세요.", trigger: "blur" }],
        address: [{ required: true, message: "주소를 입력해주세요.", trigger: "blur" }],
        manager: [{ required: true, message: "담당자를 입력해주세요.", trigger: "blur" }],
        sender: [{ required: true, message: "보내는 분을 입력해주세요.", trigger: "blur" }],
        recipient: [{ required: true, message: "받는 분을 입력해주세요.", trigger: "blur" }],
        department: [{ required: true, message: "부서를 입력해주세요.", trigger: "blur" }],
        email: [{ required: true, message: "이메일 주소를 입력해주세요.", trigger: "blur" }],
        itemName: [{ required: true, message: "품목명을 입력해주세요.", trigger: "blur" }],
        productType: [{ required: true, message: "상품종류를 입력해주세요.", trigger: "blur" }],
        paymentTerms: [{ required: true, message: "지불조건을 입력해주세요.", trigger: "blur" }],
        radioType: [{ required: true, message: "타입을 입력해주세요.", trigger: "blur" }],
        waybillQuantity: [{ required: true, message: "송장수량을 입력해주세요.", trigger: "blur" }],
        releaseNumber: [{ required: true, message: "출고번호를 입력해주세요.", trigger: "blur" }],
        datePicker: [{ required: true, message: "집하요청일을 입력해주세요.", trigger: "blur" }],
      },
      selectOptionsEmail: [
        {
          value: "1",
          label: "직접 입력",
        },
        {
          value: "2",
          label: "gmail.com",
        },
        {
          value: "3",
          label: "naver.com",
        },
        {
          value: "4",
          label: "daum.net",
        },
      ],
      selectOptions1: [
        {
          value: "1",
          label: "송파석촌",
        },
        {
          value: "2",
          label: "송파석촌",
        },
      ],
      selectOptions2: [
        {
          value: "1",
          label: "잠실 2(집)",
        },
      ],
      tableData: [
        {
          name: "김한진",
          status: "가입대기",
          phone: "01012345678",
          date: "12-03 13:45:21",
        },
        {
          name: "김한진",
          status: "가입대기",
          phone: "01012345678",
          date: "12-03 13:45:21",
        },
      ],
      tableData2: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-08",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-06",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-07",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
      ],
    };
  },
  mounted() {},
  created() {
    this.selectEmail = this.selectOptionsEmail[0];
    this.select01 = this.selectOptions1[0];
    this.select02 = this.selectOptions2[0];
  },
  methods: {
    handleClick() {},
    next() {
      if (this.activeStep++ > 2) this.activeStep = 0;
    },
  },
};
</script>
