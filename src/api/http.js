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

// 获取详细标签数目信息
export async function getCountPag(params){
    return await request({
        url:'/api_pag/countPag/',
        method :'get',
        params:params,
    })
}

// 获取公告
export async function getAnnouncement(params){
    return await request({
        url:'/api_announcement/announcement/',
        method :'get',
        params:params,
    })
}

// 获取分页
export async function getArticlePage(params){
    return await request({
        url:'/api_article/articlespage/',
        method :'get',
        params:params,
    })
}

// 获取文章数目
export async function getArticleCount(params){
    return await request({
        url:'/api_article/getarticlecount/',
        method :'get',
        params:params,
    })
}


export async function getCountCategorize(params){
    return await request({
        url:'/api_categorize/countCategorize/',
        method :'get',
        params:params,
    })
}


export async function getQqimg(params){
    return await request({
        url:'/api/qq/',
        method :'get',
        params:params,
    })
}



