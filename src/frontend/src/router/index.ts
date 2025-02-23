import { unref } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useStorage } from '@vueuse/core';
import Login from '@views/Login/index.vue';
import ChatView from '@views/ChatView/index.vue';
import NotFound from '@views/NotFound/index.vue';
import { AppRoutes } from '@/enum';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: AppRoutes.Login,
    component: Login,
    beforeEnter: (to, from, next) => {
      // Getting Nickname from localStorage
      const nickname = useStorage('nickname', '');

      if (unref(nickname).trim()) {
        // If the Nickname exist so redirect to the chat page
        next({ name: AppRoutes.Chat });
      } else {
        next();
      }
    },
  },
  {
    path: '/chat',
    name: AppRoutes.Chat,
    component: ChatView,
    beforeEnter: (to, from, next) => {
      const nickname = useStorage('nickname', '');

      if (!unref(nickname).trim()) {
        // IF Nikcname doesn't exist so redirect to Login Page
        next({ name: AppRoutes.Login });
      } else {
        next();
      }
    },
  },
  {
    path: '/:pathMatch(.*)*', // catch all not existing pages
    name: AppRoutes.NotFound,
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
