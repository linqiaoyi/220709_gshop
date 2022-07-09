import axios from 'axios'
import { nanoid } from 'nanoid'
//人员管理相关配置
export default {
    namespaced: true,//简写的代价
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            }
            else {
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            // console.log('mutations中的APP_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' },
            { id: '002', name: '李四' },
            { id: '003', name: '王五' },
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}

