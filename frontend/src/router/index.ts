// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; // Use type-only import
import HomeView from '../views/Home.vue';
import ChatView from '../views/Chat.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/session/:id', name: 'Chat', component: ChatView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;