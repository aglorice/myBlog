<template>
  <div class="comment">
<!--    说点什么吧-->

    <h2><img src="" alt="">发表评论</h2>
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
          <img src="@/assets/img/send.png" alt="">
        </div>
      </div>
      <span style="float: right">{{strlimit}}/{{max_input}}</span>

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
.input-comment-main {
  width: 1050px;
}
.input-comment {
    width: 1100px;
}
#emoji {
  position: relative;
}
.comment {
  width: 1240px;
  height: auto;
  background-color: #e3ddd1;
  border-radius: 10px;
}
.comment h2 {
  font-family: siyuan,serif;
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
.send-button img {
  width: 50px;
  margin: 30px 0 0 25px;
  height: auto;
}
.send-button{
  float: right;
  width: 50px;
  height: 117px;
}
</style>