<template>
  <div>
    <mainTarbar></mainTarbar>
<!--    展示图-->
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/690810.png" alt="">
    </div>

    <backUp></backUp>
  </div>

</template>

<script>
import mainTarbar from "@/components/common/tarbar/mainTarbar";

import backUp from "@/components/common/backUp/backUp";
export default {
  name: `article`,
  components:{
    mainTarbar:mainTarbar,
    backUp:backUp
  }
}
</script>

<style scoped>
@import "@/assets/css/topShow.css";

</style>