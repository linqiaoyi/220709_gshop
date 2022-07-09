<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    sendStudentName() {
      //触发student组件实例上的atguigu1事件
      this.$emit(this.name);
      this.$emit(this.demo);
    },
    unbind() {
      // 解绑一个自定义事件
      this.$off(["atguigu", "demo"]);
      // this.$off(); //所有的自定义事件全部解绑
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  .atguigu {
    font-size: 40px;
  }
}
</style>