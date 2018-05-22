import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router);

const routers = [
  {
    path: '/',
    name: 'myGoodsList',
    component: (resolve) => require(['../views/goodsList.vue'],resolve)
  }
]

function filterRouters(routers) {  //处理空的路由
  return routers.filter((router) => {
    if (router === null) {
      return false;
    }else if (router.children) {
      router.children = filterRouters(router.children);
    }
    return true;
  });
}

const router = new Router({
  mode: 'history',
  routes: filterRouters(routers)
});

export default router

