// 路由器的入口文件
//引入
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
//使用
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [
        {
            path: '/msite',
            component: MSite,
            meta:{
                showFooter:true
            },
        },
        {
            path: '/order',
            component: Order,
            meta:{
                showFooter:true
            },
        },
        {
            path: '/profile',
            component: Profile,
            meta:{
                showFooter:true
            },
        },
        {
            path: '/search',
            component: Search,
            meta:{
                showFooter:true
            },
        },
        {
            path: '/login',
            component:Login,
            meta:{
                showFooter:false
            },
        },
        {
            //默认显示首页
            path: '/',
            redirect: '/msite'
        }
    ]
})