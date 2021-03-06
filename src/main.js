import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
// import './assets/scss/index.css';
import './assets/scss/index.scss';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

import common from './plugins/common.js';
Vue.use(common, { someOption: true , store})


new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})*/
