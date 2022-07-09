<template>
  <div class="container">
    <Category title="美食">
      <img src="https://ts1.cn.mm.bing.net/th/id/R-C.562773e2bf834f5a7b9042ad3aab408d?rik=%2fMevXmwjjGCVVA&riu=http%3a%2f%2fs3img.city.sina.com.cn%2ffood_city%2flarge%2f9093312.jpg&ehk=pQKxRljGu2Ri3ULSaBvML0YBUtLMdZpQurR9FJjLUjc%3d&risl=&pid=ImgRaw&r=0" alt="">
      <div class="moreInfo" slot="moreInfo">
        <a slot="moreInfo" href="#">更多美食</a>
      </div>
    </Category>
    <Category title="游戏" >
      <ul> 
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <template v-slot:moreInfo>
        <div class="moreInfo">
          <a slot="moreInfo" href="#">网络游戏</a>
          <a slot="moreInfo" href="#">单击游戏</a>
        </div>
      </template> 
    </Category>
    <Category title="电影">
      <video controls src="https://www.ixigua.com/6841111129452708355"></video>
      <template v-slot:moreInfo>
        <div class="moreInfo">
        <a slot="moreInfo" href="#">经典</a>
        <a slot="moreInfo" href="#">热门</a>
        <a slot="moreInfo" href="#">推荐</a>
      </div>
      </template>
      
    </Category>
  </div>
</template>

<script>
import Category from './components/category.vue'

export default {
  components: { Category },
  name:'App',
  data(){
    return{
      foods:['小龙虾','牛杂','章鱼小丸子'],
      games:['王者荣耀','lol','双人成形'],
      films:['最好的我们','花束般的恋爱']
    }
  }
}
</script>

<style lang="css" scoped>
.container,.moreInfo{
  display: flex;
  justify-content: space-around;
}
</style>