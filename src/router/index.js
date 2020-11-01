import { createRouter, createWebHistory } from 'vue-router'
import Client from "../views/Client/Client";
import Home from "../views/Client/Home";

const routes = [
  {
    path: '/',
    name: 'Client',
    component: Client,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/contact',
        component: () => import('../views/Client/Contact')
      },
      {
        path: '/register',
        component: () => import('../views/Client/Register')
      },
      {
        path: '/login',
        component: () => import('../views/Client/Login')
      },
      {
        path: '/advertiser-form',
        component: () => import('../views/Client/AdvertiserForm')
      },
      {
        path: '/promoter-form',
        component: () => import('../views/Client/PromoterForm')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
