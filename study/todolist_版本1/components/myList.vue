<template>  
<ul class="todo-main">
    <myItem v-for="todo in todos" :key="todo.id" :todo="todo" 
    :checkTodo="checkTodo"
    :deleteTodo="deleteTodo"
    />
</ul>
</template>
<script>
import myItem from "./myItem";
export default {
  name: "myList",
  components: {myItem},
  props:['todos','checkTodo','deleteTodo'],

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
</style>