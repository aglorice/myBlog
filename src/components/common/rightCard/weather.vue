<template>
  <el-card class="box-card">
    <div slot="header" class="header ">
      <img class="jumpimg" src="@/assets/img/weather.png" alt="">
      <span>天气</span>
    </div>
      <div id="he-plugin-standard"></div>
  </el-card>
</template>

<script>
export default {
  name: `weather`,
  created() {
    window.WIDGET = {
      "CONFIG": {
        "layout": "1",
        "width": "340",
        "height": "150",
        "background": "1",
        "dataColor": "FFFFFF",
        "borderRadius": "10",
        "key": "53ebd62b776a452cbb9e425b114201e0"
      }
    };
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}
</script>

<style scoped>
@import "@/assets/css/rightcard.css";
@import "@/assets/css/imgjump.css";
#he-plugin-standard {
  width: 340px;
  height: 150px;
}
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
.weather {
  width: 380px;
  height: 150px;
}
</style>