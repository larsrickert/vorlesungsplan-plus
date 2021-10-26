import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { baseUrl, isProduction } from '../configs';
import Home from '../views/Home.vue';
import authGuard from './auth-guard';

// provide typings for route meta attribute
declare module 'vue-router' {
  interface RouteMeta {
    /** Whether the route needs the user to be authenticated. */
    requiresAuth?: boolean;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    name: 'Test',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../views/Test.vue'),
  });
}

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
});

export default router;

router.beforeEach(authGuard);
