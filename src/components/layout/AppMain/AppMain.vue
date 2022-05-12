<template>
  <div class="container_right">
    <div class="breadcrumb_box">
      <breadcrumb></breadcrumb>
    </div>
    <div class="main_box">
      <router-view />
    </div>
  </div>
</template>

<script>
import breadcrumb from '../../../components/Breadcrumb/index.vue'
export default {
  data(){
    return{
    }
  },
  created(){
  },
  methods:{
  },
  components:{
    breadcrumb
  }
}
</script>

<style lang="scss" scoped>
.container_right {
  .breadcrumb_box {
    margin-bottom: 27px;
  }
  .no-redirect {
    color: #fff;
    cursor: text;
  }
}
</style>