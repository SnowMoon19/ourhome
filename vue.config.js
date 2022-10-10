const { defineConfig } = require('@vue/cli-service')
const dev_ip = "localhost:8007"
// const prop_ip = ""
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/snowMoon": {
        target: dev_ip,
        changeOrigin: true, // 是否改变域名
        ws: true
      }
    },
    port: 9003
  }
})
