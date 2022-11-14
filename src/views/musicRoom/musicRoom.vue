<template>
  <div>
    <back-up></back-up>

  </div>
</template>

<script>



import BackUp from "@/components/common/backUp/backUp";
export default {
  name: `musicRoom`,
  components:{
    BackUp


  },
  mounted() {
    this.$store.dispatch('modifyshow',true)
    console.log(this.$store.state.isShow)
  },
  beforeDestroy() {
    this.$store.dispatch('modifyshow',false)
    console.log(this.$store.state.isShow)
  }
}
</script>

<style scoped>

</style>