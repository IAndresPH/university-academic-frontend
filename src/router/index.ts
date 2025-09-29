import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { title: 'Login' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: { title: 'Panel' },
    children: [
      {
        path: 'student',
        name: 'DashboardStudent',
        component: () => import('@/views/dashboard/DashboardStudent.vue'),
        meta: { title: 'Panel Estudiante' },
      },
      {
        path: 'teacher',
        name: 'DashboardTeacher',
        component: () => import('@/views/dashboard/DashboardTeacher.vue'),
        meta: { title: 'Panel Docente' },
      },
      {
        path: 'university',
        name: 'DashboardUniversity',
        component: () => import('@/views/dashboard/DashboardUniversity.vue'),
        meta: { title: 'Panel Universidad' },
      },
      {
        path: 'registrar-estudiante',
        name: 'RegistrarEstudiante',
        component: () => import('@/views/dashboard/RegistrarEstudiante.vue'),
        meta: { title: '  ' },
      },
      {
        path: 'estudiantes/:id/editar',
        name: 'EditarEstudiante',
        component: () => import('@/views/dashboard/EditarEstudiante.vue'),
        meta: { title: 'Editar Estudiante' },
      },

      {
        path: 'estudiantes',
        name: 'EstudiantesTabla',
        component: () => import('@/views/dashboard/EstudiantesTabla.vue'),
        meta: { title: 'Estudiantes' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const appName = 'Portal Académico';
  document.title = to.meta.title ? `${to.meta.title} – ${appName}` : appName;
  next();
});

export default router;
