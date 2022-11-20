<template>
  <div ref="wordcloud" class="wordcloud">
  </div>
</template>



<script>
import * as echarts from 'echarts'
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
  name:`pagcloud`,
  data() {
    return {
      wordList:[
        {
          name: "珍珠奶茶",
          value: 15000
        },
        {
          name: "冰激凌红茶",
          value: 10081
        },
        {
          name: "椰果奶茶",
          value: 9386
        },
        {
          name: "波霸奶茶",
          value: 7500
        },
        {
          name: "金桔柠檬",
          value: 7500
        },
        {
          name: "乌龙奶茶",
          value: 6500
        },
        {
          name: "芒果欧蕾",
          value: 6500
        },
        {
          name: "仙草奶茶",
          value: 6000
        },
        {
          name: "翡翠柠檬",
          value: 4500
        },
        {
          name: "芒果养乐多",
          value: 3800
        },
        {
          name: "柠檬养乐多",
          value: 3000
        },
        {
          name: "波霸奶绿",
          value: 2500
        },
        {
          name: "四季春茶",
          value: 2300
        },
        {
          name: "茉莉绿茶",
          value: 2000
        },
        {
          name: "阿萨姆红茶",
          value: 1900
        },
        {
          name: "奶冻摇摇乐",
          value: 1800
        },
        {
          name: "冻顶乌龙茶",
          value: 1700
        },
        {
          name: "咖啡",
          value: 1600
        },
        {
          name: "焦糖玛奇朵",
          value: 1500
        },
        {
          name: "金桔柠檬",
          value: 1200
        },
      ]
    }
  },
  mounted(){
    this.initchart();
  },
  methods:{
    initchart(){
      let myChart = echarts.init(this.$refs.wordcloud);
      myChart.setOption({
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [14, 60],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // 颜色可以用一个函数来返回字符串
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            //数据
            data: this.wordList
          }
        ]
      })
    }
  }
}
</script>
<style scoped>
.wordcloud{
  width:100%;
  height:300px;
  background-color: #F5F5F5;
  margin:auto;
  border-radius: 10px;
}
</style>
