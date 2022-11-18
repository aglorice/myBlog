<template>
  <div id="App">
    <main-tarbar></main-tarbar>
    <router-view></router-view>
    <music ></music>
    <pagebottom></pagebottom>



  </div>
</template>

<script>
import music from "@/components/common/music/music";
import Pagebottom from "@/components/common/pagebottom/pagebottom";
import MainTarbar from "@/components/common/tarbar/mainTarbar";
export default {
  name: 'App',
  data(){
    return{
      isShow:this.$store.state.isShow
    }
  },
  components: {
    MainTarbar,
    Pagebottom,
    music:music,
  },
  created () {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-haru_1/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '/live2dw/live2d-widget-model-haru_1/assets/haru01.model.json' },
        display: { position: 'left', width: 200, height: 520 },
        mobile: { show: true },
        log: false
      })
    }, 3000)
  },
  mounted() {
    document.addEventListener('visibilitychange', this.handleVisiable)
  },
  destroyed() {
    document.removeEventListener('visibilitychange', this.handleVisiable)
  },
  methods: {
    handleVisiable(e) {
        if (e.target.visibilityState === 'visible') {
          document.title = "被发现啦(┬┬﹏┬┬)"
        }else {
          document.title = "我藏好啦(❁´◡`❁)"
        }
      }
    }
  }
</script>

<style>
:root {
  --card-box-shadow:0 3px 8px 6px rgba(7,17,27,0.05)
}
body{

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
</style>
