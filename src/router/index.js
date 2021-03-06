import Vue from 'vue'
import Router from 'vue-router'


// lazyload 미적용
// import intro from '../views/intro';

// lazyload 적용
// () => import(/* webpackChunkName: "chunk/intro" */'../views/intro');


const Guide = () => import(/* webpackChunkName: "chunk/model" */'../components/layout/Guide');
const Login = () => import(/* webpackChunkName: "chunk/model" */'../views/Login/Login');
const Landing = () => import(/* webpackChunkName: "chunk/model" */'../views/Landing');
const Dashboard = () => import(/* webpackChunkName: "chunk/model" */'../views/Dashboard/Dashboard');
const DeliveryStart = () => import(/* webpackChunkName: "chunk/model" */'../views/DeliveryStart/DeliveryStart');


const Test = () => import(/* webpackChunkName: "chunk/model" */'../views/Test');

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  // base: '/', // only history mode
  routes: [

    { path: '/guide', name: '공통컴포넌트', component: Guide },
    { path: '/', name: 'landing', component: Landing },
    { path: '/home', name: '홈', component:  () => import('../views/Home.vue'), },
    { path: '/login', name: '로그인', component: Login },
    { path: '/dashboard', name: '홈', component: Dashboard },
    { path: '/delivery-start', name: '집배송 출발', component: DeliveryStart },

    { path: '/test', name: 'test', component: Test },
  ],
});
// 전역 네비게이션
router.beforeEach((to, from, next) => {
  next();
});

export default router;
