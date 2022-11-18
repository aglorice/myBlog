<template>
  <el-card class="box-card">
    <div slot="header" class="header ">
      <img class="jumpimg" src="@/assets/img/categorize.png" alt="">
      <span>分类</span>
    </div>
    <!--      分类体-->
    <el-tag class="tagright"
            v-for="tag in tags"
            :key="tag.name"
            type="">
      {{tag.name}}
    </el-tag>
  </el-card>
</template>

<script>
export default {
  name: `rightcategorize`,
  data() {
    return {
      tags: [
        { name: 'python' },
        { name: 'html' },
        { name: 'css' },
        { name: 'java' },
      ]
    };
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
.tagright {
  margin: 0 4px 4px 0;
}
</style>