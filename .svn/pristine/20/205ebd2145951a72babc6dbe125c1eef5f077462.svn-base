<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-13 13:45:14
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-05-12 10:35:31
-->
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
        项目名称
        <el-input
          class="search-input"
          v-model="queryParams.projectName"
        ></el-input>
        项目编号
        <el-input
          class="search-input"
          v-model="queryParams.projectNo"
        ></el-input>
      </div>
      <div>
        <el-button
          type="primary"
          icon="iconfont icon-chaxun"
          @click="
            () => {
              getList();
            }
          "
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
                projectName: '',
                projectNo: '',
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
        <el-button
          type="primary"
          icon="iconfont icon-addNode"
          @click="
            () => {
              dialogFormVisible = true;
              dialogType = '新增复垦项目';
            }
          "
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
        <el-table-column type="selection" width="155"> </el-table-column>
        <el-table-column type="index" width="200" label="序号">
        </el-table-column>
        <el-table-column property="projectNo" label="项目编号">
        </el-table-column>
        <el-table-column property="projectName" label="项目名称">
        </el-table-column>
        <el-table-column property="regionName" label="所属区域">
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
              @command="(type) => handleDropdownChange(type, scope.row)"
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
    <el-dialog
      :close-on-press-escape="false"
      :show-close="false"
      :title="dialogType"
      width="30%"
      :visible.sync="dialogFormVisible"
      center
    >
      <el-form ref="dialogForm" :model="form" :rules="rules">
        <el-form-item
          label="项目编号"
          :label-width="formLabelWidth"
          prop="projectNo"
        >
          <el-input
            class="search-input"
            v-model.trim="form.projectNo"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="项目名称"
          :label-width="formLabelWidth"
          prop="projectName"
        >
          <el-input
            class="search-input"
            v-model.trim="form.projectName"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="所属区域"
          :label-width="formLabelWidth"
          prop="regionCode"
        >
          <el-select v-model="form.regionName">
            <el-option
              v-for="item in regionOptions"
              :key="item.regionName"
              :label="item.regionName"
              :value="item.regionName"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="
            () => {
              dialogFormVisible = false;
              this.form = {
                id: undefined,
                projectNo: '',
                regionCode: '',
                projectName: '',
              };
            }
          "
          >取 消</el-button
        >
        <el-button type="primary" @click="handleDialogForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  findReclamationProject,
  addAndUpdateProject,
} from "@/api/reclamationManager";
import { findArcSysArea, findDictDetail } from "@/api/common";
export default {
  data() {
    return {
      dialogType: "",
      dialogFormVisible: false,
      form: {
        id: undefined,
        projectNo: "",
        regionCode: "",
        projectName: "",
      },
      formLabelWidth: "120px",
      loading: false,
      regionOptions: [],
      tableData: [],
      queryParams: {
        page: 1,
        rows: 10,
        projectName: "",
        projectNo: "",
      },
      total: 0,
      rules: {
        projectNo: [{ required: true, message: "请输入", trigger: "blur" }],
        regionName: [{ required: true, message: "请输入", trigger: "change" }],
        projectName: [{ required: true, message: "请选择", trigger: "blur" }],
      },
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
    getRegion() {
      findArcSysArea().then((res) => {
        this.regionOptions = res.data;
      });
    },
    getList() {
      this.loading = true;
      findReclamationProject(this.queryParams).then((res) => {
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
    handleDialogForm() {
      this.$refs["dialogForm"].validate((valid) => {
        if (valid) {
          //新增/修改复垦
          addAndUpdateProject(this.form).then((res) => {
            this.$refs["dialogForm"].resetFields();
            this.dialogFormVisible = false;
            this.getList();
          });
        }
      });
    },
    handleDropdownChange(type, data) {
      if (type === "see") {
      } else if (type === "update") {
        this.dialogType = "修改复垦项目";
        this.dialogFormVisible = true;
        this.form.id = data.id;
        this.form.projectNo = data.projectNo;
        this.form.regionCode = data.regionCode;
        this.form.projectName = data.projectName;
      } else if (type === "delete") {
      }
    },
  },
};
</script>

<style scoped>
.el-form {
  padding-left: 30px;
}
</style>
