
//求和相关配置
export default {
    namespaced: true,//默认是false
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2)
                context.commit('JIAODD', value)
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIAWAIT', value)
            }, 500)
        }
    },
    mutations: {
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
    },
    state: {
        sum: 0,//当前的和
        school: "atguigu",
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}