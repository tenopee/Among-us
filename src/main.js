import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import router from './router'
import Index from './pages/index'

Vue.config.productionTip = true
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    imposter: 1
  }
})

export default new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app')
