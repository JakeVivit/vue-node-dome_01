import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import * as getters from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    goods
  },
  getters
})
