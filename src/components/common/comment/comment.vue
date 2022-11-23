<template>
  <div class="comment">
<!--    说点什么吧-->
    <div class="comment-title">
      <p>发表评论</p>
      <span>
        <el-tooltip class="item" effect="dark" content="该功能需要您注册并登录才能使用" placement="right">

          <img src="@/assets/img/hlep.png" alt="">
        </el-tooltip>
      </span>
    </div>
    <div class="comment-input">

      <span>评论</span>
      <div class="input-comment">
        <el-input
                  class="input-comment-main"
                  type="textarea"
                  v-model="comment"
                  :rows="5"
                  resize='none'
                  placeholder="请输入内容"
                  :maxlength='max_input'
        ></el-input>
        <div class="send-button">
          <el-button type="primary"  class="send-button-main" round>发送</el-button>
        </div>
      </div>
      <span style="float: right;font-family: siyuan,serif;">{{strlimit}}/{{max_input}}</span>

      <img src="@/assets/img/emoji.png" class="emojiImg" alt="" @click="changeShowEmoji">
      <VEmojiPicker
          id="emoji"
          v-show="isShowEmoji"
          class="emojiShow"
          :include="['people']"
          :showSearch="false"
          @select="selectEmoji"
      />


    </div>

  </div>
</template>

<script>
import { Picker } from "emoji-mart-vue"; //引入组件
export default {
  name: `comment`,
  data(){
    return{
      comment:"",
      strlimit:'',
      max_input:200, // 字数限制
      isShowEmoji:false,
    }
  },
  components:{
    VEmojiPicker:Picker
  },
  methods:{
    selectEmoji(e) {
      this.comment += e.native;
    },
    changeShowEmoji(){
      this.isShowEmoji = !this.isShowEmoji
    }

  },
  watch:{
    comment:{
      immediate:true,
      handler(value){
        this.strlimit = value.length
        if (this.strlimit === this.max_input){
          this.$message.error("字数已达到最大限制")
        }
      }
    }
  }
}
</script>

<style scoped>
.comment-title {
  width: 1240px;
  height: 40px;
  margin-bottom: 20px;
}
.input-comment-main {
  width: 1050px;
}
.input-comment {
    width: 1170px;
}
#emoji {
  position: relative;
}
.comment {
  width: 1240px;
  height: auto;
  background-color:seashell;
  border-radius: 10px;
}
.comment p {
  width: 100px;
  font-size: 24px;
  font-family: siyuan,serif;
  display: inline-block;
  margin: 0;
}
.comment  img {
  width: 32px;
  height: 32px;
  display: inline-block;
  margin-bottom: -6px;
}
.emojiImg {
  width: 25px;
  height: 25px;
}
.comment-input {
  width: 1050px;
  height: auto;
  margin: 0 170px 0 70px;

}
.comment-input span {
  font-family:siyuan,serif;
}
.send-button-main {
  margin-top: 35px;
}
.send-button{
  float: right;
  width: 104px;

}
</style>