<template>
  <div class="tar" v-if="tarIsShow">
    <div class="tar-head">
        <img src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/202210261514262.png" alt="777" width="40px" height="40px">
        <div class="tar-head-title">
          <p>myblog</p>
        </div>
    </div>
    <div class="tar-body ">
      <div @click="homeUrl" class="tar-item">
          主页
      </div>
      <div @click="articleUrl" class="tar-item">
        文章
      </div>
      <div @click="categorizeUrl" class="tar-item">
        分类
      </div>
      <div @click="pagUrl" class="tar-item">
        标签
      </div>
      <div @click="fileTimeUrl" class="tar-item">
        归档
      </div>
      <div @click="musicRoomUrl" class="tar-item">
        音乐馆
      </div>
      <div @click="remindUrl" class="tar-item">
        个人简介
      </div>
    </div>
    <div class="tar-end">

      <div class="tar-end-item">

        <img src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/202210261514262.png" alt="777" width="40px" height="40px">
        <div class="tar-end-item-logout">
          <el-dropdown id="user_drop" size="small">
            <span class="el-dropdown-link">
              {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item ><span @click="logOut">退出登录</span></el-dropdown-item>
              <el-dropdown-item>个人信息</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "mainTarbar",
  data(){
    return{
      username:"三叶"
    }
  },
  methods:{
    homeUrl(){
      this.$router.push('home')
    },
    articleUrl(){
      this.$router.push('article')
    },
    categorizeUrl(){
      this.$router.push('categorize')
    },
    pagUrl(){
      this.$router.push('pag')
    },
    fileTimeUrl(){
      this.$router.push('filetime')
    },
    musicRoomUrl(){
      this.$router.push('musicRoom')
    },
    remindUrl(){
      this.$router.push('remind')
    },
    logOut(){
      this.$router.push('login')
    }
  },
  mounted() {
  },
  computed:{
    ...mapState(['tarIsShow'])
  }
}
</script>

<style scoped>
.tar {
  width: 1240px;
  height: 60px;
  background-color: #8fd0e3;
  border-radius: 10px;
}
.tar-head-title {
  height: 60px;
  width: 240px;
  float: right;
}
.tar-head-title p {
  height: 20px;
  font-size: 16px;
  padding: 6px;
  font-family: "Arial Black";
}
.tar-head {
  float: left;
  width: 300px;
  height: 60px;
  display:table-cell;
}
.tar-body {
  float: left;
  width: 700px;
  text-align: center;
}
.tar-item {
  font-size: 20px;
  display:table-cell;
  padding: 15px;
  font-weight: lighter;
}
.tar-head img{
  padding: 10px;
  overflow: hidden;
  border-radius: 50%;
  display: inline-block;
}
.tar-end {
  width: 240px;
  height: 60px;
  float: right;

}
.tar-end-item {
  width: 240px;
  display:inline-block;
}
.tar-end-item-logout {
  width: 180px;
  height: 60px;
  float: right;
}
.tar-end-item img {
  padding: 10px;
  overflow: hidden;
  border-radius: 50%;
  display: inline-block;
}
#logout-button {
  height: 30px;
  font-size: 18px;
  text-decoration-line: none;
  display: inline-block;
  padding: 20px 0 10px 0;
  color: white;
}
.tar-item:hover {
  border-bottom:3px black solid ;
  background-color:skyblue ;
}
.tar-item:active {
  border-bottom:3px black solid ;
  background-color:steelblue ;
}
.el-dropdown-link {
  cursor: pointer;
  color: black;
  font-size: 16px;
}
.el-icon-arrow-down {
  font-size: 12px;
  margin-left: 5px;
}
#user_drop {
  margin-top: 18px;
  margin-left: 20px;
}
</style>