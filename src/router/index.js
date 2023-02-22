// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "top",
    component: () => import("@/layouts/default/Gacha001.vue"),
  },
  {
    path: "/info/gacha001",
    name: "infoGacha001",
    component: () => import("@/layouts/default/InfoGacha001.vue"),
  },
  {
    path: "/list",
    name: "listNFT",
    component: () => import("@/layouts/default/ListNFT.vue"),
  },
  {
    path: "/spin/gacha001/0",
    name: "demoEffect",
    component: () => import("@/layouts/default/GachaEffect.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
