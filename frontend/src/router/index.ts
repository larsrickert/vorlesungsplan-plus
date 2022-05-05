import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { baseUrl } from '../configs';
import HomeView from '../views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/settings',
    component: () => import('../views/SettingsView.vue'),
  },
  {
    path: '/events',
    component: () => import('../views/EventsView.vue'),
  },
  {
    path: '/apps',
    component: () => import('../views/AppsView.vue'),
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
