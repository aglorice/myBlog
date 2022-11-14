<template>
    <div v-show="isTopShow" class="backUp">
        <img @click="tobackUp" src="@/assets/img/backup.png" id="backup-icon" alt="">
    </div>
</template>

<script>
export default {
  name: "backUp",
  data(){
    return{
      scrollTop:0,
      isTopShow:false, // 是否显示回到顶部图标
      scrollTopSpeed:40
    }
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
    handleScroll() {
      this.scrollTop = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
    },


    tobackUp(){
        let timer = setInterval(()=> {
          document.documentElement.scrollTop = this.scrollTop;
          this.scrollTop = this.scrollTop -this.scrollTopSpeed;
          if(this.scrollTop<=0){
            document.documentElement.scrollTop = 0;
            clearInterval(timer);

          }
        }, 1);
      },
    },

  watch:{
    scrollTop:{
      immediate:true,
      handler(newvalue){
        this.isTopShow = newvalue > 120;
      }
    }
  }
}
</script>

<style scoped>
.backUp {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 100px;
  right: 50px;
}
#backup-icon {
  width: 60px;
  height: 60px;
  cursor: pointer;  /*当鼠标进入图片的时候，鼠标的样式变为手型 */
}
</style>