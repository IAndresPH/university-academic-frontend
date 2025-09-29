import { createRouter, createWebHistory } from "vue-router";

function isAuthenticated() {
  return !!localStorage.getItem("token");
}

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterView.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/views/RecoveryPasswordView.vue"),
    meta: { requiresAuth: false },
  },

  // {
  //   path: "/dashboard",
  //   component: () => import("@/layouts/DashboardLayout.vue"),
  //   meta: { requiresAuth: true },
  //   children: [
  //     {
  //       path: "student",
  //       name: "DashboardStudent",
  //       component: () => import("@/views/Dashboard/Student.vue"),
  //     },
  //     {
  //       path: "teacher",
  //       name: "DashboardTeacher",
  //       component: () => import("@/views/Dashboard/Teacher.vue"),
  //     },
  //     {
  //       path: "university",
  //       name: "DashboardUniversity",
  //       component: () => import("@/views/Dashboard/University.vue"),
  //     },
  //   ],
  // },

  // {
  //   path: "/profile/settings",
  //   name: "ProfileSettings",
  //   component: () => import("@/views/Profile/Settings.vue"),
  //   meta: { requiresAuth: true },
  // },

  {
    path: "/:pathMatch(.*)*",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
