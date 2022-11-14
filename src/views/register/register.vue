<template>
  <div>
    <h2 id="top">
      myblog
    </h2>
    <form>
      <div class="input_from">
        <h1 id="from_top">register</h1>
        <div class="input-box">
          <label for="name">
            <span>姓名:</span>
            <input id="name" placeholder="请输入你的姓名">
          </label>
        </div>

        <div class="input-box">
          <label for="password">
            <span>密码:</span>
            <input id="password" placeholder="请输入密码">
          </label>
        </div>
        <div class="input-box">
          <label for="repassword">
            <span>密码:</span>
            <input id="repassword" placeholder="请再一次输入密码">
          </label>
        </div>
        <div class="input-box">
          <label for="email">
            <span>邮箱:</span>
            <input id="email" placeholder="请输入你的邮箱号码">
          </label>
        </div>
        <div class="input-box">
          <button type="button">注册</button>
        </div>
        <div class="input-box">
          <router-link to="/login" id="login">我要登录</router-link>
        </div>


      </div>
    </form>
    <div id="footer">
      <p>@DARLING in the FRANXX-02-国家队</p>
    </div>
  </div>


</template>

<script>
export default {
  name: `register`,
  mounted() {
    this.$store.dispatch('modifybottomshow',false)
    this.$store.dispatch('modifytarshow',false)

  },
  beforeDestroy() {
    this.$store.dispatch('modifybottomshow',true)
    this.$store.dispatch('modifytarshow',true)

  }
}
</script>

<style scoped>
#top {
  position: fixed;
  top: 80px;
  left: 200px;
  font-size: 45px;
  font-family: Arvo,sans-serif;
  border-bottom:5px white solid ;
}
.input_from {
  width: 400px;
  height: 450px;
  margin-top: 200px;

  background-color: #8fccdc;
  border-radius: 20px;
  opacity: 0.8;
  box-shadow: white 10px 10px 30px 5px ;
}
.input-box{
  text-align:center ;

}
#from_top{
  text-align: center;
  padding-top: 10px;
  border-bottom: 1px white solid;
}
.input-box button{
  width: 80px;
  height: 30px;
  border-radius: 10px;
  border: #8fccdc;

  margin: 10px;
}
.input-box button:hover{
  background-color: lightskyblue;
  border: 1px white solid;
}
.input-box button:active{
  background-color: deepskyblue;
  border: 1px white solid;
}
#footer{
  font-size: 10px;
  text-align: center;
}
#footer{
  font-size: 10px;
  text-align: center;
}
#login{
  text-decoration-line: none;
  font-size: 14px;
  text-align: center;
}
</style>