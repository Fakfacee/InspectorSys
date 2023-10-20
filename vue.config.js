const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath:'./',
  outputDir: 'InspectorSys',
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",
    port: 80,
    open: false,
    proxy: {
      // [process.env.VUE_APP_BASE_API]: {
      //   // target: "http://127.0.0.1:8080",
      //   target: "https://cyhdl1ttleyuming.cn/wx2/HZ26-6/",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ["^" + process.env.VUE_APP_BASE_API]: "",
      //   },
      // },
      "/dev-api/HZ26-6": {
        target: "https://cyhdl1ttleyuming.cn/wx2/HZ26-6/", //代理地址
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api/HZ26-6": "",
        },
      },
      "/dev-api/XJ30-2": {
        target: "https://cyhdl1ttleyuming.cn/wx2/XJ30-2/", //代理地址
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api/XJ30-2": "",
        },
      },
    },
  },
});
