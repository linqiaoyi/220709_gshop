<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // beforeDestroy(){
    //     console.log('111即将被销毁about')
    // },
    // mounted(){
    //     console.log('222挂载完毕about')
    // },
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter(to,from,next){
        // console.log('@@@@',to,from)
        // document.title = to.meta.title || '网易商城'   
        // if (to.path === '/home/news' || to.path === '/home/message') {
        //等同于上面
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') === 'atguigu') {
                next()
            } 
            else {
                alert('学校名不对，无权限查看')
            }
        } 
        else {
            next()
        }
                    

    },
    // 通过路由规则，离开组件时被调用
    beforeRouteLeave(to,from,next){
        console.log('####',to,from)
        next()
    }
}
</script>

<style>

</style>