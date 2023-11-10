// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "/Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/chisono",
        name: "Chi sono",
        component: () => import("@/views/ChiSono.vue"),
      },
      {
        path: "/progetti",
        name: "Progetti",
        component: () => import("@/views/ProgettiRecenti.vue"),
      },
      {
        path: "/contatti",
        name: "Contatti",
        component: () => import("@/views/Contatti.vue"),
      },
      {
        path: "/blog",
        name: "Blog",
        component: () => import("@/views/BlogPersonale.vue"),
      },
      {
        path: "/article/:id",
        name: "Articolo",
        component: () => import("@/components/Blog/Articolo.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("@/components/PageNotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
