<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-27 10:52:08
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-06-15 11:10:34
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
        实施方案项目区名称
        <el-input
          class="search-input"
          v-model="queryParams.projectName"
        ></el-input>
        项目编号
        <el-input
          class="search-input"
          v-model="queryParams.projectAreaCode"
        ></el-input>
        拆旧地块编号
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
                rows: 10,
                page: 1,
                regionCode: '',
                projectAreaCode: '',
                landCode: '',
                projectName: '',
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
        <el-button
            type="primary"
            icon="iconfont icon-addNode"
            @click="$router.push({ name: 'addSchememanager', params: { type: 'isAdd' } })"
        >新增</el-button>
        <el-button
          type="primary"
          icon="iconfont icon-shanchu"
          @click="handleDropdownChange('delete')"
          >批量删除</el-button>
        <el-button type="primary" icon="iconfont icon-tongbu">同步</el-button>
      </div>
      <el-table
        v-loading="loading"
        ref="singleTable"
        :data="tableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="70" label="序号"></el-table-column>
        <el-table-column property="regionName" label="所属区县"></el-table-column>
        <el-table-column property="projectAreaCode" label="项目区编号"></el-table-column>
        <el-table-column property="projectName" label="实施方案项目区名称"></el-table-column>
        <el-table-column property="projectState" label="项目状态"> </el-table-column>
        <el-table-column property="approvalNo" label="实施方案批文号"></el-table-column>
        <el-table-column property="approvalDate" label="批复日期"> </el-table-column>
        <el-table-column property="occupyType" label="报批用地类型">
        </el-table-column>
        <el-table-column property="targetType" label="挂钩指标类型">
        </el-table-column>
        <el-table-column property="landArea" label="地块总面积（公顷）">
        </el-table-column>
        <el-table-column property="farmingArea" label="选用农用地面积">
        </el-table-column>
        <el-table-column property="plowlandArea" label="选用耕地面积">
        </el-table-column>
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
                <el-dropdown-item icon="iconfont icon-xiugai" command="map"
                  >上图查看</el-dropdown-item
                >
                <el-dropdown-item icon="iconfont icon-xiugai" command="update"
                  >编辑</el-dropdown-item
                >
                <el-dropdown-item icon="iconfont icon-shanchu" command="delete"
                  >删除</el-dropdown-item
                >
                <el-dropdown-item
                  icon="iconfont icon-zhandianditu"
                  command="inset"
                  >入库</el-dropdown-item
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
import {
  findTargetExecuteProject,
  deleteTargetExecuteProject,
} from "@/api/scheme";
import {deleteSpecialManage} from "@/api/subjectPlan";
export default {
  data() {
    return {
      loading: false,
      regionOptions: [],
      tableData: [],
      queryParams: {
        rows: 10,
        page: 1,
        regionCode: "",
        projectAreaCode: "",
        landCode: "",
        projectName: "",
      },
      total: 0,
      multipleSelection:[],

    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getList();
      this.getRegion();
    },
    getList() {
      this.loading = true;
      findTargetExecuteProject(this.queryParams).then((res) => {
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
    getRegion() { //查询所属区域
      findArcSysArea().then((res) => {
        this.regionOptions = res.data;
      });
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
          name: "addSchememanager",
          params: { type: "see", id: id },
        });
      } else if (type === "update") {
        this.$router.push({
          name: "addSchememanager",
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
          deleteTargetExecuteProject(id).then((res) => {
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
