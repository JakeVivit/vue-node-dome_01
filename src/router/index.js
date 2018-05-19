import Vue from 'vue'
import Router from 'vue-router'
import goodsList from '../views/goodsList.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'myGoodsList',
      component: goodsList
    }
  ]
})
