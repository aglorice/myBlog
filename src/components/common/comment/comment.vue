<template>
  <div class="comment">
    <div class="comment_head">
      <img src="@/assets/img/comment.png" alt="">
      <p>评论</p>
    </div>

    <div class="comment_user">
      <div class="comment_user_info">
          <el-input placeholder="请输入内容" v-model="input1">
            <template slot="prepend">Http://</template>
          </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `comment`,
  data(){
    return{
      nickname:''
    }
  }
}
</script>

<style scoped>
.el-select .el-input {
  width: 80px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.comment {
  background-color: white;
  width: 1240px;
  height: auto;
  opacity: 0.8;
  border-radius: 10px;
}
.comment_head {
  height: 40px;
  width: 150px;
  margin-bottom: 20px;
}
.comment_head p{
  height: 30px;
  font-size: 20px;
  padding: 0;
  font-family: "Microsoft YaHei UI Light";
  width: 100px;
  margin: 5px;
  float: left;
  display: inline-block;
}
.comment_head img{
  margin: 5px;
  width: 30px;
  height: 30px;
  float: left;

  display: inline-block;
}
.comment_user {
  width: 1240px;
}
.comment_user_info {
  width: 200px;
}
</style>