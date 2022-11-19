import { createRouter, createWebHistory } from 'vue-router';
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ViewHome',
      meta: {
        auth: true,
      },
      component: () => import('@/modules/Dashboard/views/Dashboard.vue'),
    },
    {
      path: '/cinema/:cinemaId',
      name: 'ViewCinema',
      meta: {
        auth: true,
      },
      component: () => import('@/modules/Cinema/views/Cinema.vue'),
    },
    {
      path: '/login',
      name: 'ViewLogin',
      component: () => import('@/modules/Login/views/Login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/modules/404/NotFound.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (!(cookies.get('authentication') === 'true')) {
      next({ name: 'ViewLogin' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
