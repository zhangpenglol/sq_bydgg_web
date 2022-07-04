<template>
  <div class="log_container">
    <div class="filter_box card_box">
      <div class="select_left">
        区域搜索
        <el-input
          clearable
          class="search_input"
          v-model="inputValue"
          placeholder="请输入关键字"
        ></el-input>
      </div>
      <div class="btn_right">
        <el-button
          icon="el-icon-search"
          class="input_width6"
          @click="getAreaList"
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
          @click="addArea"
          >新增</el-button
        >
        <el-button icon="el-icon-delete" class="input_width6" @click="reset"
          >删除</el-button
        >
      </div>
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column
          prop="regionName"
          label="区域名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="regionNameEs"
          label="拼音/英文"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="regionType"
          label="区划类型"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="isEnable"
          label="是否开放显示"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot="header" slot-scope="scope">
            <div class="table-caozuo">
              <span>操作</span>
              <i class="iconfont icon-xitongweihu"></i>
            </div>
          </template>
          <template slot-scope="scope">
            <!-- <el-dropdown @command="handleCommand($event)"> -->
              <el-dropdown @command="(e) => handleCommand(e,scope.row)">
              <span class="el-dropdown-link">
                <i class="ddd-title">...</i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="iconfont icon-xiangqingchakan"
                  command="a">查看</el-dropdown-item
                >
                <el-dropdown-item icon="iconfont icon-xiugai"
                  command="b">修改</el-dropdown-item
                >
                <el-dropdown-item
                  icon="iconfont icon-shanchu"
                  @click="handleDelete(scope.row)"
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
      <pagination
        :total="pageData.total"
        :page.sync="pageData.pageIndex"
        :limit.sync="pageData.pageSize"
        :autoScroll="false"
        @pagination="getAreaList"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import {
  findArcSysArea,
  findAreaCode,
  addAndUpdateAreaList,
  deleteAllAreaList,
} from "@/api/area.js";
export default {
  name: "logmanager",
  components: {
    Pagination,
  },
  data() {
    return {
      options1: [],
      tableData: [
        {
          rolename: "管理员",
        },
        {
          rolename: "德玛西亚",
        },
        {
          rolename: "暴走萝莉",
        },
      ],
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
    this.getAreaList();
  },
  methods: {
    getAreaList() {
      findArcSysArea().then((res) => {
        if (res.status !== 200) return this.$message.error("查询信息失败!");
        let { data, total } = res;
        this.tableData = data;
        this.pageData.total = total;
      });
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
      this.getAreaList();
    },
    handleCommand(e,aa){
      console.log(e,'22222')
      console.log(aa,'22222')
    },
    handleEdit(id){
      console.log('111111')
      this.$router.push({name:'addarea',params:{id}})
    },
    handleDelete(id) {
      console.log('111111324324')
      let params = {
        id: id,
      };
      deleteOperatelog(params).then((res) => {
        if (res.status !== 200) return this.$message.error("删除日志管理失败!");
        this.$message.success("删除日志管理成功!");
        this.getAreaList();
      });
    },
    addArea() {
      this.$router.push({ path: "/addarea" });
    },
  },
};
</script>

<style lang="scss" scoped>
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
  width: 188px;
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
.el-dropdown-link {
  cursor: pointer;
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