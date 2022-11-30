<template>
  <el-card class="box-card">
    <div slot="header" class="header ">
      <img class="jumpimg" src="@/assets/img/public.png" alt="">
      <span>公告</span>
    </div>
    <div class="public-text">
      <p>{{publicText}}</p>
    </div>
  </el-card>
</template>

<script>
import {getAnnouncement} from "@/api/http";

export default {
  name: `mypublic`,
  data(){
    return{
      publicText:''
    }
  },
  mounted() {
    getAnnouncement(null).then((res) => {
      if (res.code === 200) {
        this.$message({
          message: '数据获取成功!',
          type: 'success',
          duration: 1500
        });
        this.publicText = res['context'][0]['fields']['announcement']
      } else {
        this.$message({
          type: 'info',
          message: '数据获取失败',
          duration: 1500
        });
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
@import "@/assets/css/rightcard.css";
@import "@/assets/css/imgjump.css";
.header {
  text-align: center;
}
.header img{
  width: 25px;
  height: auto;
  float: left;
}
.header span {
  width: 50px;
  font-size: 18px;
  font-weight: lighter;
}
.public-text {
  text-indent: 1cm;

}
</style>