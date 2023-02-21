// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Discord.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home2.vue'),
      },
    ],
  },
  {
    path: "/top",
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
