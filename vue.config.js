// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,//关闭语法检查
//   //开启代理服务器
//   devServer: {
//     proxy: 'http://localhost:5000'
//   }
// })
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  lintOnSave: false,
  //开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5001'
  // }
  // 开启代理服务器（方式二）
  // 如果你想要更多的代理控制行为
  devServer: {
    proxy: {
      // /api请求前缀
      '/atguigu': {
        target: 'http://localhost:5000',
        //重写path包含正则表达式key:value
        pathRewrite: { '^/atguigu': '' },
        ws: true,//用于支持websocket
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        //重写path包含正则表达式key:value
        pathRewrite: { '^/demo': '' },
        ws: true,//用于支持websocket
        changeOrigin: true
      },
    }
  }
}