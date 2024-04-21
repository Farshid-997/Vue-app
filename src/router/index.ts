import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login/Login.vue'
import FooterContent from '../components/footer-content/FooterContent.vue'
import Header from '../components/Header/Header.vue'
import Content from '@/components/content/Content.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header
    },
    
    
    
  

    {
      path: '/',
      name: 'content',
      component: Content
    },

    {
      path: '/',
      name: 'footercontent',
      component: FooterContent
    },

   
    {
      path: '/Login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
