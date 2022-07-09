//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history',
    //hash ==> /#/ 兼容性好
    //history ==> / 兼容性稍差
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,

            meta: { title: '关于', isAuth:true }
        },
        {
            name: 'shouye',
            path: '/home',
            component: Home,
            meta: { isAuth: true, title: '首页' },
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    //需要权限检验
                    meta: { title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            // path: 'detail/:id/:title',
                            path: 'detail',
                            component: Detail,
                            //props的第一种写法，值为对象，该对象的所有
                            //key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}
                            //props的第二种写法，值为布尔值，若布尔值为真，
                            //就会把该路由组件收到的所有Params参数都会以props的形式传给Detail组件
                            // props:true
                            //props的第三种写法，值为函数
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title };
                            }
                        }
                    ]
                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    //需要权限检验
                    meta: { isAuth: true, title: '新闻' },
                    //独享路由守卫只有前置没有后置路由守卫
                    // beforeEnter: (to, from, next) => {
                    //     console.log("独享路由守卫")
                    //     // document.title = to.meta.title || '网易商城'   
                    //     // if (to.path === '/home/news' || to.path === '/home/message') {
                    //     //等同于上面
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'atguigu') {
                    //             next()
                    //         } else {
                    //             alert('学校名不对，无权限查看')
                    //         }
                    //     } else {
                    //         next()
                    //     }
                    // }
                },
            ]
        },
    ]
})
// //全局前置路由守卫，初始化的时候被调用、每次切换路由之前被调用
// router.beforeEach((to, from, next) => {
//     console.log("全局前置路由守卫")
//     // document.title = to.meta.title || '网易商城'   
//     // if (to.path === '/home/news' || to.path === '/home/message') {
//     //等同于上面
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对，无权限查看')
//         }
//     } else {
//         next()
//     }
// })
// //全局后置路由守卫，初始化之后被调用、每次切换路由之后被调用
router.afterEach((to, from) => {
    console.log("全局后置路由守卫", to, from)
    document.title = to.meta.title || '网易商城'

})
export default router 