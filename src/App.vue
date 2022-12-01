<template>

  <div id="App">
    <vue-element-loading :active="true"
                         id="loading"
                         spinner="line-scale"
                         color="#84DDE0FF"
                         size="60"
                         text="@DARLING in the FRANXX"
                         background-color="rgba(95, 158, 160, 1)"
                         is-full-screen />
    <div v-if="isRenderStart">
      <main-tarbar></main-tarbar>
      <transition :name="transitionName" mode="out-in">
        <keep-alive include="home,articles,categorize,pag">

            <router-view></router-view>

        </keep-alive>
      </transition>



      <music ></music>
      <pagebottom></pagebottom>
    </div>

  </div>

</template>

<script>
import music from "@/components/common/music/music";
import Pagebottom from "@/components/common/pagebottom/pagebottom";
import MainTarbar from "@/components/common/tarbar/mainTarbar";
import {getArticle, getArticleCount} from "@/api/http";
import variable from "@/assets/js/variable";
import VueElementLoading from "vue-element-loading";


export default {
  name: 'App',
  data(){
    return{
        isShow:this.$store.state.isShow,
        loading:true,
        isRenderStart:false, // 当父组件的数据加载完才加载子组件
        transitionName:'slide-left'
    }
  },
  components: {
    MainTarbar,
    Pagebottom,
    music:music,
    VueElementLoading

  },

    created() {
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: 'live2d-widget-model-haru_1/assets/',
          tagMode: false,
          debug: false,
          model: {jsonPath: '/live2dw/live2d-widget-model-haru_1/assets/haru01.model.json'},
          display: {position: 'left', width: 150, height: 300},
          mobile: {show: true},
          log: false
        })
      }, 3000)
    },
    computed: {},
    mounted() {


      getArticle(null).then((res) => {
        if (res.code === 200) {
          this.$message({
            message: '数据获取成功!',
            type: 'success',
            duration: 1500
          });
          document.getElementById('loading').remove()
          let data = res['context']
          let page_count = res['count']
          let data_type_vuex = []
          let data_type_vuex_all = {}
          let articles = [];
          for (let item in data) {
            articles.push({
              id: data[1][item]['id'],
              title: data[1][item]['title'],
              datetime: data[1][item]['created_time'],
              category: data[1][item]['categorize'],
              Pageview: data[1][item]['page_view'],
              content: data[1][item]['describe'],
              imgsrc: variable.base_url_img + data[1][item]['head_img']
            })
          }
          for (let i = 1; i <= page_count; i++) {
            for (let item in data[i]) {
              data_type_vuex.push({
                id: data[i][item]['id'],
                title: data[i][item]['title'],
                datetime: data[i][item]['created_time'],
                category: data[i][item]['categorize'],
                Pageview: data[i][item]['page_view'],
                content: data[i][item]['describe'],
                imgsrc: variable.base_url_img + data[i][item]['head_img']
              })
            }
            data_type_vuex_all[i] = data_type_vuex
            data_type_vuex = []
          }
          this.$store.dispatch('putarticle', data_type_vuex_all)
          this.isRenderStart = true
          // 将信息提交到vuex


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

      //------------------
      getArticleCount(null).then((res) => {
        if (res.code === 200) {
          let data = res['context']
          this.$store.dispatch('putarticleinfo', data)
          // 将信息提交到vuex
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
      //------------------

      //------------------

      document.addEventListener('visibilitychange', this.handleVisiable)

    },
    destroyed() {
      document.removeEventListener('visibilitychange', this.handleVisiable)
    },
    methods: {
      handleVisiable(e) {
        if (e.target.visibilityState === 'visible') {
          document.title = "被发现啦(┬┬﹏┬┬)"
        } else {
          document.title = "我藏好啦(❁´◡`❁)"
        }
      }
    }
  }
</script>

<style>
@import "@/assets/css/siyuan.css";
:root {
  --card-box-shadow:0 3px 8px 6px rgba(7,17,27,0.05)
}

body{
/*//修改鼠标样式*/
  cursor: url('@/assets/img/default.cur'),auto;
  background-image: url("@/assets/img/login-backgound.png");
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
input{
  text-indent: 10px;
  width: 250px;
  height: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  margin: 20px 1px 20px 20px;
  border-radius: 10px;
  border: white;
}
input::-webkit-input-placeholder{
  color: cadetblue;
  font-size: 4px;
  padding-left: 10px;
}
span{
  font-family: "ui-sans-serif";
}
#tip {
  width: 400px;
  height: 36.67px;
}
::-webkit-scrollbar
{
  width: 6px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
  background-color: #999;
}
.slide-left-enter {
  opacity: 0;
  -webkit-transform: translate(0px, 30px);
  transform: translate(0px, 30px);
}
.slide-left-enter-active{
  transition: all .5s ease;
}
.slide-left-leave-to{
  opacity: 0;
  -webkit-transform: translate(0px, -30px);
  transform: translate(0px, -30px);
}
.slide-left-leave-active {
  transition: all .5s ease;
}
</style>
