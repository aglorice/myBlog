// 提交 mutations是更改Vuex状态的唯一合法方法
export default  (state, isShow) => { // A组件点击更改餐馆名称为 A餐馆
    state.isShow = isShow
}
