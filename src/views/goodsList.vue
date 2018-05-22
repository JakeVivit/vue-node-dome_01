<template>
  <div class="goodsList">
    <herder></herder>
    <h1>list页面</h1>
  </div>
</template>

<script>
  import api from '../api'
  import herder from '../components/header.vue'
  export default {
    data() {
      return{}
    },
    methods:{
      getGoodsList(){
        api.goods.getGoodsLists()
          .then(res => {
            console.log(res);
          })
      }
    },
    components:{
      herder
    },
    created(){
      this.getGoodsList();
    }
  }
</script>

<style lang="scss" scoped>

</style>
