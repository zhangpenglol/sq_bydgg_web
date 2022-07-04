<template>
  <div class="panel_group">
    <div class="card_panel card_box">
      <img src="@/assets/images/yhy.png" />
      <div class="describe_box">
        <div class="describe_label">已核验拆旧面积</div>
        <div class="describe_value">
          <span>{{ panelData.yhycjmj }}</span>
        </div>
      </div>
    </div>
    <div class="card_panel card_box">
      <img src="@/assets/images/jxicon.png" />
      <div class="describe_box">
        <div class="describe_label">建新使用拆旧面积</div>
        <div class="describe_value">
          <span>{{ panelData.jxsycjmj }}</span>
        </div>
      </div>
    </div>
    <div class="card_panel card_box">
      <img src="@/assets/images/lz.png" />
      <div class="describe_box">
        <div class="describe_label">流转指标面积</div>
        <div class="describe_value">
          <span>{{ panelData.lzzbmj }}</span>
        </div>
      </div>
    </div>
    <div class="card_panel card_box">
      <img src="@/assets/images/syicon.png" />
      <div class="describe_box">
        <div class="describe_label">当前结余指标面积</div>
        <div class="describe_value">
          <span>{{ panelData.dqjyzbmj }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    panelData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.panel_group {
  width: 100%;
  height: 132px;
  display: flex;
  justify-content: space-between;
  .card_panel {
    width: 25%;
    height: 132px;
    display: flex;
    padding: 30px 48px;
    margin-right: 24px;
    cursor: pointer;
    &:nth-child(4) {
      margin-right: 0;
    }
    img {
      width: 72px;
      height: 72px;
      margin-right: 40px;
    }
    .describe_box {
      .describe_label {
        margin-top: 10px;
        font-size: 18px;
      }
      .describe_value {
        font-size: 20px;
        margin-top: 10px;
        color: #fc6d94;
      }
    }
  }
}
</style>