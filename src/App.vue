<template>
  <div id="App">

    <router-view></router-view>
    <music ></music>


  </div>
</template>

<script>
import music from "@/components/common/music/music";
export default {
  name: 'App',
  data(){
    return{
      isShow:this.$store.state.isShow
    }
  },
  components: {
    music:music
  },

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
</style>
