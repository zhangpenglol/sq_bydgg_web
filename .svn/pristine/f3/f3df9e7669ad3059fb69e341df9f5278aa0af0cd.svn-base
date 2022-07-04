<template>
  <div class="log_container">
    <div class="filter_box card_box">
      <div class="select_left">
        <el-select
          class="input_width1"
          v-model="status"
          placeholder="启用状态"
          clearable
        >
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          clearable
          class="search_input"
          v-model="inputValue"
          placeholder="请输入"
        ></el-input>
      </div>
      <div class="btn_right">
        <el-button
          icon="el-icon-search"
          class="input_width6"
          @click="getTableData"
          >查询</el-button
        >
        <el-button icon="el-icon-refresh" class="input_width6" @click="reset"
          >重置</el-button
        >
      </div>
    </div>
    <div class="content_box card_box">
      <div class="btn_box">
        <el-button
          icon="el-icon-circle-plus-outline"
          class="input_width6"
          @click="addUser"
          >新增</el-button
        >
        <el-button icon="el-icon-delete" class="input_width6" @click="reset"
          >删除</el-button
        >
      </div>
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="createTime" sort-by label="时间" sortable>
          <template slot-scope="scope">
            {{ $dateFormat(scope.row.createTime) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="operator"
          label="姓名"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="userName"
          label="登录账号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="phone"
          label="手机号码"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="account"
          label="角色"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="location"
          label="启用状态"
          align="center"
        ></el-table-column>
        <el-table-column prop="IP" label="IP" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" align="center">
            <span @click="handleDelete(scope.row.id)">
              <i class="el-icon-delete icon_btn icon_delete"></i>
              <span class="txt_btn txt_delete">删除</span>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        :total="pageData.total"
        :page.sync="pageData.pageIndex"
        :limit.sync="pageData.pageSize"
        :autoScroll="false"
        @pagination="getUser"
      />
    </div>
  </div>
</template>

<script>
import {
  findUser
} from "@/api/user.js";
import Pagination from "@/components/Pagination";
export default {
  name: "logmanager",
  components: {
    Pagination,
  },
  data() {
    return {
      options1: [],
      tableData: [],
      searchValue: null,
      pageData: {
        pageIndex: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //合计
      },
      inputValue: null,
      starTimeValue: "",
      startTime: "",
      endTime: "",
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser(){
      let params = {

      }
      findUser().then(res=>{
        console.log(res)
        this.tableData = res.data;
        this.pageData.total = res.total;
      })
    },
    
    dateChange(v) {
      //处理修改时间后会报错的问题
      if (v) {
        this.startTime = v[0] + " " + "00:00:00";
        this.endTime = v[1] + " " + "23:59:59";
      } else {
        this.startTime = "";
        this.endTime = "";
      }
    },
    reset() {
      this.starTimeValue = [];
      this.startTime = "";
      this.endTime = "";
      this.inputValue = null;
      this.pageData.pageIndex = 1;
      this.getTableData();
    },
    handleDelete(id) {
      let params = {
        id: id,
      };
      deleteOperatelog(params).then((res) => {
        if (res.status !== 200) return this.$message.error("删除日志管理失败!");
        this.$message.success("删除日志管理成功!");
        this.getTableData();
      });
    },
    addUser(){
      this.$router.push({path:'/addUser'});
    }
  },
};
</script>

<style lang="scss" scoped>
.log_container {
}
.filter_box {
  display: flex;
  justify-content: space-between;
  padding: 12px 32px 12px 24px;
  margin-bottom: 24px;
}
.content_box {
  padding: 25px;
  min-height: 815px;
}
.search_input {
  width: 280px;
  margin-right: 10px;
}
.btn_box {
  margin-bottom: 24px;
}
.input_date {
  margin-right: 10px;
}
.txt_btn {
  cursor: pointer;
  color: #00fff4;
  font-size: 14px;
  padding-left: 10px;
}
.txt_delete {
  color: #ff2444;
}
</style>

<!--elementUI样式-->
<style scoped>
.el-input {
  /*width: 248px;*/
  height: 40px;
  /*background: rgba(14, 147, 162, 0.32);*/
  /*border-radius: 2px;*/
}
.el-input /deep/ .el-input__inner {
  border: 1px solid #aaaaaa;
}
.el-range-editor /deep/ .el-range-input {
  color: #aaaaaa;
}

.el-date-editor /deep/ .el-icon-date {
  color: #aaaaaa;
}

.el-range-editor.el-input__inner {
  width: 360px;
  height: 40px;
  border: 1px solid #aaaaaa;
}
.el-range-editor /deep/ .el-range-input {
  background: rgba(14, 147, 162, 0);
}

.el-date-editor /deep/ .el-range-separator {
  font-size: 14px;
  color: #aaaaaa;
}
.el-range-editor >>> .el-range-input::-webkit-input-placeholder {
  font-size: 14px;
  color: #aaaaaa;
}

.el-button {
  width: 120px;
  height: 40px;
  background: #3757e2;
  border-radius: 2px;
  color: #fff;
  border: 0;
}
/*表格样式*/
/* 用来设置当前页面element全局table的内间距 */
.el-table__row /deep/ td {
  padding: 55px;
}
</style>