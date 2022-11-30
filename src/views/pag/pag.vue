<template>
  <div>
    <!--    展示图-->
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/737385.jpg" alt="">
    </div>
    <!--分割线-->
    <el-divider content-position="center">四月是你的谎言</el-divider>

    <!--    云图-->
    <div style="width: 1240px">
      <el-skeleton style="width: 240px" :loading="!pag_data" animated>
        <template slot="template">
          <el-skeleton-item
              variant="image"
              style="width: 1240px; height: 300px;border-radius: 10px"
          />
        </template>
      </el-skeleton>
    </div>
    <pagcloud v-if="pag_data" :data="pag_data"></pagcloud>
    <!--    回到顶部-->
    <backup></backup>
  </div>
</template>

<script>



import pagcloud from "@/components/common/pagcloud/pagcloud";
import backUp from "@/components/common/backUp/backUp";
import {getCountPag} from "@/api/http";
export default {
  name: `pag`,
  data(){
    return{
      pag_data:null
    }
  },
  components:{
    pagcloud:pagcloud,
    backup:backUp
  },
  mounted() {
    getCountPag(null).then((res) => {
      if (res.code === 200) {
        this.pag_data= res['context']
        // 将信息提交到vuex
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
@import "@/assets/css/topShow.css";
</style>