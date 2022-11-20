<template>
  <div>
    <!--    展示图-->
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/647731.jpg" alt="">
    </div>
    <!--分割线-->
    <el-divider content-position="center">四月是你的谎言</el-divider>
    <pagcloud></pagcloud>
  </div>
</template>

<script>

import pagcloud from "@/components/common/pagcloud/pagcloud";

export default {
  name: `categorize`,
  components:{
    pagcloud:pagcloud
  }
}
</script>

<style scoped>
@import "@/assets/css/topShow.css";
</style>