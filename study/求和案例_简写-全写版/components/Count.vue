<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{school}}学习{{subject}}</h3>
        <h3 style="color:red">下方组件的总人数为{{personList.length}}</h3>
        <!--  v-model.number="n"强制转换为number类型 -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="decrement(n)">-</button>
        <button @click="increment(n)">+</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
        
    </div>
</template>

<script>
import {mapGetters, mapState,mapMutations,mapActions} from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1,//用户选择的数字
            
        }
    },
    methods:{
        //借助mapMutations生成计算属性,从state中读取数据，对象写法
        ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN',}),

         //借助mapActions生成计算属性,从state中读取数据，对象写法
        ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    },
    computed:{

        ...mapState('countAbout',['sum','school','subject']),
        ...mapState('personAbout',['personList']),
        //借助mapGetters生成计算属性,从getters中读取数据，数组写法
        ...mapGetters('countAbout',['bigSum']),
    },
    mounted(){

    }

}
</script>

<style>
button{
    margin:5px;
}
</style>