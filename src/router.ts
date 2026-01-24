import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/HomeView.vue'),
    },
    {
      path: '/contact',
      component: () => import('./views/ContactView.vue'),
    },
    {
      path: '/rants',
      component: () => import('./views/RantsView.vue'),
    }
  ],
})

export default router
