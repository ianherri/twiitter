import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import AdminPage from '../views/Admin.vue'
import { users } from '../assets/users'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      requiresAdmin: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user

  if (!user) {
    await store.dispatch('setUser', users[0])
  }

  const isAdmin = false
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin)

  if (requiresAdmin && !isAdmin) next({ name: 'HomeView' })
  else next()
})

export default router
