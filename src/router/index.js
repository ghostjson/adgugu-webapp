import { createRouter, createWebHistory } from 'vue-router'
import Client from "../views/Client/Client";
import Home from "../views/Client/Home";
import Promoter from "../views/Promoter/Promoter";

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
    path: '/promoter',
    name: 'Promoter',
    component: Promoter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
