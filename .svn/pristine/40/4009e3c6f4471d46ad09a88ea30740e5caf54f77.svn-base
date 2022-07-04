<template>
  <div class="container">
    <el-cascader
      ref="myCascader"
      @change="handleChange"
      v-model="regionCode"
      placeholder="请选择"
      :props="areaprop"
    ></el-cascader>
  </div>
</template>

<script>
import { findArcSysArea, findAreaCode } from "../../api/area.js";
export default {
  data() {
    return {
      regionCode: null,
      areaprop: {
        lazy: true,
        lazyLoad(node, resolve) {
          setTimeout(() => {
            if (node.level == 0) {
              let params = {
                regionCode: "",
              };
              findAreaCode(params).then((response) => {
                const cities = response.data.map((value, i) => ({
                  value: value.regionCode,
                  label: value.regionName,
                  leaf: node.level >= 2,
                }));
                resolve(cities);
              });
            }
            if (node.level == 1) {
              let params = {
                regionCode: node.value,
              };
              findAreaCode(params).then((response) => {
                const areas = response.data.map((value, i) => ({
                  value: value.regionCode,
                  label: value.regionName,
                  leaf: node.level = 2,
                }));
                resolve(areas);
              });
            }
            // else if (node.level == 2) {
            //   findAreaCode(node.value).then((response) => {
            //     const areas = response.data.map((value, i) => ({
            //       value: value.regionCode,
            //       label: value.regionName,
            //       leaf: node.level >= 2,
            //     }));
            //     console.log(areas)
            //     resolve(areas);
            //   });
            // }
            else {
              this.$message.error("获取地区数据失败");
            }
          }, 100);
        },
      },
    };
  },
  created() {},
  methods: {
    handleChange(value) {
        this.$emit("changeAreaCode", value);
      },
  },
};
</script>

<style>
</style>