<template>
  <div class="container">  
    <Category title="游戏" >
      <template scope="atguigu">
        <ul> 
          <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
        </ul>
      </template> 
    </Category>


    <Category title="游戏" >
      <template scope="atguigu" > 
          <h4 class="moreInfo" style='color:red' v-for="(g,index) in atguigu.games" :key="index">{{g}}</h4>
      </template> 
    </Category>


    <Category title="游戏" >
      <template scope="atguigu">
        <span> 
          <span v-for="(g,index) in atguigu.games" :key="index">{{g}}</span>
        </span>
      </template> 
    </Category>
    
  </div>
</template>

<script>
import Category from './components/category.vue'

export default {
  components: { Category },
  name:'App',

}
</script>

<style lang="css" scoped>
.container,.moreInfo{
  display: flex;
  justify-content: space-around;
}
</style>