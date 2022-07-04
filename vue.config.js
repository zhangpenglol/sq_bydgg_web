const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
require("events").EventEmitter.defaultMaxListeners = 0;
// 引入等比适配插件
const px2rem = require("postcss-px2rem");

// 配置基本大小
const postcss = px2rem({
  remUnit: 192,
});

// 使用等比适配插件
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: true,
  devServer: {
    //history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: "/index.html",
    },
    open: true,
    proxy: {
      "/idlcore": {
        // target: "http://idl.3xgc.net/idlcore",
        //target: "http://192.168.1.16:8990 ", //夏雯
        target: "http://192.168.1.8:8990", //夏雯
      },
      "/intergis": {
        target: "http://idl.3xgc.net/intergis",
      },
    },
  },
  css: {
    extract: false, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: true, // 开启 CSS source maps?
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"));
  },
};
