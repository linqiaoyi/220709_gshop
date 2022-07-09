<template>
    <div >
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- <transition name="hello">  -->
            <!-- <h1 v-show="isShow" appear>你好啊</h1>  -->
        <!-- </transition> -->
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1" >你好啊</h1>
            <h1 v-show="isShow" key="2" >11</h1>
        </transition-group>
    </div>
</template>
<script>
    export default {
        name:'Test2',
        data(){
            return {
                isShow:true
            }
        },
    }
</script>
<style scoped>
h1{
    background-color: orange;
    transition:0.5s;
}
/* 进入的起点 */
/* 离开的终点 */
.hello-enter,.hello-leave-to{
    transform:translateX(-100%);
}
/* 中间匀速 */
.hello-enter-active,.hello-leave-active{
    transition:0.5s linear;
}
/* 进入的终点 */
/* 离开的起点 */
.hello-enter-to,.hello-leave{
    transform: translateX(0);
}

</style>