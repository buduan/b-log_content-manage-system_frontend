import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { siteInfo } from '../main.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        name: '主页',
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        name: '关于',
      },
    },
    {
      path: '/articles',
      name: 'articles',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArticlesListView.vue'),
      meta: {
        name: '文章',
      },
    },
    {
      path: '/designs',
      name: 'designs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DesignListView.vue'),
      meta: {
        name: '设计',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
      meta: {
        name: 'Halo',
      },
    },
    {
      path: '/post/:id',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/post/postPage.vue'),
      meta: {
        name: '文章',
      },
    },
    {
      path: '/post/:id/edit',
      name: 'editPost',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/post/postEdit.vue'),
      meta: {
        name: '编辑文章',
      },
    },
    // 捕获所有未匹配的路由
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/notFound.vue'),
      meta: {
        name: '404 Not Found',
      },
    }
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.name + ' - ' + siteInfo.defaultTitle || siteInfo.defaultTitle
  next()
})

export default router
