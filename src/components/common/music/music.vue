<template>
  <a-player
      v-show="isShow"
      :music="audio[0]"
      :list="audio"
      :showlrc="true"
      mode="circulation"
      repeat="repeat-all"
      :style="{ width: '1240px', marginTop: '20px'}"
  />
</template>

<script>
import APlayer from 'vue-aplayer'
import {mapState} from "vuex";


export default  {
  name: `music`,
  components: { APlayer },
  data () {
    return {
      // 音频列表
      audio: [
        {
          title: '兄妹',
          artist: '黄叶',
          url: 'http://music.163.com/song/media/outer/url?id=1947208581.mp3',
          pic: 'http://p2.music.126.net/O-G03h3Y18Hb75ZzFXrxXg==/109951167515869204.jpg',
          lrc: '[00:12.09]作词：林夕[00:12.33]'
        },
        {
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        },
        {
          title:'蒲空英的约定',
          artist: '黄叶',
          url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E8%92%B2%E5%85%AC%E8%8B%B1%E7%9A%84%E7%BA%A6%E5%AE%9A.m4a',
          pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg" ,
          lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh',
        },
        {
          title:'无畏',
          artist: '马頔',
          url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E9%A9%AC%E9%A0%94%20-%20%E6%97%A0%E7%95%8F.flac',
          pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E4%BB%A5%E5%AE%B6%E4%B9%8B%E5%90%8D.jpg', // prettier-ignore
          lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
        },
        {
          title:'蓝乐',
          artist: '白纸',
          url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E8%93%9D%E4%B9%90%20-%20%E7%99%BD%E7%BA%B8.flac',
          pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/-1992181439.jpg" ,
          lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
        },
        {
          title:'蒲空英的约定',
          artist: '黄叶',
          url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E8%92%B2%E5%85%AC%E8%8B%B1%E7%9A%84%E7%BA%A6%E5%AE%9A.m4a',
          pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg" ,
          lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh',
        },
        {
          title:'无畏',
          artist: '马頔',
          url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E9%A9%AC%E9%A0%94%20-%20%E6%97%A0%E7%95%8F.flac',
          pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E4%BB%A5%E5%AE%B6%E4%B9%8B%E5%90%8D.jpg', // prettier-ignore
          lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
        },
        {
          title:'蓝乐',
          artist: '白纸',
          url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E8%93%9D%E4%B9%90%20-%20%E7%99%BD%E7%BA%B8.flac',
          pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/-1992181439.jpg" ,
          lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
        },
      ],
    // sb:this.$store.state.isShow 为什么这样就没有了响应式的数据
    }
  },
  computed:{
    ...mapState(['isShow'])
  },
  mounted () {
    console.log(this)
  },
  methods: {

  },
  watch:{
    isShow:{
      immediate:true,
      handler(){
        console.log("我被修改了")
      }
    }
  }
}
</script>

<style scoped>

</style>