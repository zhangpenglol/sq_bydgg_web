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
    chartData:{
      type:Object,
      default:{},
    }
  },
  data() {
    return {
      chart: null,
      tabulate: [], //各园区用地规模数据
      regionName:[],
      jxdkzmj :[],
      sycjmj :[],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  created() {
    this.handle();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    handle(){
      this.chartData.jxdkzmj.forEach(item => {
        this.regionName.push(item.regionName)
        this.jxdkzmj.push(item.totalArea)
      });
      this.chartData.sycjmj.forEach(item => {
        this.sycjmj.push(item.totalArea)
      });
    },
    async initChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$el, "macarons");
      //使用刚指定的配置项和数据显示图表。
      let options = {
        title: {
          text: "区域复垦top10统计（按已核验复垦面积排名，区县/乡镇村，可钻取）",
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
        legend: {
          icon: "rect",
          data: ["建新地块总面积", "使用拆旧面积"],
          itemWidth: 32,
          left: "right",
          itemHeight: 4,
          itemGap: 10,
          textStyle: {
            //图例文字的样式
            color: "#333333",
            fontSize: 14,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
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
          },
        ],
        series: [
          {
            name: "建新地块总面积",
            type: "bar",
            barWidth: "32px",
            data: this.jxdkzmj,
            itemStyle: {
              normal: {
                //颜色渐变
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#5977F6",
                  },
                  {
                    offset: 1,
                    color: "#5977F6",
                  },
                ]),
              },
            },
          },
          {
            name: "使用拆旧面积",
            
            data: this.sycjmj,
            type: "bar",
            barWidth: "32px",
            itemStyle: {
              normal: {
                //颜色渐变
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#BB66E1",
                  },
                  {
                    offset: 1,
                    color: "#BB66E1",
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
