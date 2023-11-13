import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/info',
      name: 'informacion',
      component: () => import('../views/infoView.vue')
    },
    {
      path: '/CursosP',
      name: 'CursosPresenciales',
      component: () => import('../views/CursosPView.vue')
    },
    {
      path: '/CursosL',
      name: '/CursosEnLinea',
      component: () => import('../views/CursosLView.vue')
    },
    {
      path: '/Galeria',
      name: '/Galeria',
      component: () => import('../views/GaleriaView.vue')
    },
    {
      path: '/Blog',
      name: '/Blog',
      component: () => import('../views/BlogView.vue')
    }
  ]
})

export default router
