//将拦截器整体导入
import request from '@/api/Interceptor'//导入已经写好的拦截器

// 封装所有的API接口

// 获取文章
export async function getArticle(params){
    return await request({
        url:'/api_article/article/',
        method :'get',
        params:params,
    })
}

// 获取详细文章信息
export async function getDetailArticle(params){
    return await request({
        url:'/api_article/articles/',
        method :'get',
        params:params,
    })
}

// 获取详细分类信息
export async function getCategorize(params){
    return await request({
        url:'/api_categorize/categorize/',
        method :'get',
        params:params,
    })
}

// 获取详细标签信息
export async function getPag(params){
    return await request({
        url:'/api_pag/pag/',
        method :'get',
        params:params,
    })
}