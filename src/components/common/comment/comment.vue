<template>
  <div class="comment">
<!--    说点什么吧-->

    <h2><img src="" alt="">发表评论</h2>
    <div class="comment-input">

      <span>评论</span>
      <el-input type="textarea"
                v-model="comment"
                :rows="5"
                resize='none'
                placeholder="请输入内容"
                :maxlength='max_input'
      ></el-input>
      <span>{{strlimit}}/{{max_input}}</span>

    </div>

  </div>
</template>

<script>
export default {
  name: `comment`,
  data(){
    return{
      comment:"",
      strlimit:'',
      max_input:200 // 字数限制
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
.comment {
  width: 1240px;
  height: auto;
  background-color: #e3ddd1;
  border-radius: 10px;
}
.comment h2 {
  font-family: siyuan,serif;
}
.comment-input {
  width: 1100px;
  height: auto;
  margin: 0 70px 0 70px;

}
</style>