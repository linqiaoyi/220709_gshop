<template>  
<ul class="todo-main">
    <transition-group appear name="todo">
    <myItem 
    v-for="todo in todos" 
    :key="todo.id" 
    :todo="todo" 
    />
    </transition-group>
</ul>
</template>
<script>
import myItem from "./myItem";
export default {
  name: "myList",
  components: {myItem},
  props:['todos'],

  methods:{
    
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
.todo-enter,.todo-leave-to{
    transform:translateX(-100%);
}
/* 中间匀速 */
.todo-enter-active,.todo-leave-active{
    transition:0.5s linear;
}
/* 进入的终点 */
/* 离开的起点 */
.todo-enter-to,.todo-leave{
    transform: translateX(0);
}
</style>