<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "536px",
    },
  },
  data() {
    return {
      chart: null,
      text: "复垦新增耕地类型占比", //标题内容
      tabulate: [], //各园区用地规模数据
      xlist: [], //园区名称
      sjydmj: [], //用地面积
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  created() {},
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    async initChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$el, "macarons");
      //使用刚指定的配置项和数据显示图表。
      let options = {
        title: {
          text: "复垦新增耕地类型占比",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "建新地块总面积" },
              { value: 735, name: "使用拆旧面积" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.chart.setOption(options);
    },
  },
};
</script>
