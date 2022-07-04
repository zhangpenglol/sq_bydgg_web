<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-26 17:48:29
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-05-12 10:35:12
-->

<template>
  <div>
    <div class="container-search">
      <div>
        <el-select placeholder="所属区域" v-model="queryParams.region">
          <el-option
            v-for="item in regionOptions"
            :key="item.regionCode"
            :label="item.regionName"
            :value="item.regionCode"
          >
          </el-option>
        </el-select>
        <el-select placeholder="地块类型" v-model="queryParams.landType">
          <el-option label="全部" value="全部"></el-option>
          <el-option
            v-for="item in DKLXOptions"
            :key="item.itemCode"
            :label="item.itemValue"
            :value="item.itemValue"
          >
          </el-option>
        </el-select>
        建新地块名称
        <el-input
          class="search-input"
          v-model="queryParams.landCode"
        ></el-input>
      </div>
      <div>
        <el-button type="primary" icon="iconfont icon-chaxun" @click="getList()"
          >查询</el-button
        >
        <el-button
          type="primary"
          icon="iconfont icon-zhongzhi"
          @click="
            () => {
              queryParams = {
                region: '',
                rows: 10,
                page: 1,
                landType: '',
                landCode: '',
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
        <el-button type="primary" icon="iconfont icon-addNode">导出</el-button>
        <el-button type="primary" icon="iconfont icon-shanchu">删除</el-button>
        <el-button type="primary" icon="iconfont icon-shanchu">同步</el-button>
      </div>
      <el-table
        v-loading="loading"
        ref="singleTable"
        :data="tableData"
        @current-change="handleCurrentChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="70" label="序号">
        </el-table-column>
        <el-table-column property="date" label="建新地块名称">
        </el-table-column>
        <el-table-column property="name" label="地块类型"> </el-table-column>
        <el-table-column property="regionName" label="所属区域">
        </el-table-column>
        <el-table-column property="totalArea" label="地块总面积">
        </el-table-column>
        <el-table-column property="farmingArea" label="建新占用其他农用地面积">
        </el-table-column>
        <el-table-column property="unusedArea" label="建新占用未利用地面积">
        </el-table-column>
        <el-table-column property="buildArea" label="建新占用建设用地面积">
        </el-table-column>
        <el-table-column property="ploughArea" label="建新占用耕地面积">
        </el-table-column>
        <el-table-column property="ploughGrade" label="建新占用耕地等级">
        </el-table-column>
        <el-table-column property="address">
          <template slot="header" slot-scope="scope">
            <div class="table-caozuo">
              <span>操作</span>
              <i class="iconfont icon-xitongweihu"></i>
            </div>
          </template>
          <template slot-scope="scope">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="ddd-title">...</i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="iconfont icon-xiangqingchakan"
                  >查看</el-dropdown-item
                >
                <el-dropdown-item icon="iconfont icon-xiugai"
                  >修改</el-dropdown-item
                >
                <el-dropdown-item icon="iconfont icon-shanchu"
                  >删除</el-dropdown-item
                >
                <el-dropdown-item icon="iconfont icon-zhandianditu"
                  >地图审查</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <xx-pagination
        @getPagination="getPagination"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :limit="queryParams.rows"
      />
    </div>
  </div>
</template>
<script>
import { findArcSysArea, findDictDetail } from "@/api/common";
import { findNewLand } from "@/api/plotmanager";
export default {
  data() {
    return {
      loading: false,
      queryParams: {
        region: "",
        rows: 10,
        page: 1,
        landType: "",
        landCode: "",
      },
      regionOptions: [],
      DKLXOptions: [],
      tableData: [],
      total: 0,
    };
  },
  created() {
    this.init();
  },
  methods: {
    xxx() {
      alert("查看被点击了");
    },
    ddd() {
      alert("删除被点击了");
    },
    init() {
      this.getList();
      this.getRegion();
      this.getDict();
    },
    getList() {
      this.loading = true;
      findNewLand(this.queryParams).then((res) => {
        this.loading = false;
        this.tableData = res.data;
      });
    },
    getRegion() {
      findArcSysArea().then((res) => {
        this.regionOptions = res.data;
      });
    },
    getDict() {
      findDictDetail("dklx").then((res) => {
        this.DKLXOptions = res.data;
      });
    },
  },
};
</script>
