import Vue from 'vue';
import Vuex from 'vuex';

import app from './module/app';
// @ts-ignore
import createPersistedState from "vuex-persistedstate";
//@ts-ignore
import SecureLS from "secure-ls";
const ls = new SecureLS({isCompression: false});

import userAuth from './module/userAuth';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    userAuth,
  },
  plugins: [
    // https://github.com/robinvdvleuten/vuex-persistedstate#api
    createPersistedState({
      // paths :['user'],// 얘만 캐싱 해라.
      /*  filter: (v) => {
          console.log(v.type);
          return true;
        },*/
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ],
});
