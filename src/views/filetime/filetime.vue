<template>
  <div>
    <div class="topShow">
      <img  src="https://img-1310166437.cos.ap-chengdu.myqcloud.com/img/wallhaven-e7kpl8_1920x1200.png" alt="">
    </div>
<!--    分割线-->
    <el-divider >四月是你的谎言</el-divider>
<!--    博客文章时间线-->
    <div class="timeline">
      <div class="block">
        <el-timeline class="el_timeline">
          <el-timeline-item v-for="(value,index) in file" :key="index"  :timestamp="value.time"
                            placement="top"
                            color="skyblue">
            <el-card>
              <h4>{{value.title}}</h4>
              <p>{{value.content}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: `filetime`,
  data(){
    return{
      file:[
        {
          title:'四月是你的谎言',
          time:'2018/4/12',
          content:"你的名字是？"
        },
        {
          title:'四月是你的谎言',
          time:'2018/4/12',
          content:"你的名字是？"
        },
        {
          title:'四月是你的谎言',
          time:'2018/4/12',
          content:"你的名字是？"
        },{
          title:'四月是你的谎言',
          time:'2018/4/12',
          content:"你的名字是？"
        },
        {
          title:'四月是你的谎言',
          time:'2018/4/12',
          content:"你的名字是？"
        },
      ]
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/topShow.css";
.timeline {

  margin-top: 40px;
}
.el_timeline {
  padding: 0;
}
</style>