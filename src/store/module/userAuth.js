export const setUserSession = 'setUserSession';
export const removeUserSession = 'removeUserSession';
export const refreshToken = 'refreshToken';
// select
export const loginSession = 'loginSession'

export const test = 'test';
export const state = () => ({
  loginSession: {
    aud: '',
    iat: '',
    exp: '',
    ccn: '',
    roles: '',
    accessToken: '',
    refreshToken: '',
  },
  [test] : {}
});
export const actions = {
  [test](context, payload){
    context.commit(test, payload)
  }
}
export const mutations = {
  [test](state, payload){
    state[test] =payload;
  },
  // what?
  // eslint-disable-next-line no-shadow
  [setUserSession](st) {
    // st.
    const infoTokenStr = localStorage.getItem('infoToken');
    const infoToken = JSON.parse(infoTokenStr);
    const accessToken = localStorage.getItem('loginAccessToken');
    const refreshToken = localStorage.getItem('loginRefreshToken');

    st.loginSession = infoToken;
    // eslint-disable-next-line no-param-reassign
    st.loginSession.accessToken = accessToken;
    st.loginSession.refreshToken = refreshToken;
  },
  [removeUserSession](st) {
    // st.
    localStorage.setItem('infoToken', '');
    localStorage.setItem('loginAccessToken', '');
    localStorage.setItem('loginRefreshToken', '');

    st.loginSession = {};

    if (st.loginSession.aud === '') {
      st.loginSession.userdisplay = ' Login ';
    }
  },

  [refreshToken](st, {context, infoRes}) {
    const infoToken = JSON.parse(context.$parseJwt(infoRes.jwt));
    const accessToken = infoRes.jwt;
    const refreshToken = infoRes.refresh ? infoRes.refresh : '';

    st.loginSession = infoToken;
    st.loginSession.accessToken = accessToken;
    st.loginSession.refreshToken = refreshToken;
  },
  testAct(st, {context}) {
    context.$testHellow('순심이');
  },
};

export const getters = {
  [loginSession]: (st) => {
    return st.loginSession;
  },

};

export default {
  state,
  // 동기적 setter
  mutations,
  // 비동기적 setter
  actions,
  // getter
  getters
};
