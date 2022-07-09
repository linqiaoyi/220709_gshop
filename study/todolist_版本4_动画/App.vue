<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <myTop @addTodo= "addTodo"/> 
        <myList :todos = "todos" />
        <myFooter :todos = "todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件

import myTop from "./components/myTop";
import myList from "./components/myList";
import myFooter from "./components/myFooter";
// import pubsub from "pubsub-js";
export default {
  name: "App",
  components: {
    myTop,
    myList,
    myFooter,
  },
  data(){
    return{
      // 没有数据的话就是空数组： []
      todos:JSON.parse(localStorage.getItem('todos')) || []
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
    //更新一个todo
    updateTodo(id,title){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.title = title
      })
    },
    //删除所有已经完成的todo
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    //订阅的时候需要有两个参数一个是msgName,一个是id
    // deleteTodo(_,id){
    //   this.todos = this.todos.filter((todo)=>{
    //     return todo.id !== id
    //   })
    // },
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
  },
  watch:{
    // 简写版
    // todos(value){
    //    localStorage.setItem('todos',JSON.stringify(value))
    // }
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }

  },
  mounted(){
    //接收事件
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是School组件，收到了数据');
    // })
    this.$bus.$on('checkTodo',this.checkTodo);
    this.$bus.$on('updateTodo',this.updateTodo);
    this.$bus.$on('deleteTodo',this.deleteTodo);
  //消息订阅
    // this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
    // console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    // })
    // this.pubId = pubsub.subscribe('checkTodo',this.checkTodo);
    // this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo);
  },
  beforeDestroy() {
    //解绑事件
    // this.$bus.$off('hello') 
    this.$bus.$off('checkTodo');
    this.$bus.$off('deleteTodo');
    this.$bus.$off('updateTodo');
    // pubsub.unsubscribe(this.pubId);
  },
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
.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103,159,180);
  margin-right: 5px;
}

.btn-edit:hover {
  color: #fff;
  background-color: #125449;
}

</style>