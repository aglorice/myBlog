import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import ElementUI from 'element-ui'
import {Message} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
// main.js
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

Vue.use(VueAxios, axios);
Vue.use(ElementUI,Message);
Vue.use(VMdPreview);
Vue.prototype.$axios = axios;




new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
