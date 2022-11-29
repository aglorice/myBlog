import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'



Vue.use(Vuex)

const state = {
    isShow: false, // 默认值
    bottomisShow:true,
    tarIsShow:true,
    articles:[]
    // 文章简介加载
}
const actions = {
    modifyshow(content,value){
        content.commit("modifyShow",value)
    },
    modifybottomshow(content,value){ // 底部信息
        content.commit("modifyBottomShow",value)
    },
    modifytarshow(content,value){
        content.commit("modifyTarShow",value)
    },
    putarticle(content,value){
        content.commit("putArticle",value)
    }

}

const mutations = {
    modifyShow(state,value){
        state.isShow = value;
    },
    modifyBottomShow(state,value){
        state.bottomisShow = value
    },
    modifyTarShow(state,value){
        state.tarIsShow = value
    },
    putArticle(state,value){
        state.articles = value
    },
}

// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里
})

export default store  // 导出store并在 main.js中引用注册。