import { createRouter, createWebHistory } from 'vue-router'
import TableTodos from '../components/TableTodos.vue'
import addTodo from '../components/AddTodos.vue'
import DeleteTodo from '../components/DeleteTodo.vue'
import aboutUs from '../components/aboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableTodos
    },
    {
      path: '/add',
      name: 'add',
      component: addTodo
    },
    {
      path: '/deleteAll',
      name: 'delete-all',
      component: DeleteTodo
    },
    {
      path: '/about',
      name: 'About',
      component: aboutUs
    },
  ]
})

export default router
