<script setup></script>
<template>
  <div
    class="min-h-screen bg-white dark:bg-slate-900 py-[10vh] px-8 flex flex-col md:flex-row justify-center md:items-center max-w-5xl mx-auto"
  >
    <!-- about -->
    <div class="md:w-1/2 flex flex-col items-center text-gray-800 dark:text-slate-100">
      <div>
        <img
          src="@/assets/avatar.png"
          alt="不断同学"
          class="md:size-72 size-48 md:rounded-[5rem] rounded-[3rem] m-8"
        />
      </div>
      <div class="text-center">
        <h1 class="md:text-5xl text-3xl font-bold text-gray-800 dark:text-slate-100 mb-2 py-2">
          不断同学(刘柏岑)
        </h1>
        <p class="text-gray-300 dark:text-slate-400 mb-6 text-sm py-1">
          一个还算是有趣的全站开发者 + 设计师
        </p>
        <router-link
          class="px-6 py-2 card rounded-full hover:bg-gray-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition text-slate-800 dark:text-slate-100 border border-gray-50 dark:border-slate-700"
          to="/"
        >
          前往我的网站
        </router-link>
      </div>
    </div>
    <!-- Blocks -->
    <div
      class="mt-12 w-full max-w-md text-center space-y-8 md:w-1/2 md:mt-0 md:ml-4 text-gray-800 dark:text-slate-100"
    >
      <!-- 联系我 -->
      <div>
        <h2 class="text-lg md:text-2xl font-semibold text-gray-800 dark:text-slate-100 mb-4">
          联系我
        </h2>
        <div
          class="inline-block p-4 card !rounded-[2rem] bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-700"
        >
          <div class="inline-grid grid-cols-4 gap-2">
            <a
              href="tel:0086-139-3675-0769"
              class="size-16 rounded-full border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 flex justify-center items-center text-xl"
            >
              <i class="fa-solid fa-phone text-green-500"></i>
            </a>
            <a
              href="mailto:buduan461@gmail.com"
              class="size-16 rounded-full border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 flex justify-center items-center text-xl"
              ><i class="fa-solid fa-envelope text-blue-500"></i
            ></a>
            <button
              @click="showWechat = !showWechat"
              class="size-16 rounded-full border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 flex justify-center items-center text-xl"
            >
              <i class="fa-brands fa-weixin text-green-500"></i>
            </button>
            <a
              href="https://t.me/buduan"
              class="size-16 rounded-full border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 flex justify-center items-center text-xl"
              ><i class="fa-brands fa-telegram text-sky-500"></i
            ></a>
          </div>
        </div>
      </div>

      <!-- 社交媒体 -->
      <div>
        <h2 class="text-lg md:text-2xl font-semibold text-gray-800 dark:text-slate-100 mb-4">
          社交媒体
        </h2>
        <div
          class="inline-block p-4 card !rounded-[2rem] bg-white dark:bg-slate-800 border border-gray-50 dark:border-slate-700"
        >
          <div class="inline-grid grid-cols-4 gap-2">
            <a
              href="https://www.douyin.com/user/MS4wLjABAAAAJ3lFjGTwun9m7GE83nBU0neN1leLzwMze0VZlcvQWJE"
              class="size-16 rounded-full border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 flex justify-center items-center text-xl"
              ><i class="fa-brands fa-tiktok text-violet-900 dark:text-violet-300"></i>
            </a>
            <a
              href="https://www.douyin.com/user/MS4wLjABAAAAJ3lFjGTwun9m7GE83nBU0neN1leLzwMze0VZlcvQWJE"
              class="size-16 rounded-full border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 flex justify-center items-center text-xl"
              ><i class="fa-solid fa-envelope text-blue-500"></i
            ></a>
            <a
              href="https://www.douyin.com/user/MS4wLjABAAAAJ3lFjGTwun9m7GE83nBU0neN1leLzwMze0VZlcvQWJE"
              class="size-16 rounded-full border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 flex justify-center items-center text-xl"
              ><i class="fa-brands fa-weixin text-green-500"></i
            ></a>
            <a
              href="https://www.douyin.com/user/MS4wLjABAAAAJ3lFjGTwun9m7GE83nBU0neN1leLzwMze0VZlcvQWJE"
              class="size-16 rounded-full border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 flex justify-center items-center text-xl"
              ><i class="fa-brands fa-telegram text-sky-500"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/useAppStore'
const appStore = useAppStore()

export default {
  name: 'ContactView',
  created() {
    ;(appStore.hideHeader = true), (appStore.hideFooter = true)
  },
  unmounted() {
    ;(appStore.hideHeader = false), (appStore.hideFooter = false)
  },
  methods: {
    fetchData() {
      console.log('fetching data')
    },
  },
}
</script>

<style scoped>
.card {
  box-shadow: 0px 8px 30px -8px rgba(30, 41, 59, 0.05);
}
</style>
