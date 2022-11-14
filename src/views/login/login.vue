<template>
  <div>
    <h2 id="top">
      myblog
    </h2>
    <div id="tip">
      <transition name="el-fade-in-linear">
        <el-alert
            v-show="successTip"
            :title="tipTitle"
            :type="tipType"
            center
            :closable="false"
            show-icon>
        </el-alert>
      </transition>
    </div>
      <div class="input_from">
        <h1 id="from_top">login</h1>
        <div class="input-box">
          <label for="user">
            <span>账号:</span>
            <input id="user" v-model="userCount" placeholder="请输入账号">
            <img id="userImg" class="hideImg" :src="srcuC"  alt="">
          </label>
        </div>
        <div class="input-box">
          <label for="password">
            <span>密码:</span>
            <input id="password" v-model="passWord" placeholder="请输入密码">
            <img id="passwordImg" class="hideImg" :src="srcpW" alt="">
          </label>
        </div>
        <div class="input-box">
          <button  type="button" @click="login">登录</button>
          <button type="button" @click="register">注册</button>
        </div>
      </div>
    <div id="footer">
      <p>@DARLING in the FRANXX</p>
    </div>
  </div>
</template>

<script>
export default {
  name: `login`,
  data(){
    return{
      userCount:'', // 用户名
      passWord:'', // 密码
      srcuC:'', // 账号是否正确（图标）
      srcpW:'', // 账号是否正确（图标）
      successTip:false, // 是否显示
      time:1, // 设置警告消失时间（单位s）
      timer:null, // 定时器
      isClickLogin:false, // 是否已经点击了登录按钮
      tipTitle:"",
      tipType:'', // 共有四种状态（success，info，warning，error）

      code:200
    }
  },
  methods:{
      login(){
        if(!this.isClickLogin) {
          // 进行网络请求，判断是否登录成功
          if(this.code === 200){
            this.tipTitle = "登录成功"
            this.tipType = "success"
          }
          else if(this.code === 301){
            this.tipTitle = "账号或者密码错误"
            this.tipType = "warning"
          }
          else if(this.code === 401){
            this.tipTitle = "服务器发生错误"
            this.tipType = "error"
          }


          this.isClickLogin = true;
          this.successTip = true
          this.timer = setInterval(
              ()=>{
                if(this.time<=0){
                  this.successTip = !this.successTip;
                  this.isClickLogin = false;
                  this.time = 1;
                  clearInterval(this.timer);
                  this.timer = null
                  // 判断是否登陆成功，登录成功则进行跳转
                  if(this.code === 200){
                    // 跳转到主页
                    this.$router.push("/home")
                  }
                }
                this.time--;
              }, 1000
          )
        }
      },
      register(){
        this.$router.push('register');
      },
  },
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
  height: 300px;
  margin-top: 250px;

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
</style>