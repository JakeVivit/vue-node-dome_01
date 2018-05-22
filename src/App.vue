<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style rel="stylesheet/scss" lang="scss">
  *{
    padding: 0px;
    margin: 0px;
    font-family: '微软雅黑';
  }
  .z-red {
    color: #E14B5D;
  }

  .c35 {
    color: #353838;
  }

  .c6c {
    color: #6c6f70;
  }

  .f {
    &14 {
      font-size: 14px;
    }
    &12 {
      font-size: 12px;
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
