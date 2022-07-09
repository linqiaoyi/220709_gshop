<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
        <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import pubsub from 'pubsub-js'
import axios from 'axios'
export default{
    name:'Search',
    data(){
        return {
            keyWord:''
        }
    },
    methods:{
        
        searchUsers(){
            pubsub.publish('updateList',{isFirst:false,isLoading:true,errMsg:'',users:[]}),
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response =>{
                    console.log('请求成功',response.data);
                    pubsub.publish('updateList',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error =>{
                    console.log('请求失败',error);
                    pubsub.publish('updateList',{isLoading:false,errMsg:error.message,users:[]})
                }
            )
        }
    }
}
</script>

<style>

</style>