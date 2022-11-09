<template>
  <el-card class="box-card">
    <div slot="header" class="header ">
      <img class="jumpimg" src="@/assets/img/public.png">
      <span>公告</span>
    </div>
    <div class="public-text">
      <p>{{publicText}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: `mypublic`,
  data(){
    return{
      publicText:"这是我的第一个博客,使用vue开发123123123"
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/rightcard.css";
@import "@/assets/css/imgjump.css";
.header {
  text-align: center;
}
.header img{
  width: 25px;
  height: auto;
  float: left;
}
.header span {
  width: 50px;
  font-size: 18px;
  font-weight: lighter;
}
.public-text {
  text-indent: 1cm;

}
</style>