import Vue from "vue";
import VueRouter from "vue-router";


const MusicRoom = ()=> import ("@/views/musicRoom/musicRoom");
const Remind = ()=> import ("@/views/remind/remind");
const Categorize = ()=> import("@/views/categorize/categorize");
const Pag = ()=> import("@/views/pag/pag");
const Article = ()=> import("@/views/article/article");
const Login = ()=> import("@/views/login/login");
const Register = ()=> import("@/views/register/register");
const Home = ()=> import("@/views/home/home");


Vue.use(VueRouter);

const routes = [
    {
        path:'',
        redirect:'/login',

    },
    {
        path: '/login',
        component:Login,
        meta:{
            title:'登录'
        }
    },
    {
        path: '/register',
        component:Register,
        meta:{
            title:'注册'
        }
    },
    {
        path: '/home',
        component:Home,
        meta:{
            title:'主页'
        }
    },
    {
        path: '/article',
        component:Article,
        meta:{
            title:'文章'
        }
    },
    {
        path: '/categorize',
        component:Categorize,
        meta:{
            title:'分类'
        }
    },
    {
        path: '/pag',
        component:Pag,
        meta:{
            title:'标签'
        }
    },
    {
        path: '/musicRoom',
        component:MusicRoom,
        meta:{
            title:'音乐馆'
        }
    },
    {
        path: '/remind',
        component:Remind,
        meta:{
            title:'个人简介'
        }
    }
]


const router =  new VueRouter({
    routes,

})
// vue的路由守卫()
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})
export default router;