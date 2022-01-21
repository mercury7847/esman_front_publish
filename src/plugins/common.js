/* eslint-disable */
import axios from 'axios';
import {Message, MessageBox} from 'element-ui';
// https://kr.vuejs.org/v2/guide/plugins.html#플러그인-작성하기
export default {
  install(Vue, options) {
    /* 공통 axios */
    const fetchData = (obj) => {
      // const {store} = context;
      const store = options.store;

      /* axios 생성 */
      const service = axios.create({
        baseURL: '/',
        withCredentials: false, // send cookies when cross-domain requests
        timeout: 5000, // request timeout
      });

      /* axios 인터셉터 처리 [요청] */
     /* service.interceptors.request.use(
        (config) => {
          console.log(' request ================= ');

          if (store.state.userAuth.loginSession.accessToken) {
            config.headers['JWT'] = store.state.userAuth.loginSession.accessToken;
          }
          return config;
        },
        (error) => {
          console.log(' request error ================= ');
          // do something with request error
          console.log(error); // for debug
          return Promise.reject(error);
        },
      );*/

      /* axios 인터셉터 처리 [응답] */
      service.interceptors.response.use(
        async function (response) {
          const res = response.data;
          console.log(' response ================= ');
          console.log(response);

          try {
            /* 상태값에 따른 에러처리 해보기 */
            if (response.status !== 200) {
              res.success = false;
            } else {
              res.success = true;
            }
            if (!res.success) {
              Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000,
              });

              if (chkCd(res.code)) {
                const tmpConfig = res.config;
                const infoRes = await getRefreshToken(store.state.userAuth.loginSession.refreshToken);
                await store.commit('userAuth/refreshToken', {context, infoRes});
                tmpConfig.headers['JWT'] = infoRes.jwt;
                return await fetchData(tmpConfig);
              }

              return Promise.reject(new Error(res.message || 'Error'));
            }
            return res.data;
          } catch (e) {
            return Promise.reject(new Error(res.message || 'Error'));
          }
        },
        async function (error) {
          let message = 'Server Error';
          try {
            // if (error.response.data) {
            //   console.log('에러메세지생성1', error.response, error.response.data);
            //   /* 세션연장처리 */
            //   if (chkCd(error.response.data.code)) {
            //     const tmpConfig = error.response.config;
            //     const infoRes = await getRefreshToken(store.state.userAuth.loginSession.refreshToken);
            //     await store.commit('userAuth/refreshToken', { context, infoRes });
            //     tmpConfig.headers['JWT'] = infoRes.jwt;
            //     return await fetchData(tmpConfig);
            //   }
            //   /* 에러메세지생성 */
            //   for (const i in error.response.data.fieldErrors) {
            //     message += error.response.data.fieldErrors[i].message;
            //   }

            //   message += error.response.data.message ? error.response.data.message : error.response.data;
            // } else {
            //   /* 에러메세지생성 */
            //   console.log('에러메세지생성2', error, error.response);
            //   message = blnkObj(error.message) ? message : error.message;
            // }
            console.log('에러메세지생성', error, error.response);
            message = error;
          } catch (e) {
            message = e;
            console.log(e);
          }

          // printMsgBox(message, 'alert');

          return Promise.reject(message);
        },
      );

      return service(obj);
    };

    /* 리프레시 토큰 */
    const getRefreshToken = async (token) => {
      const formData = new FormData();
      formData.append('refresh', token);

      const res = await fetchData({
        url: '/userAuth/refresh-token',
        method: 'post',
        data: formData,
      });

      return res;
    };

    /* jwt 복호화 함수 */
    const parseJwt = (token) => {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
          })
          .join(''),
      );

      return jsonPayload;
    };

    /* [test] method 생성 */
    const testHellow = (d) => {
      console.log(`heollow ${d}`);
    };

    /* [날짜관련] 분기처리 */
    const getQuarterDate = (currntMnth, t) => {
      let qt = Math.ceil(currntMnth / 3);
      const tt = t * 3;
      const tmpDt = new Date();
      const monthOfYear = tmpDt.getMonth();
      let stY = tmpDt.getFullYear();
      let sdtM = 0;
      let sdtD = 0;
      let edtM = 0;
      let edtD = 0;

      if (t) {
        tmpDt.setMonth(monthOfYear + tt);
        stY = tmpDt.getFullYear();
        currntMnth = tmpDt.getMonth() + 1;
        qt = Math.ceil(currntMnth / 3);
      }

      switch (qt) {
        case 1:
          sdtM = 1;
          edtM = 3;
          break;
        case 2:
          sdtM = 4;
          edtM = 6;
          break;
        case 3:
          sdtM = 7;
          edtM = 9;
          break;
        case 4:
          sdtM = 10;
          edtM = 12;
          break;
      }

      sdtD = getLastDate(stY, sdtM);
      edtD = getLastDate(stY, edtM);

      return {
        stY,
        sdtM,
        sdtD,
        edtM,
        edtD,
      };
    };

    /* [날짜관련] 분기처리 */
    const getLastDate = (y, m) => {
      const lstDt = new Date(y, m, 0);
      return lstDt.getDate();
    };

    /* [날짜관련]  분기처리 */
    const getSdtEdtQt = (n) => {
      const tmpDt = new Date();
      const currntMnth = tmpDt.getMonth() + 1;
      const qt = getQuarterDate(currntMnth, n);

      return [new Date(qt.stY, qt.sdtM - 1, 1), new Date(qt.stY, qt.edtM - 1, qt.edtD)];
    };

    /* [날짜관련]  분기처리 */
    const getSdtEdtMth = (n) => {
      const start = new Date();
      start.setMonth(start.getMonth() + (n || 0));

      return [new Date(start.getFullYear(), start.getMonth(), 1), new Date(start.getFullYear(), start.getMonth(), getLastDate(start.getFullYear(), start.getMonth() + 1))];
    };

    /* [날짜관련]  분기처리 */
    const getSdtEdYr = (n, t) => {
      const start = new Date();
      const lsY = t ? 6 : 11;

      start.setFullYear(start.getFullYear() + (n || 0));

      const lsD = t ? start.getDate() : getLastDate(start.getFullYear(), lsY + 1);

      return [new Date(start.getFullYear(), 0, 1), new Date(start.getFullYear(), lsY, lsD)];
    };

    /* [날짜관련]  분기처리 */
    const getSdtEdtWk = (n) => {
      const tmpDt = new Date();

      if (n) {
        tmpDt.setDate(tmpDt.getDate() + 7 * n);
      }

      const nowDayOfWeek = tmpDt.getDay();
      const nowDay = tmpDt.getDate();
      const weekStartDate = new Date(tmpDt.getFullYear(), tmpDt.getMonth(), nowDay - nowDayOfWeek);
      const weekEndDate = new Date(tmpDt.getFullYear(), tmpDt.getMonth(), nowDay + (6 - nowDayOfWeek));

      return [weekStartDate, weekEndDate];
    };

    /* [날짜관련] date -> yyyymmdd */
    const getDateToString = (date) => {
      let month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
      let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
      return date.getFullYear() + month + day;
    };

    /* [popup] */
    const openPop = (popName) => {
      const {store, route, redirect, app} = context;
      // console.log(context);
      store.dispatch('tagsView/delView', route).then(({visitedViews}) => {
        const latestView = visitedViews.slice(-1)[0];
        const popUrl = `${context.route.path}/?popOpen=true`;
        window.open(popUrl, popName, '_blank');
        if (latestView) {
          redirect(200, latestView.path);
          // app.router.push(latestView.path)
        } else {
          redirect(200, '/');
        }
      });
    };

    /* 메세지 박스 출력
     * m : 메세지 t: 박스색깔 메세지 타입 ( default > error )
     */
    const printMsgBox = async (m, t) => {
      if (t === 'alert') {
        await MessageBox.alert(m, '확인', {
          confirmButtonText: '확인',
        });
        return;
      }
      Message({
        message: m || 'Error',
        type: t || 'error',
        duration: 5 * 1000,
      });
    };

    /* console log 출력 박스 커스텀
     * dev일때만 나오도록 설정한다
     */
    const printConsole = (m) => {
      const {env} = context;
      if (env.dev) {
        console.log(m);
      }
    };

    /*
     * 팝업 닫을때 이벤트 발생
     */
    const closeWindowEvent = (e) => {
      if (process.browser) {
        if (window.opener) {
          // window.opener.location.reload();
        }
      }
    };

    /*
     * 빈값 체크
     */
    const blnkObj = (v) => {
      return v === undefined || v === null || v === '';
    };

    /* vue 공통 method 주입 */
    Vue.prototype.$fetchData = fetchData;
    Vue.prototype.$parseJwt = parseJwt;
    Vue.prototype.$getSdtEdtQt = getSdtEdtQt;
    Vue.prototype.$getSdtEdtMth = getSdtEdtMth;
    Vue.prototype.$getSdtEdYr = getSdtEdYr;
    Vue.prototype.$getSdtEdtWk = getSdtEdtWk;
    Vue.prototype.$openPop = openPop;
    Vue.prototype.$printMsgBox = printMsgBox;
    Vue.prototype.$printConsole = printConsole;
    Vue.prototype.$closeWindowEvent = closeWindowEvent;
    Vue.prototype.$blnkObj = blnkObj;
    Vue.prototype.$getDateToString = getDateToString;
    Vue.prototype.$testHellow = testHellow;
  }
};
