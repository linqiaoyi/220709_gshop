<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们用a标签实现页面的跳转 -->
          <!-- <a href="./about.html" class="list-group-item active">About的内容</a> -->
          <!-- <a href="./home.html" class="list-group-item">Home的内容</a> -->
          
          <!-- 要改变页面的路径并且在同一页面跳转 -->
          <!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link to="/about" active-class="active" class="list-group-item">About的内容</router-link>
          <router-link to="/home"  active-class="active" class="list-group-item">Home的内容</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 此处展示不知道谁 -->
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Banner from './components/Banner.vue'

export default {
    name: "App",
    components: { Banner}
}

</script>

<style>

</style>