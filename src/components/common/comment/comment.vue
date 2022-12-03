<template>
  <div class="comment">
    <div class="comment_head">
      <img src="@/assets/img/comment.png" alt="">
      <p>评论</p>
    </div>

      <div class="comment_user">
        <div class="comment_user_icon">
          <img referrerpolicy="no-referrer" :src="img_src" alt="">
        </div>
        <div class="comment_user_input">
          <div class="comment_user_input_main">
            <p id="comment_user_head_name">您的昵称:</p>
            <div class="comment_user_info">
              <el-input v-model="nickname" placeholder="请输入内容"
                        @blur="search_qq($event)"

              ></el-input>
            </div>
            <p id="comment_user_head_name">邮箱号码:</p>
            <div class="comment_user_info">
              <el-input v-model="email" type="email" placeholder="请输入内容"></el-input>
            </div>
            <p id="comment_user_head_name">您的网址:</p>
            <div class="comment_user_info">
              <el-input v-model="websizt" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="comment_user_input_main">
            <el-input
                id="input"
                class="comment_input"
                type="textarea"
                placeholder="请输入内容"
                v-model="comment"
                :rows="6"
                maxlength="200"
                show-word-limit
                @focus="change_emoji_show"
            >
            </el-input>
            <div class="input_emoji">
              <img @click="showEmoji" src="@/assets/img/emoji.png" alt="">
              <VEmojiPicker id="emoji_box" labelSearch="Search" v-show="showDialog" @select="selectEmoji"/>
              <el-button id="send_button" type="primary" size="small" round :loading="false">发送</el-button>
            </div>

          </div>
        </div>
      </div>
    </div>

</template>

<script>

import {getQqimg} from "@/api/http";
import {VEmojiPicker} from 'v-emoji-picker'

export default {
  name: `comment`,
  data(){
    return{
      nickname:'',
      email:'',
      websizt:'',
      comment:'',
      img_src:'https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/202212022005291.png',
      showDialog: false
    }
  },
  components:{
    VEmojiPicker
  },
  methods:{
    search_qq(e){
      let search_value=e.target.value;
      this.email = search_value+'qq.com'
      const params = {
        'qq_number':search_value
      }
      getQqimg(params).then((res) => {
        if (res.code === 200) {
          this.img_src = res['context']['qq_img'];
          this.nickname = res['context']['qq_name'];
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '数据获取失败',
          duration: 1500
        });
      })
    },
    selectEmoji(emoji) {// 选择emoji后调用的函数
      this.comment = this.comment +emoji.data
    },
    showEmoji(){
      this.showDialog = !this.showDialog
    },
    change_emoji_show(){
      this.showDialog = false
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
  height: 350px;
  opacity: 0.9;
  border-radius: 10px;
}
.comment_head {
  height: 40px;
  width: 150px;
  margin-bottom: 20px;
}
.comment_head p{
  height: 20px;
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
  width: 1100px;
  height: 150px;
  margin-left: 70px;
}
.comment_user_info {
  width: 20%;
  display: inline-block;
}
.comment_user_icon {
  display: inline-block;
  width: 10%;
  height: 100%;
  float: left;
}
.comment_user_icon img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 10px;
  float: right;
}
.comment_user_input {
  width: 90%;
  height: 100%;
  display: inline-block;
  float: right;
}
#comment_user_head_name {
  width: 80px;
  font-size: 16px;
  display: inline-block;
  font-family: "Microsoft YaHei UI Light";
  margin-left: 30px;
  color: #8fd0e3;
}
.comment_user_input_main {
  display: inline-block;
}
.comment_input {
  width: 815px;
  margin-left: 130px;
}
.input_emoji {
  width: 815px;
  height: 40px;
  float: right;
  margin-right: 45px;
}
.input_emoji img{
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-top: 5px;
}
#send_button {
  display: inline-block;
  float: right;
  margin-top: 5px;
}
#emoji_box {
  height: 200px;
}
</style>