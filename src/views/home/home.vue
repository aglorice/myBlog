<template>
  <div>
      <!--    导航栏-->
    <backup></backup>
      <!--    轮播图-->
    <div class="topImg">
      <el-carousel :interval="4000" class="imgTop" type="card" >
        <el-carousel-item v-for="(item,index) in imgUrl" :key="index">
          <img :src="item" alt="" style="width: 600px" height="auto">
        </el-carousel-item>
      </el-carousel>
    </div>
      <!--    右侧栏-->
    <div class="right-card">
      <!--    个人卡片-->
      <PersonalInformation></PersonalInformation>
      <!--    公告卡片-->
      <mypublic></mypublic>

    </div>

    <!--    文章页-->
    <homearticle ></homearticle>
    <!--    页面底部-->
  </div>

</template>

<script>
import backUp from "@/components/common/backUp/backUp";
import PersonalInformation from "@/components/common/rightCard/PersonalInformation";
import homeArticle from "@/components/common/homeArticle/homeArticle";
import mypublic from "@/components/common/rightCard/mypublic"; //公告卡片

export default {
  name: `home`,
  data(){
    return{
      imgUrl:[
          'https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/202210151045573.png',
          'https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/wallhaven-gpz2g7_2560x1600.png',
          'https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg',
          'https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/wallhaven-e7kpl8_1920x1200.png',
          'https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/636338.jpg',
          'https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/690810.png'
      ]
    }
  },
  components:{
    backup:backUp,
    PersonalInformation:PersonalInformation,
    homearticle:homeArticle,
    mypublic:mypublic,
  }
}
</script>

<style scoped>
.right-card {
  width: 380px;
  float: right;

}
.imgTop {
  height: 350px;
  width: 1200px;
}
.el-carousel {
  margin: 20px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>