<template>
    <div >
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group
        appear
        name="animate__animated animate__bounce" 
        enter-active-class="animate__headShake"
        leave-active-class="animate__backInUp"
        >
            <h1 v-show="!isShow" key="1" >你好啊</h1>
            <!-- <h1 v-show="isShow" key="2" >11</h1> -->
        </transition-group>
    </div>
</template>
<script>
//引入库
import 'animate.css'
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
</style>