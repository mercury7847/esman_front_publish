<template>
  <div class="l-container menu-active">
    <gnb />
    <div class="l-contents l-scroll">
      <div class="l-inner scroll-y">
        <h2 class="title-section ft-color-secondary mb-16">input</h2>
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
        </el-form>
        <el-form class="l-form" label-position="top">
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
        </el-form>
        <el-form class="l-form" label-position="top">
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
        </el-form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="l-form login-form" label-position="top">
          <el-form-item label="비밀번호(clearable)" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="password" placeholder="비밀번호를 입력하세요." v-model="inputpw" class="inp-text-line" clearable></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="label" class="mb-20">
            <div class="l-inp">
              <div class="inp disabled">
                <div class="inp-inner">
                  <el-input type="text" placeholder="텍스트를 입력하세요." v-model="input01" class="inp-text-line" disabled></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
        </el-form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="l-form">
          <el-form-item label="label(validation)" prop="sender" class="mb-20">
            <div class="l-inp">
              <div class="inp">
                <div class="inp-inner">
                  <el-input type="text" placeholder="" class="inp-text-line" v-model="ruleForm.sender"></el-input>
                </div>
              </div>
            </div>
          </el-form-item>
        </el-form>

        <el-divider></el-divider>
        <h2 class="title-section ft-color-secondary mb-16">select</h2>
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

        <el-divider></el-divider>
        <h2 class="title-section ft-color-secondary mb-16">checkbox</h2>
        <el-form class="l-form">
          <el-form-item label="checkboxLabel" class="checkbox mb-20">
            <div class="l-checkbox">
              <el-checkbox v-model="check01">위치정보 제공동의</el-checkbox>
            </div>
          </el-form-item>
        </el-form>
        <el-form class="l-form" label-position="top">
          <el-form-item label="checkboxLabel" class="checkbox mb-20">
            <div class="l-checkbox">
              <el-checkbox v-model="check01">위치정보 제공동의</el-checkbox>
            </div>
          </el-form-item>
        </el-form>

        <el-divider></el-divider>
        <h2 class="title-section ft-color-secondary mb-16">radio</h2>
        <el-form :model="ruleForm" ref="ruleForm" class="l-form" label-position="top">
          <el-form-item label="radioLabel" prop="radioType" class="mb-20">
            <div class="l-radio">
              <el-radio-group v-model="ruleForm.radioType">
                <el-radio :label="1">1</el-radio>
                <el-radio :label="2">2</el-radio>
              </el-radio-group>
            </div>
          </el-form-item>
        </el-form>

        <el-divider></el-divider>
        <h2 class="title-section ft-color-secondary mb-16">switch</h2>
        <el-form :model="ruleForm" ref="ruleForm" class="l-form">
          <el-form-item label="label" class="switch mb-20">
            <div class="l-switch">
              <el-switch v-model="switch01"></el-switch>
            </div>
          </el-form-item>
        </el-form>

        <el-divider></el-divider>
        <div class="btn-group mb-20">
          <button class="btn btn-size-full primary">full</button>
        </div>
        <div class="btn-group">
          <button class="btn btn-size-full primary mb-20" disabled>disabled</button>
        </div>
        <div class="btn-group full mb-20">
          <button class="btn btn-size-full btn-size-large white is-active">full large is-on</button>
          <button class="btn btn-size-full btn-size-large white">full large</button>
        </div>
        <div class="btn-group mb-20">
          <button class="btn btn-size-large secondary">large</button>
          <button class="btn btn-size-regular white">regular</button>
          <button class="btn btn-size-small white is-active">small</button>
          <button class="btn btn-size-xsmall white is-active">xsmall버튼</button>
        </div>
        <div class="btn-group mb-20">
          <button class="btn btn-size-xsmall point">xsmall yellow</button>
        </div>
        <div class="btn-group mb-20">
          <button class="btn btn-txt">btn-txt</button>
          <button class="btn btn-txt underline">btn-txt underline</button>
        </div>

        <el-divider></el-divider>
        <h2 class="title-section ft-color-secondary mb-16">badge</h2>
        <span class="badge yellow">집하</span>
        <span class="badge red">오류</span>
        <span class="badge purple">스캔</span>
        <span class="badge grey">스캔</span>
        <span class="badge blue">$ 선불</span>
        <span class="badge orange">$ 착불</span>

        <el-divider></el-divider>
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
      inputpw: "",
      input01: "",
      check01: false,
      switch01: false,
      selectEmail: "",
      select01: "",
      select02: "",
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
        radioType: "",
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
    };
  },
  mounted() {},
  created() {
    this.selectEmail = this.selectOptionsEmail[0];
    this.select01 = this.selectOptions1[0];
    this.select02 = this.selectOptions2[0];
  },
  methods: {},
};
</script>
