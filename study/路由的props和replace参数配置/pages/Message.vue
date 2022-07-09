<template>
    <div>
        <div>
            <ul>
                <li v-for="message in messageList" :key="message.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                    <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp; -->
                <!-- params 配合 name -->
                <!-- query 配合 name/path -->
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <router-link :to="{
                    // path:'/home/message/detail',
                    name:'xiangqing',
                    query:{
                        id:message.id,
                        title:message.title
                    }
                }">
                    {{message.title}} 
                </router-link>
                
                </li>
            </ul>
            <hr>
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return {
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'}
            ]
        }
    }
}
</script>

<style>

</style>