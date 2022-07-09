<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为:{{bigSum}}</h3>
        <h3>我在{{school}}学习{{subject}}</h3>
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
        // decrement(){
        //     // this.sum -= this.n
        //     this.$store.commit('JIAN',this.n)
        // },  
        // increment(){
        //     // this.sum += this.n
        //     this.$store.commit('JIA',this.n)
        // },
        //借助mapMutations生成计算属性,从state中读取数据，对象写法
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    /******************************** ************ **/

        // incrementOdd(){
        //     // this.sum += this.n
        //     this.$store.dispatch('jiaOdd',this.n)
        // },
        // incrementWait(){
            
        //         // this.sum += this.n
        //     this.$store.dispatch('jiaWait',this.n)
        // }
                //借助mapActions生成计算属性,从state中读取数据，对象写法
        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    },
    computed:{
        //靠程序员自己亲自去写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },
        
        //借助mapState生成计算属性,从state中读取数据，对象写法
        // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),
        //借助mapState生成计算属性,从state中读取数据，数组写法
        ...mapState(['sum','school','subject']),

        // *******************************************************
        
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        //借助mapGetters生成计算属性,从getters中读取数据，对象写法
        // ...mapGetters({bigSum:'bigSum'}),
        //借助mapGetters生成计算属性,从getters中读取数据，数组写法
        ...mapGetters(['bigSum']),
    },
    mounted(){
        // console.log('Count',this.$store)
        const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'});
        console.log(x)
    }

}
</script>

<style>
button{
    margin:5px;
}
</style>