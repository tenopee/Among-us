import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Index,
      name: 'setting',
    },
    {
      path: '/gameMemo',            
      component: GameMemo,
      name: 'gameMemo',
    },
  ]
});
