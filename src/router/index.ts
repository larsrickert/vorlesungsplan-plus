import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { baseUrl, isProduction } from '../configs';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/settings',
    component: () => import('../views/Settings.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/SettingsMain.vue'),
      },
    ],
  },
  {
    path: '/events',
    component: () => import('../views/Events.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/EventOverview.vue'),
      },
      {
        path: ':id',
        component: () => import('../views/Event.vue'),
      },
    ],
  },
  {
    path: '/beta',
    component: () => import('../views/BetaNotes.vue'),
  },
  // catch-all 404 route
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

if (!isProduction) {
  routes.push({
    path: '/test',
    component: () => import('../views/Test.vue'),
  });
}

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
});

export default router;
