
<template>
  <div>
    <div class="container-search">
      <div>
        <el-select placeholder="所属区域" v-model="queryParams.regionName">
          <el-option
            v-for="item in regionOptions"
            :key="item.regionCode"
            :label="item.regionName"
            :value="item.regionName"
          >
          </el-option>
        </el-select>
        项目编号
        <el-input class="search-input"></el-input>
        地块编号
        <el-input class="search-input"></el-input>
        <el-select placeholder="复垦进度" v-model="queryParams.progress">
          <el-option
            v-for="item in progressOptions"
            :key="item.itemCode"
            :label="item.itemCode"
            :value="item.itemValue"
          >
          </el-option>
        </el-select>
        <div
          class="container-search-secound"
          :class="{ 'container-search-secound-keep': !isModeIcon }"
        >
          <el-select placeholder="项目状态" v-model="queryParams.projectState">
            <el-option
              v-for="item in projectStateOptions"
              :key="item.itemCode"
              :label="item.itemCode"
              :value="item.itemValue"
            >
            </el-option>
          </el-select>
          <el-select
            placeholder="地块流转情况"
            v-model="queryParams.movingCase"
          >
            <el-option
              v-for="item in movingCaseOptions"
              :key="item.itemCode"
              :label="item.itemCode"
              :value="item.itemValue"
            >
            </el-option>
          </el-select>
          <el-select
            placeholder="地块报批使用情况"
            v-model="queryParams.approvalUseCase"
          >
            <el-option
              v-for="item in approvalUseCaseOptions"
              :key="item.itemCode"
              :label="item.itemCode"
              :value="item.itemValue"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div>
        <el-button type="text" @click="handleSearchMore">
          更多
          <i
            :class="[isModeIcon ? 'el-icon-arrow-down' : 'el-icon-arrow-right']"
          ></i
        ></el-button>
        <el-button type="primary" icon="iconfont icon-chaxun" @click="getList()"
          >查询</el-button
        >
        <el-button
          type="primary"
          icon="iconfont icon-zhongzhi"
          @click="
            () => {
              queryParams = {
                page: 1,
                rows: 10,
                regionName: '',
                progress: '',
                projectState: '',
                movingCase: '',
                approvalUseCase: '',
              };
              getList();
            }
          "
          >重置</el-button
        >
      </div>
    </div>
    <div class="container-main">
      <div class="table-handles">
        <el-button type="primary" icon="iconfont icon-shanchu">导入</el-button>
        <el-button type="primary" icon="iconfont icon-daochu">导出</el-button>
        <el-button type="primary" icon="iconfont icon-shanchu">删除</el-button>
        <el-button type="primary" icon="iconfont icon-shenheguanli"
          >审查</el-button
        >
        <el-button type="primary" icon="iconfont icon-zhuangweibaopei-yanshou"
          >验收</el-button
        >
      </div>
      <el-table
        v-loading="loading"
        ref="singleTable"
        :data="tableData"
        @current-change="handleCurrentChange"
      >
        <el-table-column type="selection" width="55" fixed> </el-table-column>
        <el-table-column type="index" width="70" label="序号">
        </el-table-column>
        <el-table-column
          property="landCode"
          width="158"
          label="地块编号"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          property="regionName"
          width="158"
          label="所属区域"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          property="projectNo"
          width="116"
          label="所属项目编号"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          property="progress"
          width="88"
          label="复垦进度"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          property="projectState"
          width="88"
          label="项目状态"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          width="178"
          property="buildArea"
          label="地块建设规模(公顷)"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          width="158"
          property="farmingArea"
          label="地块新增农用地面积"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          property="caseType"
          width="158"
          label="地块挂钩转占补情况"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          property="movingCase"
          width="158"
          label="地块流转情况"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          property="contractNo"
          width="158"
          label="地块流转合同号"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          property="address"
          width="158"
          label="地块报批使用情况"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          property="projectAreaCode"
          width="158"
          label="挂钩实施方案项目区编号"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          property="surplusFarmingArea"
          width="158"
          label="地块剩余可用新增农用地面积"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          property="surplusPloughArea"
          width="158"
          label="地块剩余可用新增耕地面积"
        >
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          property="ploughArea"
          width="158"
          label="地块新增耕地面积"
        >
        </el-table-column>
        <el-table-column class-name="caozuo-column" fixed="right" width="128">
          <template slot="header" slot-scope="scope">
            <div class="table-caozuo">
              <span>操作</span>
              <i class="iconfont icon-xitongweihu"></i>
            </div>
          </template>
          <template slot-scope="scope">
            <div>
              <el-dropdown
                trigger="click"
                @command="(type) => handleDropdownChange(type, scope.row)"
              >
                <span class="el-dropdown-link">
                  <i class="ddd-title">...</i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    icon="iconfont icon-xiangqingchakan"
                    command="see"
                    >查看详情</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="iconfont icon-xiangqingchakan"
                    command="map"
                    >上图查看</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="iconfont icon-xiugai"
                    v-if="scope.row.progress == '待审查'"
                    command="update"
                    >修改</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="iconfont icon-shanchu"
                    v-if="scope.row.progress == '待审查'"
                    command="delete"
                    >删除</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="iconfont icon-zhandianditu"
                    v-if="scope.row.progress == '待审查'"
                    command="examine"
                    >审查</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="iconfont icon-zhandianditu"
                    v-if="scope.row.progress == '待核验'"
                    command="accept"
                    >验收</el-dropdown-item
                  >
                  <el-dropdown-item
                    icon="iconfont icon-zhandianditu"
                    command="edit"
                    v-if="scope.row.progress == '已核验'"
                    >编辑</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <xx-pagination
        @getPagination="getPagination"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </div>
  </div>
