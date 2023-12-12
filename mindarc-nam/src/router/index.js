import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResponsiveLayout from '../views/ResponsiveLayout.vue';
import DataTabsAccordion from '../views/ResponsiveLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ResponsiveLayout',
      name: 'ResponsiveLayout',
      component: ResponsiveLayout
    },
    {
      path: '/DataTabsAccordion',
      name: 'DataTabsAccordion',
      component: DataTabsAccordion
    }
  ]
})

export default router
