import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import { actions } from './actions.js'
import { getters } from './getters.js'
import { state, mutations } from './mutations.js'
// import actions from './actions.js'

Vue.config.productionTip = true
Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})

export default store
