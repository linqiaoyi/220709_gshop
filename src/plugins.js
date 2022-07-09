export default {
    install(Vue) {

        //全局过滤器
        Vue.filter("mySlice", function (value) {
            return value.slice(0, 4)
        })

        //全局指令
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element, binding) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            }

        })
        //定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })
        //给Vue原型上加一个方法
        Vue.prototype.hello = () => { alert('你好啊') }

    }

}
