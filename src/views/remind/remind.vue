<template>
  <div>
    <!--    展示图-->
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/746106.png" alt="">
    </div>
    <div class="remind">
      <v-md-preview :text="remind" ></v-md-preview>

    </div>
    <el-divider content-position="center">四月是你的谎言</el-divider>
    <comment></comment>
    <back-up></back-up>
  </div>
</template>

<script>


import BackUp from "@/components/common/backUp/backUp";
import comment from "@/components/common/comment/comment";
export default {
  name: `remind`,
  components:{
    BackUp,
    comment:comment
  },
  data(){
    return{
      remind:'# 123123123123'
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/topShow.css";
.remind {
  border-radius: 10px;
  background-color: white;
  width: 1240px;
  margin-top: 30px;
}
.remind-head {
  width: 1160px;
  background-color: whitesmoke;
  margin: 40px 40px 40px 40px;
}
.remind h1 {
  text-align: center;
  font-weight: lighter;
}
</style>