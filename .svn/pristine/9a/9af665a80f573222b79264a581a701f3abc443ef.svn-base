<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-26 15:40:53
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-05-12 10:34:25
-->

<template>
  <div>
    <div class="container-search">
      <div>
        <el-select placeholder="所属区域" v-model="queryParams.regionCode">
          <el-option
            v-for="item in regionOptions"
            :key="item.regionCode"
            :label="item.regionName"
            :value="item.regionCode"
          >
          </el-option>
        </el-select>
        合同号
        <el-input
          class="search-input"
          v-model="queryParams.contractNo"
        ></el-input>
        流转日期
        <el-date-picker
          v-model="queryDate"
          type="datetimerange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div>
        <el-button
          type="primary"
          icon="iconfont icon-chaxun"
          @click="() => getList()"
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
                regionCode: '',
                contractNo: '',
                movingDateStart: '',
                movingDateEnd: '',
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
        <el-button
          type="primary"
          icon="iconfont icon-addNode"
          @click="$router.push({ name: 'addtarget' })"
          >新增</el-button
        >
        <el-button type="primary" icon="iconfont icon-shanchu">删除</el-button>
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
        <el-table-column property="contractNo" label="地块流转合同号">
        </el-table-column>
        <el-table-column property="competitivePerson" label="竞得人">
        </el-table-column>
        <el-table-column property="regionName" label="所属区域">
        </el-table-column>
        <el-table-column property="movingDate" label="流转日期">
        </el-table-column>
        <el-table-column
          property="transactionArea"
          label="成交指标面积（公顷）"
        >
        </el-table-column>
        <el-table-column property="transactionPrice" label="成交价（万元）">
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <div class="table-caozuo">
              <span>操作</span>
              <i class="iconfont icon-xitongweihu"></i>
            </div>
          </template>
          <template slot-scope="scope">
            <el-dropdown
              trigger="click"
              @command="(type) => handleDropdownChange(type, scope.row)"
            >
              <span class="el-dropdown-link">
                <i class="ddd-title">...</i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  command="see"
                  icon="iconfont icon-xiangqingchakan"
                  >查看</el-dropdown-item
                >
                <el-dropdown-item command="update" icon="iconfont icon-xiugai"
                  >编辑</el-dropdown-item
                >
                <el-dropdown-item command="delete" icon="iconfont icon-shanchu"
                  >删除</el-dropdown-item
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
import {
  findTargetMoving,
  deleteTargetMoving,
} from "@/api/targetmanage/targetexchange";
import { findArcSysArea } from "@/api/common";
export default {
  data() {
    return {
      queryDate: undefined,
      loading: false,
      regionOptions: [],
      tableData: [],
      queryParams: {
        page: 1,
        rows: 10,
        regionCode: "",
        contractNo: "",
        movingDateStart: "",
        movingDateEnd: "",
      },
      total: 0,
    };
  },
  watch: {
    queryDate: function (newVal, oldVal) {
      console.log(
        newVal[0] instanceof Date,
        "后续赋值movingDateStart，movingDateEnd"
      );
    },
  },

  created() {
    this.init();
  },
  methods: {
    init() {
      this.getRegion();
      this.getList();
    },
    getList() {
      this.loading = true;
      findTargetMoving(this.queryParams).then((res) => {
        this.tableData = res.data;
        this.total = res.total;
        this.loading = false;
      });
    },
    getRegion() {
      findArcSysArea().then((res) => {
        this.regionOptions = res.data;
      });
    },

    handleDropdownChange(type, data) {
      if (type === "see") {
      } else if (type === "update") {
        this.$router.push({
          name: "addtarget",
          params: { type: "isUpdate", id: data.id },
        });
      } else if (type === "delete") {
        deleteTargetMoving(data.id).then((res) => {
          this.getList();
        });
      }
    },
  },
};
</script>
