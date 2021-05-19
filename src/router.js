import Vue from 'vue'
import Router from 'vue-router'
import Settings from './templates/settings'
import GameMemo from './templates/gameMemo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Settings,
      name: 'settings'
    },
    {
      path: '/gameMemo',
      component: GameMemo,
      name: 'gameMemo'
    }
  ]
})
