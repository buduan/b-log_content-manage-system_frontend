<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { siteInfo } from './main'
</script>

<template>
  <header
    id="nevbar"
    class="nevigete h-auto bg-slate-50/90 backdrop-blur-md px-6 fixed top-0 w-full"
  >
    <div class="flex justify-between items-center">
      <div id="title" class="flex my-4 ml-4">
        <h1 class="siteTitle">{{ siteInfo.defaultName }}</h1>
      </div>
      <div id="linkMenuBar" class="sm:hidden flex">
        <button
          class="bg-slate-50/5 p-2 rounded-lg hover:bg-slate-50 transition-all"
          @click="toggleMenu"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div id="linkMenu" class="hidden md:flex">
        <RouterLink to="/" class="routerLink" active-class="routerLinkActive">Home</RouterLink>
        <RouterLink to="/about" class="routerLink" active-class="routerLinkActive"
          >About</RouterLink
        >
        <RouterLink
          to="/articles?message=还在开发中"
          class="routerLink"
          active-class="routerLinkActive"
          >Article</RouterLink
        >
        <RouterLink
          to="/designs?message=还在开发中"
          class="routerLink"
          active-class="routerLinkActive"
          >Design</RouterLink
        >
      </div>
    </div>
    <div>
      <Transition name="message">
        <div
          id="alert"
          v-if="message"
          class="flex bg-yellow-50 h-12 items-center px-16 w-screen absolute left-0"
        >
          <p class="text-center w-full">{{ message }}</p>
          <button
            class="p-2 rounded-lg hover:bg-yellow-100 w-auto transition-all"
            @click="message = ''"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </Transition>
    </div>
  </header>

  <RouterView />

  <footer
    class="bg-slate-800 min-h-64 px-16 py-8 text-white grid md:grid-cols-4 grid-cols-1 space-y-4"
  >
    <div>
      <h3 class="text-2xl my-2">I'M<br />不断同学</h3>
      <div class="my-2">
        <p class="text-slate-300 w-2/3">不断同学，创作者，全站开发者，平面设计师。</p>
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
    <div>
      <h3 class="text-2xl my-2">本站导航</h3>
      <div class="flex flex-col space-y-2">
        <a href="/home" class="text-slate-300 hover:text-slate-50">Home</a>
        <a href="/about" class="text-slate-300 hover:text-slate-50">About</a>
        <a href="/articles?message=还在开发中" class="text-slate-300 hover:text-slate-50"
          >Articles</a
        >
        <a href="/designs?message=还在开发中" class="text-slate-300 hover:text-slate-50">Designs</a>
      </div>
    </div>
    <div>
      <h3 class="text-2xl my-2">更多站点</h3>
      <div class="flex flex-col space-y-2">
        <a href="/home" class="text-slate-300 hover:text-slate-50">演示设计</a>
        <a href="/about" class="text-slate-300 hover:text-slate-50">前端实验室</a>
        <a href="/articles" class="text-slate-300 hover:text-slate-50">I</a>
        <a href="/designs" class="text-slate-300 hover:text-slate-50">文档</a>
      </div>
    </div>
    <div>
      <h3 class="text-2xl my-2">友情链接</h3>
      <div class="flex flex-col space-y-2">
        <a href="/home" class="text-slate-300 hover:text-slate-50">期待有缘人</a>
      </div>
    </div>
  </footer>
</template>

<style>
@import './assets/main.css';
.siteTitle {
  font-size: theme('fontSize.xl');
}

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
</style>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  methods: {},
  toggleMenu() {
    const menu = document.getElementById('linkMenu')
    menu.classList.toggle('hidden')
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search)
    this.message = urlParams.get('message')
  },
}
</script>
