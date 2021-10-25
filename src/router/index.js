import Vue from 'vue'
import Router from 'vue-router'

// lazyload 미적용
// import intro from '../views/intro';

// lazyload 적용
// () => import(/* webpackChunkName: "chunk/intro" */'../views/intro');


const Login = () => import(/* webpackChunkName: "chunk/model" */'../views/Login/Login');
const Password = () => import(/* webpackChunkName: "chunk/model" */'../views/Login/Password');
const Landing = () => import(/* webpackChunkName: "chunk/model" */'../views/Landing');
const Join = () => import(/* webpackChunkName: "chunk/model" */'../views/Login/Join');
const Dashboard = () => import(/* webpackChunkName: "chunk/model" */'../views/Dashboard/Dashboard');
const Shipping = () => import(/* webpackChunkName: "chunk/model" */'../views/Shipping/Shipping');
const Delivery = () => import(/* webpackChunkName: "chunk/model" */'../views/Delivery/Delivery');
const Address = () => import(/* webpackChunkName: "chunk/model" */'../views/Address/Address');
const AddressRegistration = () => import(/* webpackChunkName: "chunk/model" */'../views/Address/AddressRegistration');
const Terminal = () => import(/* webpackChunkName: "chunk/model" */'../views/Terminal/Terminal');
const MessageRecord = () => import(/* webpackChunkName: "chunk/model" */'../views/MessageRecord/MessageRecord');
const CustomerService = () => import(/* webpackChunkName: "chunk/model" */'../views/CustomerService/CustomerService');

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  // base: '/', // only history mode
  routes: [

    { path: '/', name: 'landing', component: Landing },
    { path: '/home', name: '홈', component:  () => import('../views/Home.vue'), },
    { path: '/login', name: '로그인', component: Login },
    { path: '/join', name: '회원가입', component: Join },
    { path: '/password', name: '비밀번호 찾기', component: Password },
    { path: '/dashboard', name: '대시보드', component: Dashboard },
    { path: '/shipping', name: '배송', component: Shipping },
    { path: '/delivery', name: '집배송 출발', component: Delivery },
    { path: '/address', name: '주소록 관리', component: Address },
    { path: '/address-registration', name: '주소 등록', component: AddressRegistration },
    { path: '/terminal', name: '터미널, 영업점 조회', component: Terminal },
    { path: '/message-record', name: '문자/통화 기록', component: MessageRecord },
    { path: '/customer-service', name: '고객 응대 내역', component: CustomerService },


    // { path: '/', name: 'intro', component: intro },
    // { path: '/home', name: 'home', component: home },
    /* { path: '/sample',
      name: 'sample-root',
      component: sampleRoot,
      children: [
        { path: 'list', name: 'sample-list', component: sampleList },
        { path: 'cycle', name: 'sample-cycle', component: sampleCycle },
        { path: 'validator', name: 'sample-validator', component: sampleValidator },
        { path: 'store', name: 'sample-store', component: sampleStore },
        { path: 'trans', name: 'sample-trans', component: sampleTrans },
        { path: 'api', name: 'sample-api', component: sampleApi },
        { path: 'swiper', name: 'sample-swiper', component: sampleSwiper },
        { path: 'basic', name: 'sample-basic', component: sampleBasic },
        { path: 'model', name: 'sample-model', component: sampleModel },
        { path: 'keepalive',
          name: 'sample-keepalive',
          redirect: 'keepalive/simpleOne',
          component: sampleKeepalive,
          children: [
            { path: 'simpleOne', name: 'simple-one', component: simpleOne },
            { path: 'simpletwo', name: 'simple-two', component: simpleTwo },
          ] },
      ] }, */
  ],
});
// 전역 네비게이션
router.beforeEach((to, from, next) => {
  next();
});

export default router;
