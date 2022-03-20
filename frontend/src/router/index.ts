import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { baseUrl } from '../configs';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/settings',
    component: () => import('../views/Settings.vue'),
  },
  {
    path: '/events',
    component: () => import('../views/Events.vue'),
  },
  {
    path: '/apps',
    component: () => import('../views/Apps.vue'),
  },
  {
    path: '/installation',
    redirect: '/apps',
  },
  // catch-all 404 route
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
});

export default router;
