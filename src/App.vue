<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { siteInfo } from './main'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from './stores/useAppStore'

const progress = ref(0)
const router = useRouter()
const appStore = useAppStore()

onMounted(() => {
  router.beforeEach((to, from, next) => {
    progress.value = 30
    next()
  })
  router.afterEach(() => {
    progress.value = 100
    setTimeout(() => {
      progress.value = 0
    }, 300)
  })

  const urlParams = new URLSearchParams(window.location.search)
  appStore.message = urlParams.get('message')
  console.log(appStore.message)
})
</script>

<template>
  <!-- Navbar - Header -->
  <header
    id="nevbar"
    class="nevigete h-auto bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-md fixed top-0 w-full z-40"
    v-if="!appStore.hideHeader"
  >
    <div class="flex justify-between items-center b-container text-slate-800 dark:text-slate-100">
      <div id="title" class="flex my-4">
        <h1 class="siteTitle">{{ siteInfo.defaultName }}</h1>
      </div>
      <!-- Toggle Menu on phone -->
      <div id="linkMenuBar" class="sm:hidden flex">
        <button
          class="bg-slate-50/5 p-2 rounded-lg hover:bg-slate-50 transition-all"
          @click="appStore.toggleMenu()"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <!-- Menu(Links) on Wide Screen Devices -->
      <div id="linkMenu" class="hidden md:flex">
        <RouterLink to="/" class="routerLink" active-class="routerLinkActive">Home</RouterLink>
        <RouterLink to="/about" class="routerLink" active-class="routerLinkActive"
          >About</RouterLink
        >
        <RouterLink to="/articles" class="routerLink" active-class="routerLinkActive"
          >Article</RouterLink
        >
        <RouterLink to="/designs" class="routerLink" active-class="routerLinkActive"
          >Design</RouterLink
        >
      </div>
    </div>
    <!-- Message Box -->
    <div>
      <Transition name="tool.message">
        <div
          id="alert"
          v-if="appStore.message"
          class="flex bg-yellow-50 h-12 items-center px-16 w-screen absolute left-0"
        >
          <p class="text-center w-full">{{ appStore.message }}</p>
          <button
            class="p-2 rounded-lg hover:bg-yellow-100 w-auto transition-all"
            @click="appStore.message = ''"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </Transition>
    </div>
  </header>

  <!-- 抽屉层容器 -->
  <transition name="drawer">
    <div v-show="appStore.isMenuOpen" class="fixed top-0 right-0 h-screen w-64 bg-slate-50 dark:bg-slate-800 z-50">
      <!-- 抽屉层中的导航链接，可复用 LinkMenu -->
      <div class="flex flex-col p-4 space-y-4">
        <!-- Close Button -->
        <i class="fa-solid fa-xmark cursor-pointe m-2" @click="appStore.toggleMenu()"></i>
        <!-- Search Bar -->
        <form class="m-2 bg-slate-100 rounded-md p-2 flex items-center" action="#" :method="get">
          <i class="fa-solid fa-search text-slate-400 mr-1"></i>
          <input
            type="search"
            class="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search"
          />
        </form>
        <!-- Links -->
        <RouterLink
          to="/"
          class="routerLink"
          active-class="routerLinkActive"
          @click="appStore.toggleMenu()"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="routerLink"
          active-class="routerLinkActive"
          @click="appStore.toggleMenu()"
        >
          About
        </RouterLink>
        <RouterLink
          to="/articles"
          class="routerLink"
          active-class="routerLinkActive"
          @click="appStore.toggleMenu()"
        >
          Article
        </RouterLink>
        <RouterLink
          to="/designs"
          class="routerLink"
          active-class="routerLinkActive"
          @click="appStore.toggleMenu()"
        >
          Design
        </RouterLink>
      </div>
    </div>
  </transition>
  <transition name="fade">
    <div
      v-show="appStore.isMenuOpen"
      class="fixed top-0 left-0 w-screen h-screen bg-black/80 dark:bg-black/60 backdrop-blur-md z-40"
      @click="appStore.toggleMenu()"
    />
  </transition>

  <!-- RouterView -->
  <RouterView />

  <!-- Progress Bar -->
  <div
    class="fixed top-0 left-0 h-1 bg-blue-500 dark:bg-blue-700 z-50 transition-all"
    :style="{ width: progress + '%' }"
  />

  <!-- Footer -->
  <footer class="bg-slate-800 dark:bg-slate-900 min-h-64 py-8 text-white" v-if="!appStore.hideFooter">
    <div class="b-container grid md:grid-cols-4 grid-cols-1 space-y-4">
      <!-- Personal Info -->
      <div>
        <h3 class="text-2xl my-2">I'M<br />不断同学</h3>
        <div class="my-2">
          <p class="text-slate-300 dark:text-slate-400 w-2/3">不断同学，创作者，全站开发者，平面设计师。</p>
        </div>
        <div class="flex space-x-2">
          <a
            href="https://www.douyin.com/user/MS4wLjABAAAAJ3lFjGTwun9m7GE83nBU0neN1leLzwMze0VZlcvQWJE"
            class="text-white bg-slate-50/5 p-1 size-10 flex justify-center items-center rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-all"
            ><i class="fa-brands fa-tiktok"></i
          ></a>
          <a
            href="https://www.xiaohongshu.com/user/profile/616808f70000000002019d6a"
            class="text-white bg-slate-50/5 p-1 size-10 flex justify-center items-center rounded-lg hover:bg-slate-50 hover:text-red-500 transition-all"
            ><i class="fa-solid fa-book"></i
          ></a>
          <a
            href="/"
            class="text-white bg-slate-50/5 p-1 size-10 flex justify-center items-center rounded-lg hover:bg-slate-50 hover:text-green-500 transition-all"
            ><i class="fa-brands fa-weixin"></i
          ></a>
          <a
            href="https://space.bilibili.com/403764735"
            class="text-white bg-slate-50/5 p-1 size-10 flex justify-center items-center rounded-lg hover:bg-slate-50 transition-all"
            ><i class="fa-brands fa-bilibili"></i
          ></a>
        </div>
      </div>
      <!-- Links Card -->
      <div>
        <h3 class="text-2xl my-2">本站导航</h3>
        <div class="flex flex-col space-y-2">
          <a href="/home" class="text-slate-300 dark:text-slate-400 hover:text-slate-50">Home</a>
          <a href="/about" class="text-slate-300 dark:text-slate-400 hover:text-slate-50">About</a>
          <a href="/articles?message=还在开发中" class="text-slate-300 dark:text-slate-400 hover:text-slate-50"
            >Articles</a
          >
          <a href="/designs?message=还在开发中" class="text-slate-300 dark:text-slate-400 hover:text-slate-50"
            >Designs</a
          >
        </div>
      </div>
      <!-- Links Card -->
      <div>
        <h3 class="text-2xl my-2">更多站点</h3>
        <div class="flex flex-col space-y-2">
          <a href="/home" class="text-slate-300 dark:text-slate-400 hover:text-slate-50">演示设计</a>
          <a href="/about" class="text-slate-300 dark:text-slate-400 hover:text-slate-50">前端实验室</a>
          <a href="/articles" class="text-slate-300 dark:text-slate-400 hover:text-slate-50">I</a>
          <a href="/designs" class="text-slate-300 dark:text-slate-400 hover:text-slate-50">文档</a>
        </div>
      </div>
      <!-- Links Card -->
      <div>
        <h3 class="text-2xl my-2">友情链接</h3>
        <div class="flex flex-col space-y-2">
          <a href="/" class="text-slate-300 dark:text-slate-400 hover:text-slate-50">期待有缘人</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import './assets/main.css';
.siteTitle {
  font-size: theme('fontSize.xl');
}

/* Message transition */
.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease-in-out;
}

.message-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.message-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* drawer transition */
.drawer-enter {
  transform: translateX(100%);
}
.drawer-enter-to {
  transform: translateX(0%);
}
.drawer-leave {
  transform: translateX(0%);
}
.drawer-leave-to {
  transform: translateX(100%);
}
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease-in-out;
}

/* Mark Layer Tansition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
