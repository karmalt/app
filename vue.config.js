const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  //关闭eslint
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  //静态资源路径
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/appOnline/' // *** 注意修改文件名
      : '/',
})
