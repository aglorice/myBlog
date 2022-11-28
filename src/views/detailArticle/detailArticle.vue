<template>
  <div class="article">
    <div class="article_head">
      <div class="head_img_box">
        <img id="head_img" :src="articles.imgsrc" alt="">
        <div class="head_content">
          <p id="head_content_title">{{articles.title}}</p>
          <div class="head_content_mid">
            <div class="head_content_mid_item">
              <img  class="head_content_datetime_icon" src="@/assets/img/datetime.png" alt="">
              <p class="head_content_datetime_time">{{articles.datetime}}</p>
            </div>
            <div class="head_content_mid_item">
              <img  class="head_content_datetime_icon" src="@/assets/img/category.png" alt="">
              <p class="head_content_datetime_time">{{articles.category}}</p>
            </div>
            <div class="head_content_mid_item">
              <img  class="head_content_datetime_icon" src="@/assets/img/tag.png" alt="">
              <p class="head_content_datetime_time">{{articles.pag}}</p>
            </div>
            <div class="head_content_mid_item">
              <img  class="head_content_datetime_icon" src="@/assets/img/eye.png" alt="">
              <p class="head_content_datetime_time">{{articles.Pageview}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-divider content-position="center">四月是你的谎言</el-divider>
    <div class="article_body">
      <v-md-preview :text="articles.article" ></v-md-preview>
    </div>
    <back-up></back-up>
    <comment></comment>
  </div>

</template>

<script>
import { getDetailArticle} from "@/api/http";
import variable from "@/assets/js/variable";
import BackUp from "@/components/common/backUp/backUp";
import comment from "@/components/common/comment/comment";

export default {
  name: `detailArticle`,
  props:['id'],
  data(){
    return{
      articles:[],
    }
  },
  mounted() {
    const params = {
      id:this.id
    }
    getDetailArticle(params).then((res) => {
      if (res.code === 200) {
        let data = res['context']
        for (let item in data){
          this.articles={
            id:data[item]['pk'],
            title:data[item]['fields']['title'],
            datetime:data[item]['fields']['created_time'],
            category:data[item]['fields']['categorize'],
            Pageview:data[item]['fields']['page_view'],
            content:data[item]['fields']['describe'],
            pag:data[item]['fields']['pag'],
            article:data[item]['fields']['content'],
            imgsrc:variable.base_url_img+data[item]['fields']['head_img']
          }
        }
      } else {
        this.$message({
          type: 'info',
          message: '数据获取失败',
          duration: 1500
        });
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  components:{
    BackUp,
    comment:comment

  }
}
</script>

<style scoped>
.article_body {
  width: 1240px;
  height: auto;
  background-color: whitesmoke;
  border-radius: 10px;
}
.article {
  width: 1240px;
  margin-top: 30px;
}
#head_img {
  width: 1240px;
  height: auto;
  position: absolute;/*设为绝对定位*/
  clip: rect(0,1240px,500px,0);
}
.head_img_box {
  width: 1240px;
  height: 500px;
  overflow:hidden;
  border-radius: 10px;

}
.head_content {
  width: 700px;
  height: 300px;
  margin: 100px 270px;
  position: absolute;/*设为绝对定位*/
  background-color: #F5F5F5;
  opacity: 0.8;
}
#head_content_title {
  text-align: center;
  font-size: 60px;
  font-weight: lighter;
  margin-bottom: 10px;
}
.head_content_datetime_icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 10px;
}
.head_content_datetime_time {
  width: 90px;
  display: inline-block;
}
.head_content_mid {
  width: 500px;
  margin-left: 100px;
}
.head_content_mid_item {
  width: 25%;
  display: inline-block;
}
</style>