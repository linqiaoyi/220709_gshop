<template>
    <li>
    <label>
        <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" /> -->
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input 
        type="text" 
        :value="todo.title" 
        v-show="todo.isEdit" 
        @blur="handleBlur(todo,$event)"
        ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
</li>

</template>
<script>
//消息订阅与发布
// import pubsub from 'pubsub-js';
export default{
    name:'myItem', 
    //声明接收todo对象
    props:["todo"],
    methods:{
      handleCheck(id){
        // 通知app将对应的todo对象的组件改变done的id
          // this.checkTodo(id)
          this.$bus.$emit('checkTodo',id)
          //消息发布
        // pubsub.publish('hello',666)
      },
      handleDelete(id){
        if(confirm('确定删除吗？')){
          // console.log(id)
          // this.deleteTodo(id)
          this.$bus.$emit('deleteTodo',id);
          // console.log("确认删除")
          // pubsub.publish('deleteTodo',id);
        }

      },
      //编辑
      handleEdit(todo){
        //如果todo身上有isEdit
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true;
        }
        //如果todo身上没有isEdit
        else{
          this.$set(todo,'isEdit',true);
        }
        //光标聚集
        this.$nextTick(function(){
          //Dom更新完毕之后再调用，然后再解析模板
          this.$refs.inputTitle.focus()
        })
        // setTimeout(()=>{
        //   this.$refs.inputTitle.focus()
        // },1000)
      },
      //是去焦点回调
      handleBlur(todo,e){
        todo.isEdit = false;
        this.$bus.$emit('updateTodo',todo.id,e.target.value)
      }
    }       
} 
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

</style>