<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <!--  v-model.number="n"强制转换为number类型 -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return{
            n:1,//用户选择的数字
            sum:0//当前的和
        }
    },
    methods:{
        decrement(){
            this.sum -= this.n
        },  
        increment(){
            this.sum += this.n
        },
        incrementOdd(){
            if (this.sum % 2){
                this.sum += this.n
            } 
        },
        incrementWait(){
            setTimeout(()=>{
                this.sum += this.n
            },500)
        }
    }
}
</script>

<style>
button{
    margin:5px;
}
</style>