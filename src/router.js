import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/welcome",
      name: "welcome",
      component: () =>
        import(/* webpackChunkName: "welcome" */ "./views/Welcome.vue")
    },
  ]
});
