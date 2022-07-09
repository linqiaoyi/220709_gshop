<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 v-on:==@ -->
    <Student @atguigu="getStudentName" @demo="m1" />

    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: App,
  components: { School, Student },
  data() {
    return {
      msg: "你好啊!",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("APP收到了学校名",name);
    },
    getStudentName(name) {
      console.log("APP收到了学校名",name);
    },
    m1(){
      console.log('demo事件被触发了')
    }
  },
  mounted() {
    this.$refs.student.$on("atguigu", this.getStudentName);
  },
};
</script>
<style scoped>
.app {
  background-color: gray;
}
</style>