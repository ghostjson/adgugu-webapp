import { createRouter, createWebHistory } from 'vue-router'
import Client from "../views/Client/Client";
import Home from "../views/Client/Home";
import Contact from "../views/Client/Contact";
import Register from "../views/Client/Register";
import Login from "../views/Client/Login";

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
        component: Contact
      },
      {
        path: '/register',
        component: Register
      },
      {
        path: '/login',
        component: Login
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
