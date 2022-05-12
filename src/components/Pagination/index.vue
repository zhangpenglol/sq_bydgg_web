<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from "@/utils/scroll-to";

export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 20,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      },
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    background: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      },
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pagination", { page: this.currentPage, limit: val });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handleCurrentChange(val) {
      this.$emit("pagination", { page: val, limit: this.pageSize });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
  },
};
</script>

<style scoped>
.pagination-container {
  /* background: #404458; */
  padding: 32px 16px;
}
.el-pagination {
  margin-top: 20px;
  text-align: right;
}
.pagination-container.hidden {
  display: none;
}

.el-pagination /deep/ .el-pagination__total {
  line-height: 32px;
  color: #777777;
}
.el-pagination /deep/ .el-pagination__jump {
  color: #777777;
}
.el-pagination /deep/ .el-select .el-input .el-input__inner {
  color: #777777;
}
.el-pagination /deep/ .el-input .el-input__inner {
  height: 32px;
  color: #777777;
}
.el-pagination /deep/ .btn-next {
  height: 32px;
  color: #777777;
}
.el-pagination /deep/ .btn-prev {
  height: 32px;
  color: #777777;
}
.el-pagination.is-background /deep/ .el-pager li {
  height: 32px;
  border-radius: 2px;
  color: #777777;
  border: 1px solid rgba(255, 255, 255, 0.4);
}
/*带背景的分页按钮背景色begin*/
.el-pagination.is-background /deep/ .el-pager li:not(.disabled).active {
  height: 32px;
  background-color: #3757E2;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  border-radius: 2px;
}
.el-pagination.is-background .el-pager li.active {
   cursor: default;
}
.el-pagination.is-background .el-pager li:hover {
  color: #08c0b9;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #08c0b9;
}
.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
  background-color: #08c0b9;
  color: #777777;
}


/*不带背景的分页按钮背景色begin*/
.el-pager li.active {
  color: #08c0b9;
  cursor: default;
}
.el-pagination .el-pager li:hover {
  color: #08c0b9;
}
.el-pagination .el-pager li:not(.disabled):hover {
  color: #08c0b9;
}
/*不带背景的分页按钮背景色end*/
</style>
