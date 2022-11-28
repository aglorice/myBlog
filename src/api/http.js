//将拦截器整体导入
import request from '@/api/Interceptor'//导入已经写好的拦截器

// 封装所有的API接口

// 获取文章
export  function getArticle(params){
    return  request({
        url:'/api_article/article/',
        method :'get',
        params:params,
    })
}

// 获取详细文章信息
export  function getDetailArticle(params){
    return  request({
        url:'/api_article/articles/',
        method :'get',
        params:params,
    })
}