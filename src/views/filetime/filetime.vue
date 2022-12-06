<template>
  <div>
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/wallhaven-e7kpl8_1920x1200.png" alt="">
    </div>
<!--    分割线-->
    <el-divider >四月是你的谎言</el-divider>
<!--    博客文章时间线-->
    <div class="timeline">
      <div class="block">
        <el-timeline class="el_timeline">

          <el-timeline-item v-for="(value,index) in file" :key="index"   :timestamp="value.datetime"
                            placement="top"
                            color="skyblue">
            <router-link :to="`/article/details/${value.id}`" class="filetime_to_article">
              <el-card>
                <h4>{{value.title}}</h4>
              </el-card>
            </router-link>

          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
<!--    加载更多-->
    <div class="loadingButton">
      <span id="loadingButton">
        <el-button round @click="loadingMore">加载更多</el-button>
      </span>
    </div>
<!--    回到顶部-->
    <backUp></backUp>
  </div>
</template>

<script>
import backUp from "@/components/common/backUp/backUp";
import {mapState} from "vuex";


export default {
  name: `filetime`,
  data(){
    return{
      page:1,
      file:''
    }
  },
  mounted() {
    this.file = this.articles[1]
  },
  computed:{
    ...mapState(['articles','article'])
  },
  components:{
    backUp:backUp
  },
  methods:{
    // 加载更多的归档
    loadingMore(){
      let pageCount  = 0 | this.article.count/10+1
      if (this.page >=pageCount){
        this.$message({
          type: 'info',
          message: '没有更多的数据',
          duration: 1500
        });
      }else {
        this.page = this.page+1
        this.file.push(...this.articles[this.page])
      }
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/topShow.css";
.timeline {

  margin-top: 40px;
}
.el_timeline {
  padding: 0;
}
#loadingButton {
  text-align: center;
  display: block;
}
.loadingButton {

}
.filetime_to_article {
  text-decoration-line: none;

}

</style>
