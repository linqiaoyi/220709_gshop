// 改文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'

// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 引入插件
// import vueResource from 'vue-resource'
// 引入vuex
// import Vuex from 'vuex'
// 引入store
// import store from './store'
//引入插件
// import plugins from './plugins'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'


//关闭vue的生产提示
Vue.config.productionTip = false
//使用插件
// Vue.use(vueResource)
// Vue.use(plugins)
Vue.use(VueRouter)

//创建Vue实例对象--vm
new Vue({
  //将App主键放入容器中
  render: h => h(App),
  // store,
  router:router,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  },
})
  .$mount('#app')
// .$mount('#app) === el:'#app'