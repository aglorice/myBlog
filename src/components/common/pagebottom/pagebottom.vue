<template>
  <div class="footer" v-if="bottomisShow">
    <p id="gy">本项目使用vue | @DARLING in the FRANXX</p>
    <P id="bah">😭属123234234234234-1</P>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: `pagebottom`,
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['bottomisShow'])
  },
}
</script>

<style scoped>
p {
  margin: 0;
}
.footer {
  margin-top: 180px;
  font-size: 20px;
  width: 1240px;
  height: 50px;
  float: bottom;
  text-align: center;
}
#bah {
  font-size: 15px;

}
#gy {
  margin-bottom: 10px;
  font-size: 10px;
  color: black;
  margin-top: 10px;
}

</style>