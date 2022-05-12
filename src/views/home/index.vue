<template>
  <div class="app_container">
    <div class="filter_group card_box">
      <el-cascader
        clearable
        filterable
        v-model="areaCode"
        :options="options"
        class="input_width1"
        :props="defaultParams"
        @change="handleChange"
        placeholder="行政区"
      ></el-cascader>
    </div>
    <panel-group class="panel_group"></panel-group>
    <div class="echart_group">
      <el-row :gutter="32">
        <el-col :xs="8" :sm="8" :lg="8">
          <div class="chart_wrapper card_box2">
             <pie-chart />
          </div>
        </el-col>
        <el-col :xs="16" :sm="16" :lg="16">
          <div class="chart_wrapper card_box2">
            <reclamation-chart />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <div class="chart_wrapper chart_top card_box2">
            <area-chart />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup.vue";
import PieChart from './components/PieChart.vue';
import ReclamationChart from './components/ReclamationChart.vue';
import AreaChart from './components/AreaChart.vue';

export default {
  name: "index",
  components: {
    PanelGroup,
    AreaChart,
    ReclamationChart,
    PieChart
  },
  data() {
    return {
      defaultParams: {
        //区域相关
        label: "areaname",
        value: "areacode",
        children: "child",
        checkStrictly: true,
      },
    };
  },
  methods: {
    //选中的区域代码
    handleChange(val) {
      this.areaCode = val[val.length - 1]; //取最后一位
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
  .echart_group{
    margin-top:24px;
    .chart_wrapper{
      padding: 24px;
      height: 536px;
    }
    .chart_top{
      margin-top: 24px;
    }
  }
}
.input_width1 {
  width: 222px;
  height: 40px;
}
</style>
