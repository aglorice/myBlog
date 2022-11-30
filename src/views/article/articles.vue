<template>
  <div>

<!--    展示图-->
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/690810.png" alt="">
    </div>
<!--分割线-->
    <el-divider content-position="center">四月是你的谎言</el-divider>
<!--    文章-->
    <div >

      <div  class="article" v-for="(article,index) in articles" :key="index" >
        <div class="article-img" >
          <router-link :to="`/article/details/${article.id}`" ><img :src="article.imgsrc" alt=""></router-link>
        </div>
        <div class="article-body">
          <div class="article-body-head">
            <router-link :to="`/article/details/${article.id}`" ><h2 id="articleTitle">{{article.title}}</h2></router-link>
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
            <div class="split-line">
              <p id="split-line-span">|</p>
            </div>
            <div class="article-body-category">
              <img class="article-body-datetime-img jumpimg" src="@/assets/img/eye.png" alt="">
              <span class="article-body-datetime-p">{{article.Pageview}}</span>
            </div>
          </div>
          <div class="article-body-content">
            <p>{{article.content}}</p>
          </div>
        </div>
      </div>
    </div>
<!--    分页-->
    <el-pagination
        background
        :current-page="currentPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :page-size="pagesize"
        :total="pagecount">
    </el-pagination>
<!--    回到顶部-->
    <backUp></backUp>


  </div>

</template>

<script>


import backUp from "@/components/common/backUp/backUp";
import { getArticlePage} from "@/api/http";
import variable from "@/assets/js/variable";

export default {
  name: `articles`,
  data(){
    return{
      articles:[],
      currentPage: 1, //  el-pagination 初始页
      pagesize: 10 ,//  el-pagination 每页的数据
      pagecount:0
    }
  },
  created() {

  },
  components:{
    backUp:backUp
  },
  computed:{

  },
  mounted() {
    // 如果vuex中有数据就直接用,没有则重新请求


      this.pagecount = this.$store.state.article.count
      this.handleCurrentChange(1)

  },
  methods: {
    // size-change	pageSize 改变时会触发	每页条数size
    // current-change	currentPage 改变时会触发	当前页currentPage
    handleSizeChange: function(size) {
      // 请求数据
      this.pagesize = size
    },
    handleCurrentChange: function(currentPage) {
      document.documentElement.scrollTop = 0;
      if(this.$store.state.articles[currentPage].length > 0){

        this.articles = this.$store.state.articles[currentPage]

      }else {
        this.currentPage = currentPage
        const params = {
          page:currentPage,
          page_size:this.pagesize
        }
        getArticlePage(params).then((res) => {
          if (res.code === 200) {
            const data = res['context']
            let articles = []
            for (let item in data){
              articles.push({
                id:data[item]['id'],
                title:data[item]['title'],
                datetime:data[item]['created_time'],
                category:data[item]['categorize'],
                Pageview:data[item]['page_view'],
                content:data[item]['describe'],
                imgsrc:variable.base_url_img+data[item]['head_img']
              })
            }
            this.articles = articles


            this.pagecount = res['pagedate']['count']
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
      }
      }


  }

}
</script>

<style scoped>
@import "@/assets/css/topShow.css";
@import "@/assets/css/imgjump.css";
.article {

  width: 1240px;
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
  width: 450px;
  height: 40px;
  margin: 0 20px 10px 20px;
}
.article-body-content {
  width: 800px;
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
  width: 120px;
  height: 40px;
  float: left;
  display: inline-block;
}
.split-line {
  width: 20px;
  height: 40px;
  float: left;
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