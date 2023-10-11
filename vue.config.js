const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 80,
    open: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
      "/dev-api": {
        // target: "http://localhost:8080",
        target: "https://cyhdl1ttleyuming.cn/wx2/HZ26-6", //代理地址
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api": "",
        },
      },
      "/accept-prod-api": {
        target: "https://cyhdl1ttleyuming.cn/wx2/HZ26-6", //代理地址
        changeOrigin: true,
        pathRewrite: {
          "^/accept-prod-api": "",
        },
      },
    },
  },
});
