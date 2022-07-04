<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-13 13:45:14
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-14 09:55:19
-->
<template>
  <div>
    <div class="container-search">
      <div>
        <el-select placeholder="所属区域" v-model="queryParmas.region">
          <el-option
            v-for="item in regionOptions"
            :key="item.regionCode"
            :label="item.regionName"
            :value="item.regionCode"
          >
          </el-option>
        </el-select>
        <el-date-picker
            class="input_date"
            value-format="yyyy"
            v-model="queryParmas.startYear"
            type="year"
            placeholder="规划期开始年份">
        </el-date-picker>
        -
        <el-date-picker
            class="input_date"
            value-format="yyyy"
            v-model="queryParmas.endYear"
            type="year"
            placeholder="规划期结束年份">
        </el-date-picker>
<!--        <el-select placeholder="规划期(年)" v-model="quetyPlanDate">-->
<!--          <el-option-->
<!--            v-for="item in planDateOptions"-->
<!--            :key="item.itemCode"-->
<!--            :label="item.itemCode"-->
<!--            :value="item.itemValue"-->
<!--          >-->
<!--          </el-option>-->
<!--        </el-select>-->
      </div>
      <div>
        <el-button
          type="primary"
          icon="iconfont icon-chaxun"
          @click="getList"
          >查询</el-button
        >
        <el-button
          type="primary"
          icon="iconfont icon-zhongzhi"
          @click="resetQuery"
          >重置</el-button
        >
      </div>
    </div>
    <div class="container-main">
      <div class="table-handles">
        <el-button
          type="primary"
          icon="iconfont icon-addNode"
          @click="$router.push({ name: 'addsubject', params: { type: 'isAdd' } })"
        >新增</el-button>
        <el-button type="primary" icon="iconfont icon-shanchu" @click="handleDropdownChange('delete')">批量删除</el-button>
      </div>
      <el-table
        v-loading="loading"
        ref="singleTable"
        :data="tableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="70" label="序号">
        </el-table-column>
        <el-table-column property="planName" label="规划名称">
        </el-table-column>
        <el-table-column property="regionName" label="所属区域">
        </el-table-column>
        <el-table-column label="规划期（年）">
          <template slot-scope="scope">
            {{ `${scope.row.startYear}-${scope.row.endYear} ` }}
          </template>
        </el-table-column>
        <el-table-column
          property="demolishedArea"
          label="农村建设用地拆旧区总面积（公顷）"
        >
        </el-table-column>
        <el-table-column property="reclamationArea" label="复垦面积（公顷）">
        </el-table-column>
        <el-table-column property="balanceArea" label="建新面积（公顷）">
        </el-table-column>
        <el-table-column property="surplusArea" label="结余面积（公顷）">
        </el-table-column>
        <el-table-column property="address" label="地块上图"> </el-table-column>
        <el-table-column property="address">
          <template slot="header" slot-scope="scope">
            <div class="table-caozuo">
              <span>操作</span>
              <i class="iconfont icon-xitongweihu"></i>
            </div>
          </template>
          <template slot-scope="scope">
            <el-dropdown
              trigger="click"
              @command="(type) => handleDropdownChange(type, scope.row.id)"
            >
              <span class="el-dropdown-link">
                <i class="ddd-title">...</i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  icon="iconfont icon-xiangqingchakan"
                  command="see"
                  >查看</el-dropdown-item
                >
                <el-dropdown-item icon="iconfont icon-xiugai" command="update"
                  >修改</el-dropdown-item
                >
                <el-dropdown-item icon="iconfont icon-shanchu" command="delete"
                  >删除</el-dropdown-item
                >
<!--                <el-dropdown-item-->
<!--                  icon="iconfont icon-zhandianditu"-->
<!--                  command="map"-->
<!--                  >地图审查</el-dropdown-item-->
<!--                >-->
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <xx-pagination
        @getPagination="getPagination"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :limit="queryParmas.rows"
      />
    </div>
  </div>
</template>
<script>
import { findSpecialManage, deleteSpecialManage } from "@/api/subjectPlan";
import { findArcSysArea, findDictDetail } from "@/api/common";
export default {
  data() {
    return {
      loading: false,
      queryParmas: {
        page: 1,
        rows: 10,
        regionCode: "",
        startYear: "",
        endYear: "",
      },
      regionOptions: [],
      planDateOptions: [],
      tableData: [],
      total: 0,
      multipleSelection:[],
    };
  },
  created() {
    this.init();
  },
  // computed: {
  //   quetyPlanDate: {
  //     get: function () {
  //       return "";
  //     },
  //     set: function (newValue) {
  //       console.log(
  //         newValue,
  //         "将传递的数值解析为传递的查询参数中的queryParmas.startYear,queryParmas.en  dYear "
  //       );
  //     },
  //   },
  // },

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
      findDictDetail("ghq").then((res) => {
        this.planDateOptions = res.data;
      });
    },
    resetQuery() {
      this.queryParmas={
        page: 1,
        rows: 10,
        regionCode: "",
        startYear: "",
        endYear: "",
      }
    },
    getList() {
      this.loading = true;
      findSpecialManage(this.queryParmas).then((res) => {
        this.tableData = res.data;
        this.total = res.total;
        this.loading = false;
      });
    },
    getPagination({ limit, page }) {
      this.queryParmas.rows = limit;
      this.queryParmas.page = page;
      this.getList();
    },
    handleSelectionChange(val) {
      let ids = []
      val.map(item => {
        ids.push(item.id)
      })
      this.multipleSelection = ids;
    },
    handleDropdownChange(type, id) {
      if (type === "see") {
        this.$router.push({
          name: "addsubject",
          params: { type: "see", id: id },
        });
      } else if (type === "update") {
        this.$router.push({
          name: "addsubject",
          params: { type: "isUpdate", id: id },
        });
      } else if (type === "delete") {
        if(!id){
          if (this.multipleSelection.length === 0) return this.$message.warning("请先勾选删除项");
        }else {
          this.multipleSelection = null;
        }
        id = this.multipleSelection == null ?  id : this.multipleSelection.join(',');
        this.$confirm('删除后不可恢复，是否确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteSpecialManage(id).then((res) => {
            this.getList();
            this.multipleSelection = [];
          });
        }).catch(() => {
          this.$message.info("已取消删除");
        });
      } else if (type === "map") {
      }
    },
  },
};
</script>
<style scoped lang="scss">
.input_date{

}
</style>
