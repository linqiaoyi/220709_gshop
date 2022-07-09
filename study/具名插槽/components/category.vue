<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot>我是一个默认值</slot>
        <!-- <ul> 
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
        </ul> -->
        <slot name="moreInfo"></slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData','title']
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

video{
  width:100%;
}
img{
    width:100%;
    height:140px;
}
</style>