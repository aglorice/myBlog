<template>
  <div class="article">
    <div class="article_head">
      <h1>{{articles.title}}</h1>
    </div>
    <div class="article_body">
      <v-md-preview :text="articles.article" ></v-md-preview>
    </div>
  </div>

</template>

<script>
import { getDetailArticle} from "@/api/http";
import variable from "@/assets/js/variable";

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
}
</style>