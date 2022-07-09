<template>
<div class="todo-footer" v-show="todos.length">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
      <input type="checkbox" v-model="isAll"  />
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default{
    name:'myFooter', 
    props:['todos','checkAllTodo','clearAllTodo'],
    methods:{
      // checkAll(e){
      //   // console.log(e)
      //   this.checkAllTodo(e.target.checked)
      // }
      clearAll(){
        this.clearAllTodo();
      }
    },
    computed:{
      doneTotal(){
        //var sum = 0; 
        // this.todos.forEach((todo)=>{
        //   if(todo.done)
        //     sum++;
        // })
        // return sum;
        //条件统计最好用reduce
        return  this.todos.reduce((pre,current)=>{
          return pre + (current.done ? 1:0); 
        },0)
      },
      //计算属性只被读取不被修改，才可以简写
      // isAll(){
      //     return this.todos.length === this.doneTotal && this.doneTotal > 0
      // }
      isAll:{
        get(){
          return this.todos.length === this.doneTotal && this.doneTotal; 
        },
        set(value){
          this.checkAllTodo(value)
        }
      }
    }       
} 
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>