<!--
 * @Descripttion: 
 * @Author: 李增辉
 * @Date: 2022-04-13 09:46:52
 * @LastEditors: 李增辉
 * @LastEditTime: 2022-04-15 10:57:34
-->

<template>
  <el-upload
    style="width: 360px"
    drag
    action="#"
    :limit="maxlimit"
    multiple
    class="xx-upload"
    :file-list="fileList"
    :http-request="upload_request"
    :before-upload="before_upload"
    :before-remove="before_remove"
    :on-remove="on_remove"
    :on-exceed="on_exceed"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">
      {{ title }}
    </div>
  </el-upload>
</template>
<script>
import {deleteFileInfo, saveFileInfo} from "@/api/common";
import {deleteSpecialManage} from "@/api/subjectPlan";

/**
 * 初始化：
 *       1.设置文件上传最大个数
 *       2.设置file-list（用于显示上传文件的列表）？需要设置吗？有待商榷
 * 交互：
 *     1.监听before-upload，用于校验单文件内存大小，文件的格式，以及获取回调函数中的参数file封装为FormData，在发起请求的时候使用
 *     2.监听upload_request上传成功后返回用户上传后的请求返回的地址对象。
 *     3.
 *       3.1监听before_remove，删除的时候把删除的对象传给父组件让父组件想办法删除(uid从上传之前里面获取，上传成功后的里面传uid，删除的时候也传这个uid)
 *       3.2能否每次给的是所有的？ok就这样
 */
export default {
  props: {
    id:{
      type: Number,
    },
    moduleName:{
      type: String,
    },
    fileInfoListShow:{
      type: Array,
    },
    maxlimit: {
      require: false,
      type: Number,
      default: 5,
    },
    title: {
      require: false,
      type: String,
      default: "最多可上传5个附件,单个附件100M以内,支持jpg.png.pdf格式",
    },
    fileRulesType: {
      require: false,
      type: Array,
      default: ()=>[".jpg", ".png", ".pdf"],
    },
    url: {
      require: false,
      type: String,
      default: "https://dvwit.3xgc.net/core/uploadFile",
    },
  },
  data() {
    return {
      formData: undefined,
      fileList: [],
      fileInfoList: [],
    };
  },
  watch:{
    fileInfoListShow(val){
      this.fileList = val;
    },
    fileList(){},
  },
  created() {

  },
  methods: {
    before_upload(file) {
      const index = file.type.lastIndexOf("/");
      const fileType = file.type.substring(index + 1).toLowerCase();
      const isLegal = this.fileRulesType.join("").includes(fileType);
      if (!isLegal) {
        this.$message.warning("图片格式不对")
        return false;
      }
      const isLt100M = file.size / 1024 / 1024 > 100;
      if (isLt100M) {
        this.$message.warning("文件大小不能大于100M")
        return false;
      }
      const formData = new FormData();
      const id = this.id === undefined ? "" : this.id;
      const moduleName = this.moduleName === undefined ? "" : this.moduleName;
      console.log(file,'filefilefile')
      formData.append("file", file);
      formData.append("fileType", file.type);
      formData.append("moduleName", moduleName);
      formData.append("projectId", id);
      this.formData = formData;
    },
    async upload_request(file) {
      const res = await saveFileInfo(this.formData);
      if(res.status !== 200) return this.$message.error("上传失败");
      this.fileList.push(res.data)
      this.$emit("getfileInfo", this.fileList);
      if (file && file.status==="success") {
        return this.fileList;
      }
    },
    before_remove(file,fileList) {
      console.log(file,fileList,'before_remove')
      if (file && file.status==="success") {
        return this.$confirm(`确定删除 ${ file.fileName }？`);
      }
    },
    on_remove(file, fileList){
      if (file && file.status==="success") {
        deleteFileInfo(file.id).then((res) => {
          if(res.status === 200) return this.$message.success("删除成功");
          console.log(fileList,"删除的列表")
          this.$emit("getfileInfo", fileList);
        });
      }
    },
    on_exceed(){
      this.$message.warning("最多可上传5个附件");
    },
  },
};
</script>
<style scoped>
.el-upload__tip,
.xx-upload >>> .el-upload-list__item-name {
  text-align: left;
}
.el-upload__text em {
  color: #4a6bfa;
}
.xx-upload >>> .el-upload-dragger:hover {
  border-color: #4a6bfa;
}
</style>
