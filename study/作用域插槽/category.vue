<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games" msg="hello">我是一个默认值</slot>
        <!-- <ul> 
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
        </ul> -->
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data(){
        return{
            games:['王者荣耀','lol','双人成形']
        }
    }
}
</script>

<style>

h3{
    text-align:center;
    background-color: orange;
}
.category{
    background-color: skyblue;
    width: 200px;
    height: 200px;
}
</style>