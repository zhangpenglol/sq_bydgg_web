/*
 * @Descripttion: 实现自动全局挂载组件（用于高频率使用的公共组件）
 * @Author: 李增辉
 * @Date: 2022-04-13 09:46:34
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-13 10:19:08
 */
import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  // 其组件目录的相对路径
  "./",
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /.vue/
);

requireComponent.keys().forEach((fileName) => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  console.log(componentName);
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});