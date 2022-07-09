<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <myTop :addTodo= "addTodo"/> 
        <myList :todos = "todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <myFooter :todos = "todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件

import myTop from "./components/myTop";
import myList from "./components/myList";
import myFooter from "./components/myFooter";

export default {
  name: "App",
  components: {
    myTop,
    myList,
    myFooter,
  },
  data(){
    return{
      todos:
      [
        {id:'001',title:'喝酒',done:false},
        {id:'002',title:'抽烟',done:true},
        {id:'003',title:'开车',done:false},
      ]
    }
  },
  methods:{
    //添加一个todo
    addTodo(todoObj){
      // console.log('我收到了数据',todoObj)
      this.todos.unshift(todoObj)
    },
    //勾选或取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done =!todo.done
      })
    },
    //删除所有已经完成的todo
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    //全选/取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done;
      })
    },
    //清除所有已经完成的todo
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        //函数体
        //返回done为false的
        return !todo.done;

      })
    }
  }

}  


</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103,159,180);
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>