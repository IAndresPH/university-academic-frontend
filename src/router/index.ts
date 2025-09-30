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
    meta: { title: 'Dashboard' },
    children: [
      {
        path: 'student',
        name: 'DashboardStudent',
        component: () => import('@/views/dashboard/DashboardStudent.vue'),
        meta: { title: 'Student Dashboard' },
      },
      {
        path: 'teacher',
        name: 'DashboardTeacher',
        component: () => import('@/views/dashboard/DashboardTeacher.vue'),
        meta: { title: 'Teacher Dashboard' },
      },
      {
        path: 'university',
        name: 'DashboardUniversity',
        component: () => import('@/views/dashboard/DashboardUniversity.vue'),
        meta: { title: 'University Dashboard' },
      },
      {
        path: 'register-student',
        name: 'RegisterStudent',
        component: () => import('@/views/dashboard/RegisterStudent.vue'),
        meta: { title: 'Register Student' },
      },
      {
        path: 'students/:id/edit',
        name: 'EditStudent',
        component: () => import('@/views/dashboard/EditStudent.vue'),
        meta: { title: 'Edit Student' },
      },
      {
        path: 'profile',
        name: 'StudentProfile',
        component: () => import('@/views/dashboard/StudentProfile.vue'),
        meta: { title: 'Student Profile' },
      },

      {
        path: 'students',
        name: 'StudentsTable',
        component: () => import('@/views/dashboard/StudentsTable.vue'),
        meta: { title: 'Students' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const appName = 'Academic Portal';
  document.title = to.meta?.title ? `${to.meta.title} – ${appName}` : appName;
  next();
});

export default router;
