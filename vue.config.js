const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
        '/api':{
            target: 'https://cyhdl1ttleyuming.cn/wx',//代理地址，这里设置的地址会代替axios中设置的baseURL
            changeOrigin: true,// 如果接口跨域，需要进行这个参数配置, 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
            //ws: true, // proxy websockets
            //pathRewrite方法重写url
            //pathRewrite: {'^/api': '/'} 重写之后url为 http://test.fastadmin.cn/xxxx
            //pathRewrite: {'^/api': '/api'} 重写之后url为 http://test.fastadmin.cn/api/xxxx
            pathRewrite: {
                '^/api': '/'
           }
      }
    }
},
})
