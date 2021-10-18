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

    {
      path: '/address',
      name: 'Address',

      component: () => import('../views/Address/Address.vue'),


    },
    {
      path: '/address-registration',
      name: 'AddressRegistration',
      component: () => import('../views/Address/AddressRegistration.vue'),


    },

    {
      path: '/terminal',
      name: 'Terminal',
      component: () => import('../views/Terminal/Terminal.vue'),


    },
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
