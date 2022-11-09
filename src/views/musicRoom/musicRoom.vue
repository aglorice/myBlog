<template>
  <div>
    <mainTarbar></mainTarbar>

  </div>
</template>

<script>

import mainTarbar from "@/components/common/tarbar/mainTarbar";

export default {
  name: `musicRoom`,
  components:{
    mainTarbar:mainTarbar,

  },
  mounted() {
    this.$store.dispatch('modifyShow',true)
    console.log(this.$store.state.isShow)
  },
  beforeDestroy() {
    this.$store.dispatch('modifyShow',false)
    console.log(this.$store.state.isShow)
  }
}
</script>

<style scoped>

</style>