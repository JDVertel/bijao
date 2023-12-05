import { createRouter, createWebHistory } from "vue-router";

/* views */
import informes from "../views/Informes.vue";
import HomeView from "../views/HomeView.vue";
import dashboard from "../views/Dashboard.vue";
import acercade from "../views/acercade.vue";
import ordenes from "../views/Ordenes.vue";
import registro from "../views/registro.vue";
import errorpage from "../views/errorpage.vue";

/* components */

import contenidos from "../components/u_admin/Contenido.vue";
import parametros from "../components/u_admin/Parametros.vue";
import tamalero from "../components/u_tamaleros/TamaleroHome.vue";
import pedidos from "../components/u_gestor/Pedidos.vue";
import login from "../components/login/Login.vue";






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    /*     {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }, */
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/acercade",
      name: "acercade",
      component: acercade,
    },
    {
      path: "/errorpage",
      name: "errorpage",
      component: errorpage,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboard,
    },

    {
      path: "/ordenes",
      name: "ordenes",
      component: ordenes,
    },

    {
      path: "/pedidos",
      name: "pedidos",
      component: pedidos,
    },
    {
      path: "/informes",
      name: "informes",
      component: informes,
    },
    {
      path: "/contenidos",
      name: "contenidos",
      component: contenidos,
    },
    {
      path: "/parametros",
      name: "parametros",
      component: parametros,
    },
  
    {
      path: "/tamalero",
      name: "tamalero",
      component: tamalero,
    },
     
    {
      path: "/registro",
      name: "registro",
      component: registro,
    },
  ],
});

export default router;
