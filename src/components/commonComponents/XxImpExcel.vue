<!--
 * @Descripttion:
              beforeUpload: Function（file）  return false/true决定是否进行解析文件（用于前期对对文件的判断）, 
               onSuccess: Function, 
           导入Excel,给后端进行解析，通过回调函数的形式进行进行， 
               现在的业务要求是：
                              1.表头校验是否是对应的参数类型
                              2.不同管理页面的导入excel都用同一个接口，根据不同的类型进行判断，将发送formdata给后端以file的形式
                         
              组件初始化:
                         定义一个表头校验的参数
                         定义一个上传前校验的回调函数？（再次封装下，自定义文件的大小的参数，固定校验文件类型，所以定义一个参数吧，为了后期的扩展，建议接收为object对象）
                         定义一个成功上传后的回调函数（自己处理一些表格刷新等操作）
              组件交互:
                         点击按钮后选择文件
                        
             
 * @Author: 李增辉
 * @Date: 2022-04-13 10:27:21
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-13 11:10:15
-->
<template>
  <div>
    <input
      ref="excel-upload-input"
      class="excel-upload-input"
      type="file"
      accept=".xlsx, .xls"
      @change="handleClick"
    />
    <!-- <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
      Drop excel file here or -->
    <el-button
      :loading="loading"
      style="margin-left: 16px"
      size="mini"
      type="primary"
      @click="handleUpload"
    >
      导入excel
    </el-button>
    <!-- </div> -->
  </div>
</template>

<script>
import XLSX from "xlsx";

export default {
  props: {
    beforeUpload: Function, // eslint-disable-line
    onSuccess: Function, // eslint-disable-line
  },
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null,
      },
    };
  },
  methods: {
    generateData({ header, results }) {
      this.excelData.header = header;
      this.excelData.results = results;
      this.onSuccess && this.onSuccess(this.excelData);
    },
    // handleDrop(e) {
    //   e.stopPropagation()
    //   e.preventDefault()
    //   if (this.loading) return
    //   const files = e.dataTransfer.files
    //   if (files.length !== 1) {
    //     this.$message.error('Only support uploading one file!')
    //     return
    //   }
    //   const rawFile = files[0] // only use files[0]

    //   if (!this.isExcel(rawFile)) {
    //     this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')
    //     return false
    //   }
    //   this.upload(rawFile)
    //   e.stopPropagation()
    //   e.preventDefault()
    // },
    // handleDragover(e) {
    //   e.stopPropagation()
    //   e.preventDefault()
    //   e.dataTransfer.dropEffect = 'copy'
    // },
    handleUpload() {
      this.$refs["excel-upload-input"].click();
    },
    handleClick(e) {
      const files = e.target.files;
      const rawFile = files[0]; // only use files[0]
      if (!rawFile) return;
      this.upload(rawFile);
    },
    upload(rawFile) {
      this.$refs["excel-upload-input"].value = null; // fix can't select the same excel

      if (!this.beforeUpload) {
        this.readerData(rawFile);
        return;
      }
      const before = this.beforeUpload(rawFile);
      if (before) {
        this.readerData(rawFile);
      }
    },
    readerData(rawFile) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const header = this.getHeaderRow(worksheet);
          const results = XLSX.utils.sheet_to_json(worksheet);
          this.generateData({ header, results });
          this.loading = false;
          resolve();
        };
        reader.readAsArrayBuffer(rawFile);
      });
    },
    getHeaderRow(sheet) {
      const headers = [];
      const range = XLSX.utils.decode_range(sheet["!ref"]);
      let C;
      const R = range.s.r;
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        /* find the cell in the first row */
        let hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    },
  },
};
</script>

<style scoped>
.excel-upload-input {
  display: none;
  z-index: -9999;
}
/* .drop {
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
} */
</style>
