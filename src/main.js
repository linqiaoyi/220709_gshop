// 该文件是整个项目的入口文件


import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'
//引入VueRouter
import VueRouter from 'vue-router'

// 引入插件
// import vueResource from 'vue-resource'
// 引入vuex
// import Vuex from 'vuex'
// 引入store
// import store from './store'
//引入插件
// import plugins from './plugins'



//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui'
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

//按需引入
// import { Button, Select, Row, DatePicker } from 'element-ui';



//关闭vue的生产提示
// Vue.config.productionTip = false

//应用
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Row.name, Row);
// Vue.component(DatePicker.name, DatePicker);
//使用插件
// Vue.use(vueResource)
// Vue.use(plugins)
Vue.use(VueRouter)
// Vue.use(ElementUI)

//创建Vue实例对象--vm
new Vue({
  //将App主键放入容器中
  render: h => h(App),
  // store,
  router: router,

})
  .$mount('#app')
// .$mount('#app) === el:'#app'