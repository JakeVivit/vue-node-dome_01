<template>
  <div class="header">
    <el-menu :default-active="activeIndex2"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#fff"
             text-color="#6c6f70"
             active-text-color="#308697">
      <span>模拟商城</span>
      <div class="right">
        <el-menu-item index="4">处理中心</el-menu-item>
        <el-menu-item index="5">处理中心</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .header{
    .right{
      float: right;
      display: inline-block;
    }
  }
</style>

