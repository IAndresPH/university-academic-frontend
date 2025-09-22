import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { title: 'Login' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  const appName = 'Portal Académico';
  if (to.meta.title) {
    document.title = `${to.meta.title} – ${appName}`;
  } else {
    document.title = appName;
  }
  next();
});
