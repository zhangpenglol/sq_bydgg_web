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
      default: "100%",
    },
    chartData: {
      type: Object,
      default: {},
    },
    current: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    current: {
      handler: function (newValue, oldValue) {
        this.handlerCurrent(newValue);
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      chart: null,
      tabulate: [],
      regionName: [],
      surplusPloughArea: [],
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
    handlerCurrent(index) {
      this.regionName = [];
      this.surplusPloughArea = [];
      if (index == 0) {
        this.chartData.qykyxzgdpm.forEach((item) => {
          this.regionName.push(item.regionName);
          this.surplusPloughArea.push(item.surplusPloughArea);
        });
      } else if (index == 1) {
        this.chartData.qykyxznydpm.forEach((item) => {
          this.regionName.push(item.regionName);
          this.surplusPloughArea.push(item.surplusFarmingArea);
        });
      }
      this.initChart();
    },
    async initChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$el, "macarons");
      //使用刚指定的配置项和数据显示图表。
      let options = {
        title: {
          textStyle: {
            fontSize: 16,
            color: "#333333",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // legend: {
        //   icon: "rect",
        //   data: ["建新地块总面积", "使用拆旧面积"],
        //   itemWidth: 4, // 设置宽度
        //   itemHeight: 4, // 设置高度
        //   itemGap: 8, // 设置间距
        //   textStyle: {
        //     //图例文字的样式
        //     color: "#333333",
        //     fontSize: 14,
        //   },
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.regionName,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 600,
            interval: 50,
          },
        ],
        series: [
          {
            name: "建新地块总面积",
            type: "bar",
            barWidth: "32px",
            data: this.surplusPloughArea,
            itemStyle: {
              normal: {
                //颜色渐变
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#FC6D94",
                  },
                  {
                    offset: 1,
                    color: "#3757E2",
                  },
                ]),
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
