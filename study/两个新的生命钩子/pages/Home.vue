<template>
<div>
    <h2>Home组件内容</h2>
    <div>
        <ul class="nav nav-tabs">
            <li>
                <router-link  class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <!-- to="/home/news"  ===  :to="{name:xiaoxi}"-->
                <router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <!-- 
            缓存News组件
            <keep-alive include="News">
        -->
        <keep-alive :include="['News','Message']">
            <router-view></router-view>
        </keep-alive>
        
    </div>
</div>

</template>

<script>
export default {
    name:'Home',
    // beforeDestroy(){
    //     console.log('111即将被销毁home')
    // },
    // mounted(){
    //     console.log('222挂载完毕home')
    // }
}
</script>

<style>

</style>