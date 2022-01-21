require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // 환경 설정 로드
// const ansiRegex = require('ansi-regex')

module.exports = {
  //아래 코드는 node_modules에 수정사항이 있으면 살려두고 아니면 주석처리
  // transpileDependencies: [ansiRegex],
  publicPath:
    process.env.NODE_ENV === "production" ? "/" : "/",

  configureWebpack: {
    // entry: ["babel-polyfill", "./src/main.js"],
    devServer: {
      watchOptions: {
        ignored: ["/node_modules/", "/public/"],
      }
    }
  },
  devServer: {
    // https: true,
    //    public: '0.0.0.0',
    //    disableHostCheck: true,
    proxy: {

      '/api': {
        // target: 'http://127.0.0.1:8080/',
        // target: 'http://220.120.40.80:8080',
        // target: 'http://localhost:10001/',

        target: 'http://nlb-internal-esman-backend-d48e302ac90e9d77.elb.ap-northeast-2.amazonaws.com',
        pathRewrite: {'^/api': '/'}
      },
    }
  }

};
