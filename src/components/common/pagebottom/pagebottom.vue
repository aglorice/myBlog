<template>
  <div class="footer" v-if="bottomisShow">
    <img id="footer_img" src="@/assets/img/sakura.png">
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
#footer_img {
  width: 40px;
  height: 40px;
  animation:fadenum 2s linear infinite;
}
@keyframes fadenum{

  100%{transform:rotate(360deg);}

}

</style>