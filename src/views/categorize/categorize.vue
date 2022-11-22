<template>
  <div>
    <!--    展示图-->
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/647731.jpg" alt="">
    </div>
    <!--分割线-->
    <el-divider content-position="center">四月是你的谎言</el-divider>
    <pagcloud></pagcloud>
    <!--    回到顶部-->
    <backup></backup>
  </div>
</template>

<script>

import pagcloud from "@/components/common/pagcloud/pagcloud";
import backUp from "@/components/common/backUp/backUp";

export default {
  name: `categorize`,
  components:{
    pagcloud:pagcloud,
    backup:backUp
  }
}
</script>

<style scoped>
@import "@/assets/css/topShow.css";
</style>