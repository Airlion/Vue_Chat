import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HOME/home.vue'),
    // component: Home,
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/ADMIN/admin.vue'),
  }
]

export default createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes,
})