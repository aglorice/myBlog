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
    },
    {
        path: '/register',
        component:Register
    },
    {
        path: '/home',
        component:Home
    },
    {
        path: '/article',
        component:Article
    },
    {
        path: '/categorize',
        component:Categorize
    },
    {
        path: '/pag',
        component:Pag
    },
    {
        path: '/musicRoom',
        component:MusicRoom
    },
    {
        path: '/remind',
        component:Remind
    }
]


const router =  new VueRouter({
    routes,

})

export default router;