<template>
  <div class="img_container">
    <h1>{{ msg }}</h1>
    <h1>{{ mixinMsg }}</h1>
    <div @click="onClick">点一下</div>
    <div v-for="(item, index) in imgSrc" :key="index">
      <img v-imgLazy="item" />
    </div>
  </div>
</template>

<script>
//局部组件混入
import mixin from "../../../mixin/demo.js";
import imgLazy from "@/directive/imgLazy.js";
export default {
  directives: {
    imgLazy: imgLazy,
  },
  mixins: [mixin],
  data() {
    return {
      imgSrc: [
        "http://sqwj.3xgc.net/images/821d3f10-a879-42ba-af7a-98a9fb2c32e5sy.jpg",
        "http://sqwj.3xgc.net/images/0c1a0a24-ff68-4632-aeda-18a6b5ec91e1sy.jpeg",
        "http://sqwj.3xgc.net/images/4730793b-f268-420c-8ea1-d22bd01e8c96sy.jpg",
        "http://sqwj.3xgc.net/images/2754f286-6b70-4926-bd5c-8f2a86ef457dsy.jpg",
        "http://sqwj.3xgc.net/images/af4240ac-36da-4de7-ae8d-a98488c439fbsy.jpeg",
        "http://sqwj.3xgc.net/images/3f6da45d-2e87-465b-9d8d-349dfe76476asy.jpg",
        "http://sqwj.3xgc.net/images/3d355d57-8638-40ab-896f-3e4374baf295sy.jpg",
        "http://sqwj.3xgc.net/images/666ec406-1726-4ded-9a4c-8de360d2db71sy.jpg",
        "http://sqwj.3xgc.net/images/2dbdf225-f8b1-489b-8e7d-b5853e9f6080sy.png",
        "http://sqwj.3xgc.net/images/29d45931-9efc-4e20-b5ce-d4147388d700sy.png",
      ],
    };
  },
  created(){
    console.log('组件内的created')
  },
  methods: {
    onClick() {
      console.log("触发了组件中的onClick");
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  height: 200px;
}
</style>