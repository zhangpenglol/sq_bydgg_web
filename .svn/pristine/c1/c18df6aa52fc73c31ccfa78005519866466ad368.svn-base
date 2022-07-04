<template>
  <div class="app_container">
    <div class="filter_group card_box">
      <Cascader @changeAreaCode="changeAreaCode"></Cascader>
    </div>
    <panel-group v-if="flag" :panelData="panelData" class="panel_group"></panel-group>
    <div class="echart_group">
      <el-row :gutter="32">
        <el-col :xs="8" :sm="8" :lg="8">
          <div class="chart_wrapper card_box2">
            <pie-chart v-if="flag" :panelData="panelData" />
          </div>
        </el-col>
        <el-col :xs="16" :sm="16" :lg="16">
          <div class="chart_wrapper card_box2">
            <div class="tabs_box">
              <div
                class="tabs_item"
                v-for="(item, index) in tabs"
                :key="index"
                :class="{ actived: current == index }"
                @click="changeChart(index)"
              >
                {{ item }}
              </div>
            </div>
            <reclamation-chart v-if="flag2" :current="current" :chartData="chartData" />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <div class="chart_wrapper chart_top card_box2">
            <area-chart v-if="flag2" :chartData="chartData"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup.vue";
import PieChart from "./components/PieChart.vue";
import ReclamationChart from "./components/ReclamationChart.vue";
import AreaChart from "./components/AreaChart.vue";
import Cascader from "../../components/Cascader/index.vue";
import { homePageCount ,homePageChart} from "@/api/homePage.js";
export default {
  name: "index",
  components: {
    PanelGroup,
    AreaChart,
    ReclamationChart,
    PieChart,
    Cascader,
  },
  data() {
    return {
      tabs: ["区域可用新增农用地排名", "区域可用新增耕地排名"],
      current: 0,
      regionCode: 223834, //选中的区域编码,默认为宿迁市
      panelData:{},
      flag:false,
      flag2:false,
      chartData:{},
    };
  },
  created() {
    this.getHomePageCount();
  },
  methods: {
    getHomePageCount() {
      let params = {
        regionCode: this.regionCode,
      };
      homePageCount(params).then((res) => {
        this.panelData = res.data;
        this.flag = true;
      });
      homePageChart(params).then((res) => {
        this.flag2 = true;
        this.chartData = res.data;
        console.log(res);
      });
    },
    changeAreaCode(data) {
      this.regionCode = data;
    },
    changeChart(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.app_container {
  font-size: 20px;
  .filter_group {
    width: 100%;
    height: 64px;
    padding: 12px 24px;
  }
  .panel_group {
    margin-top: 24px;
  }
  .echart_group {
    margin-top: 24px;
    .chart_wrapper {
      padding: 24px;
      height: 536px;
      .tabs_box {
        width: 374px;
        height: 48px;
        background: #ffffff;
        box-shadow: 0px 0px 10px 1px rgba(0, 36, 193, 0.3199999928474426);
        border-radius: 2px 2px 2px 2px;
        opacity: 1;
        font-size: 14px;
        display: flex;
        padding: 4px;
        .tabs_item {
          width: 50%;
          line-height: 40px;
          text-align: center;
          border: 2px;
          cursor: pointer;
        }
      }
    }
    .chart_top {
      margin-top: 24px;
    }
  }
}
.input_width1 {
  width: 222px;
  height: 40px;
}
.actived {
  background-color: #3757e2;
  color: #fff;
}
</style>
