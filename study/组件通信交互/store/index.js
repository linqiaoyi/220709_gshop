//该文件用于创建vuex中的store
import Vue from 'vue'
import Vuex from 'vuex'

//准备actions 用于响应组件中的动作
const actions = {
    // jia(context, value) {
    //     // console.log('actions中的jia被调用了', context, value)
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2)
            context.commit('JIAODD', value)
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIAWAIT', value)
        }, 500)
    }
}
//准备mutations 用于操作数据（state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的JIA被调用了', state, value)
        state.sum += value
        // console.log(state.sum)
    },
    JIAN(state, value) {
        state.sum -= value
    },
    JIAODD(state, value) {

        state.sum += value
    },
    JIAWAIT(state, value) {
        state.sum += value
    },
    ADD_PERSON(state, value){
        // console.log('mutations中的APP_PERSON被调用了')
        state.personList.unshift(value)
    }
}
//准备state 用于存储数据
const state = {
    sum: 0,//当前的和
    school: "atguigu",
    subject: '前端',
    personList: [
        { id: '001', name: '张三' },
        { id: '002', name: '李四' },
        { id: '003', name: '王五' },
    ]
}
//准备getters用于将state中的数据进行加工 类似computed
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
Vue.use(Vuex)
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
