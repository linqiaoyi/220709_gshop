<template>
    <div >
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello"> 
            <h1 v-show="isShow" appear>你好啊</h1>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'Test',
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
}
.v-enter-active{
    animation: donghua 1s linear;
}
.v-leave-active{
    animation: donghua 1s linear reverse;    
}
.hello-enter-active{
    animation: donghua 1s linear;
}
.hello-leave-active{
    animation: donghua 1s linear reverse;    
}
@keyframes donghua{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>