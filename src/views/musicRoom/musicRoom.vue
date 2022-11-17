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
  },
  beforeDestroy() {
    this.$store.dispatch('modifyshow',false)
  }
}
</script>

<style scoped>

</style>