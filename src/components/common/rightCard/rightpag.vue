<template>
    <el-card class="box-card">
      <div slot="header" class="header ">
        <img class="jumpimg" src="@/assets/img/pag.png" alt="">
        <span>标签</span>
      </div>
<!--      标签体-->
      <el-tag class="tagright"
          v-for="tag in tags"
          :key="tag.name"
          type="success">
        {{tag.name}}
      </el-tag>
    </el-card>
</template>

<script>
export default {
  name: `rightpag`,
  data() {
    return {
      tags: [
        { name: 'python' },
        { name: '标签二' },
        { name: '标签三' },
        { name: '标签四' },

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