import Vue from 'vue'
import VueRouter from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed'
import YourFeed from '@/views/YourFeed'
import TagFeed from '@/views/TagFeed'

import Register from '@/views/Register'
import Login from '@/views/Login'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/feed',
    name:'yourFeed',
    component: YourFeed
  },
  {
    path:'/tags/:slug',
    name:'tag',
    component: TagFeed
  },
  {
    path:'/articles/new',
    name:'createArticle',
    component: GlobalFeed
  },
  {
    path:'/articles/:slug',
    name:'article',
    component: GlobalFeed
  },
  {
    path:'/articles/:slug/edit',
    name:'editArticle',
    component: GlobalFeed
  },
  {
    path:'/settings',
    name:'settings',
    component: GlobalFeed
  },
  {
    path:'/profiles/slug',
    name:'userProfile',
    component: GlobalFeed
  },
  {
    path:'/profiles/slug/favorites',
    name:'userProfileFavorites',
    component: GlobalFeed
  },
  


]

const router = new VueRouter({
  routes
})

export default router