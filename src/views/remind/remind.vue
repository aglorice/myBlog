<template>
  <div>
    <!--    展示图-->
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/746106.png" alt="">
    </div>
    <div class="remind">
      <div class="remind-head">
        <h1 >个人简介</h1>
      </div>

    </div>
    <back-up></back-up>
  </div>
</template>

<script>


import BackUp from "@/components/common/backUp/backUp";
export default {
  name: `remind`,
  components:{
    BackUp
  }
}
</script>

<style scoped>
@import "@/assets/css/topShow.css";
.remind {
  border-radius: 10px;
  background-color: white;
  width: 1240px;

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