</template>
<script>
import {
  findLandDemolitionOld,
  deleteLandDemolitionOld,
  updateLandDemolitionOld,
} from "@/api/dismantlingOld";
import { findArcSysArea, findDictDetail } from "@/api/common";
export default {
  data() {
    return {
      isModeIcon: false,
      regionOptions: [],
      progressOptions: [],
      loading: false,
      queryParams: {
        page: 1,
        rows: 10,
        regionName: "", //所属区域
        progress: "", //复垦进度
        projectState: "",
        movingCase: "",
        approvalUseCase: "",
      },
      tableData: [],
      total: 0,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getList();
      this.getRegion();
      this.getDict();
    },
    getRegion() {
      findArcSysArea().then((res) => {
        this.regionOptions = res.data;
      });
    },
    getDict() {
      findDictDetail("fkjd").then((res) => {
        this.progressOptions = res.data;
      });
      findDictDetail("xmzt").then((res) => {
        this.projectStateOptions = res.data;
      });
      findDictDetail("lzqk").then((res) => {
        this.movingCaseOptions = res.data;
      });
      findDictDetail("bpsyqk").then((res) => {
        this.approvalUseCaseOptions = res.data;
      });
    },
    getList() {
      this.loading = true;
      findLandDemolitionOld(this.queryParams).then((res) => {
        this.tableData = res.data;
        this.total = res.total;
        this.loading = false;
      });
    },
    xxx() {
      alert("查看被点击了");
    },
    ddd() {
      alert("删除被点击了");
    },
    handleSearchMore() {
      this.isModeIcon = !this.isModeIcon;
    },
    handleDropdownChange(type, data) {
      if (type === "update") {
        //修改
        this.$router.push({
          name: "amend",
          params: { id: data.id, type: "update" },
        });
      } else if (type === "examine") {
        //审查
        this.$router.push({
          name: "amend",
          params: { id: data.id, type: "examine" },
        });
      } else if (type === "delete") {
        //删除
        deleteLandDemolitionOld([data.id]).then((res) => {
          this.$message({
            type: "success",
            message: "成功",
          });
          this.getList();
        });
      } else if (type === "accept") {
        //验收
        this.$router.push({
          name: "unverification",
          query: { type: "accept", id: data.id },
        });
      } else if (type === "edit") {
        //编辑
        this.$router.push({
          name: "verification",
          query: { type: "edit", id: data.id },
        });
      } else if (type === "see") {
        //查看详情
        if (data.progress == "待核验") {
          this.$router.push({
            name: "unverification",
            query: { type: "see", id: data.id },
          });
        } else if (data.progress == "已核验") {
          this.$router.push({
            name: "verification",
            query: { type: "see", id: data.id },
          });
        }
      }
    },
  },
};
</script>
