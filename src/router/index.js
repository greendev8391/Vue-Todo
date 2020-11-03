import { createWebHistory, createRouter } from 'vue-router';

import Home from '../components/Main.vue';
import TodoForm from '../components/TodoForm/TodoForm.vue';
import NotFound from '../components/NotFound/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Main Page',
    },
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodoForm,
    meta: {
      title: 'Todos',
    },
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
