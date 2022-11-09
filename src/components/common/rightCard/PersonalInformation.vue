<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <img src="https://avatars.githubusercontent.com/u/93847713?v=4">
      <div class="box-card-name">
        <h1>aglorice</h1>
        <p v-text="mySign"></p>
      </div>
      <div class="box-card-count">
        <div class="box-card-count-item">
          <span>文章</span>
          <p>5</p>
        </div>
        <div class="box-card-count-item">
          <span>分类</span>
          <p>2</p>
        </div>
        <div class="box-card-count-item">
          <span>标签</span>
          <p>1</p>
        </div>
      </div>
    </div>
    <div class="box-card-body">
      <el-button type="primary" @click="toGithub" >follow me</el-button>
      <div class="box-card-body-share">
        <div class="box-card-body-share-item">
          <img src="@/assets/img/github.png" alt="" >
        </div>
        <div class="box-card-body-share-item">
          <img src="@/assets/img/python.png" alt="">
        </div>
        <div class="box-card-body-share-item">
          <a href='https://m.bilibili.com/space/1705222226'>
            <img src="@/assets/img/bilibili.png" alt="" >
          </a>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "PersonalInformation",
  data(){
    return{

      mySign:"面朝大海，春暖花开"
    }
  },
  methods:{
    toGithub(){
      window.location.href = 'https://github.com/aglorice'
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/rightcard.css";

.clearfix img {
  width: 70px;
  border-radius: 50%;

}
.box-card-body {
  text-align: center;
}
.box-card-name h1 {
  margin: 0;
  font-size: 30px;
  font-family:Arvo,sans-serif;
}
.box-card-name p {
  margin: 0;
  font-size: 14px;
  font-family:Arvo,sans-serif;
}
.box-card-count {
  width: 340px;
  height: 80px;
  margin-top: 15px;

}
.box-card-count-item {
  width: 100px;
  height: 80px;
  display: inline-block;
}
.box-card-count-item span {
  font-weight: lighter;
  cursor: pointer;  /*当鼠标进入图片的时候，鼠标的样式变为手型 */
}
.box-card-count-item:hover {
  color: #8fccdc;
}
.box-card {
  border-radius: 10px;
}
.box-card-body-share {
  width: 340px;
  height: 60px;
}
.box-card-body-share-item {
  width: 100px;
  height: 50px;
  display: inline-block;
  margin: 5px;
  padding: 0;
}
.box-card-body-share-item img{
  margin: 10px;
  width: 30px;
}
</style>