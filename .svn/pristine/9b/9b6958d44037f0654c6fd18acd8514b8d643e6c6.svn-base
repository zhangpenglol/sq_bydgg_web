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
    panelData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      chart: null,
      text: "复垦新增耕地类型占比", //标题内容
      tabulate: [], //各园区用地规模数据
      xlist: [], //园区名称
      sjydmj: [], //用地面积
      kyxzgdlxzb: [],
      pieData: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  created() {
    this.filterArr();
  },

  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    filterArr() {
      this.kyxzgdlxzb = this.panelData.kyxzgdlxzb;
      let obj = {};
      this.kyxzgdlxzb.forEach((item) => {
        obj.name = item.ploughType;
        obj.value = item.ploughRatio;
        this.pieData.push(obj);
        obj = {};
      });
    },
    async initChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$el, "macarons");
      //使用刚指定的配置项和数据显示图表。
      let options = {
        title: {
          text: "可用新增耕地类型占比",
          left: "left",
          textStyle: {
            fontSize: 16,
            color: "#333333",
          },
        },
        color: ["#5977F6", "#FC6D94"],
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            var relVal =
              params.seriesName +
              "<br/>" +
              params.marker +
              params.data.name +
              " : " +
              params.data.value * 100 +
              "%";
            return relVal;
          },
        },
        legend: {
          icon: "rect",
          orient: "vertical",
          left: "right",
          itemWidth: 32,
          itemHeight: 4,
          itemGap: 10,
        },
        series: [
          {
            name: "可用新增耕地类型占比",
            type: "pie",
            radius: "50%",
            data: this.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            itemStyle: {
              normal: {
                color: function (colors) {
                  var colorList = ["#5977F6", "#FC6D94"];
                  return colorList[colors.dataIndex];
                },
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
