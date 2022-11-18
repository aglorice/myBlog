<template>
  <div >

      <div  class="article" v-for="(article,index) in articles" :key="index" >
        <div class="article-img" >
          <img :src="article.imgsrc" alt="">
        </div>
        <div class="article-body">
          <div class="article-body-head">
            <h2 id="articleTitle">{{article.title}}</h2>
          </div>
          <div class="article-body-mid">
            <div class="article-body-datetime-head">
              <img class="article-body-datetime-img jumpimg" src="@/assets/img/datetime.png" alt="">
              <span class="article-body-datetime-p">{{article.datetime}}</span>
            </div>
            <div class="split-line">
              <p id="split-line-span">|</p>
            </div>
            <div class="article-body-category">
              <img class="article-body-datetime-img jumpimg" src="@/assets/img/category.png" alt="">
              <span class="article-body-datetime-p">{{article.category}}</span>
            </div>
          </div>
          <div class="article-body-content">
            <p>{{article.content}}</p>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "homeArticle",
  data(){
    return{
      articles:[
        {
          title:"四月是你的谎言",
          datetime:"2022-10-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg"
        },
        {
          title:"四月是你言",
          datetime:"2022-1-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言言四月是你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/690810.png"
        },
        {
          title:"四月谎言",
          datetime:"2022-10-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你四月是你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg"
        },
        {
          title:"四月是你的谎言",
          datetime:"2022-10-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg"
        },
        {
          title:"四月是你的谎言",
          datetime:"2022-10-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg"
        },
        {
          title:"四月是你的谎言",
          datetime:"2022-10-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg"
        },
        {
          title:"四月是你言",
          datetime:"2022-1-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言言四月是你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/690810.png"
        },
        {
          title:"四月谎言",
          datetime:"2022-10-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你四月是你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg"
        },
        {
          title:"四月是你的谎言",
          datetime:"2022-10-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg"
        },
        {
          title:"四月是你的谎言",
          datetime:"2022-10-30",
          category:"Python",
          content:"四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言四月是你的谎言你的谎言四月是你的谎言四月是你的谎言的谎言四月是你的谎言四月是你的谎言",
          imgsrc:"https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/629528.jpg"
        },
      ]
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/imgjump.css";
.article {

  width: 800px;
  height: 250px;
  border-radius: 10px;
  background: white;
  margin: 0 0 30px 0;

}
.article-img {
  width: 250px;
  height: 250px;
  padding: 0;
  border-radius: 10px 0 0 10px;
  display: inline-block;
  overflow: hidden;
}
.article-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  transition: all 0.5s; /*transition:过度属性*/
  cursor: pointer;  /*当鼠标进入图片的时候，鼠标的样式变为手型 */
}
.article-img img:hover{
   /*transform:变形属性，scale：缩放1.1倍 */
  transform: scale(1.1); /*transform:变形属性，scale：缩放1.1倍 */

}
.article-body {

  width: 550px;
  height: 250px;
  display: inline-block;
}
.article-body-head {
  width: 400px;
  height: 50px;
  margin: 20px 20px 0 20px;
}
.article-body-mid {
  width: 350px;
  height: 40px;
  margin: 0 20px 10px 20px;
}
.article-body-content {
  width: 450px;
  height: 100px;
  margin: 10px 20px 10px 20px;
}
.article-body-content p {
  height: 100px;
  text-indent: 1cm;
  font-size: 15px;
  font-weight: lighter;
  line-height: 25px;
  margin: 0;
  overflow: hidden;
}
#articleTitle {
  float: left;
  font-size: 24px;
  font-weight: lighter;
  margin: 8px;
}
.article-body-datetime-img {
  height: 14px;
  width: auto;
  margin: 13px 13px 13px 0;
  float: left;
}
.article-body-datetime-img:hover{

}
.article-body-datetime-p {
  float: left;
  font-size: 14px;
  margin: 12px 12px 12px 0px;
  color: gray;
}
.article-body-datetime-head {
  width: 120px;
  height: 40px;
  display: inline-block;
  float: left;
}
.article-body-category {
  width: 180px;
  height: 40px;
  float: right;
  display: inline-block;
}
.split-line {
  width: 20px;
  height: 40px;
  display: inline-block;
  text-align: center;

}
#split-line-span{
  width: 6px;
  height: 18px;
  font-size: 18px;

  margin: 10px;
}
</style>