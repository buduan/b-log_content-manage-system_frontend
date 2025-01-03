<script setup></script>

<template>
  <main>
    <div class="mt-16 md:min-h-96 p-16 bg-white b-container">
      <div class="relative z-10">
        <div>
          <h1 class="md:text-[4rem] text-4xl leading-normal font-bold mb-4 text-slate-800">
            Hi! 这里是 <br />
            <span class="text-blue-600">不断同学</span> 的个人主页
          </h1>
          <p class="text-slate-500 md:text-2xl text-xl">
            一个还算是有趣的东北人，在宁波读书中<br />宁诺计算机科学专业在读大二学生<br />
          </p>
        </div>
        <div class="my-8 space-x-2 flex justify-center md:justify-start">
          <a class="b-button bg-yellow-400" href="/contact">联系我</a>
          <a
            class="b-button md:!text-slate-800 !text-white md:bg-slate-100 bg-slate-900"
            href="/about"
            >关于我</a
          >
        </div>
      </div>
    </div>

    <div
      class="decorateCircle size-96 absolute inset-y-0 right-10 opacity-40 md:opacity-50 top-24 z-0 rotate-slow md:animate-spin hover:!animate-none"
    ></div>

    <div class="w-full py-4 min-h-24 bg-slate-50 hidden md:block">
      <div class="b-container">
      <h3 class="text-gray-400">技能树</h3>
      <div class="mt-4 flex flex-wrap space-x-4">
        <div class="flex items-center space-x-2 p-2 px-4 rounded-lg">
        <i class="fa-brands fa-vuejs text-green-500 text-2xl"></i>
        <span>Vue.js</span>
        </div>
        <div class="flex items-center space-x-2 p-2 px-4 rounded-lg">
        <i class="fa-brands fa-node-js text-green-500 text-2xl"></i>
        <span>Express.js</span>
        </div>
        <div class="flex items-center space-x-2 p-2 px-4 rounded-lg">
        <img src="@/assets/adobe_ps.svg" class="w-8 h-8" />
        <span>Photoshop</span>
        </div>
        <div class="flex items-center space-x-2 p-2 px-4 rounded-lg">
        <i class="fa-solid fa-file-powerpoint text-orange-500 text-2xl"></i>
        <span>Powerpoint</span>
        </div>
        <div class="flex items-center space-x-2 p-2 px-4 rounded-lg">
        <img src="@/assets/adobe_ai.svg" class="w-8 h-8" />
        <span>Illustrator</span>
        </div>
      </div>
      </div>
    </div>
    <div class="b-container mx-auto my-8">
      <span class="text-lg font-medium text-blue-500">More about me...</span>
      <h2 class="text-3xl font-bold text-slate-800 mb-4">我的技能</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <!-- 第一个色块 - 开发 -->
        <div class="relative p-4 bg-blue-50/50 border-2 border-blue-100 rounded-xl transform transition-all duration-300 hover:scale-[1.03] hover:border-l-8 hover:border-blue-500">
          <!-- 图标 -->
          <div class="absolute -top-6 left-4 w-20 h-20">
            <img src="@/assets/computer.png" />
          </div>
          <!-- 内容 -->
          <h2 class="text-2xl font-bold text-blue-500 mb-4 pl-24">> Developing</h2>
          <div class="flex space-x-2 p-2">
            <div class="flex-1 bg-blue-400 bg-opacity-20 p-2 rounded-lg text-center">
                <i class="fa-solid fa-earth-americas text-blue-500 text-2xl"></i>
              <p>Web开发</p>
            </div>
            <div class="flex-1 bg-blue-400 bg-opacity-20 p-2 rounded-lg text-center">
              <i class="fa-brands fa-vuejs text-blue-500 text-2xl"></i>
              <p>Vue.js前端</p>
            </div>
            <div class="flex-1 bg-blue-400 bg-opacity-20 p-2 rounded-lg text-center">
                <i class="fa-solid fa-server text-blue-500 text-2xl"></i>
              <p>后端技术</p>
            </div>
          </div>
        </div>

        <!-- 第二个色块 - 设计 -->
        <div class="relative p-4 bg-yellow-50/50 border-2 border-yellow-100 rounded-xl transform transition-all duration-300 hover:scale-[1.03] hover:border-l-8 hover:border-yellow-500">
          <!-- 图标 -->
          <div class="absolute -top-6 left-4 w-20 h-20">
            <img src="@/assets/pencil.png" />
          </div>
          <!-- 内容 -->
          <h2 class="text-2xl font-bold text-yellow-500 mb-4 pl-24">> Design</h2>
          <div class="flex space-x-2 p-2">
            <div class="flex-1 bg-yellow-300 bg-opacity-20 p-2 rounded-lg text-center">
              <i class="fa-solid fa-palette text-yellow-500 text-2xl"></i>
              <p>平面设计</p>
            </div>
            <div class="flex-1 bg-yellow-300 bg-opacity-20 p-2 rounded-lg text-center">
              <i class="fa-solid fa-paint-brush text-yellow-500 text-2xl"></i>
              <p>UI 设计</p>
            </div>
            <div class="flex-1 bg-yellow-300 bg-opacity-20 p-2 rounded-lg text-center">
              <i class="fa-solid fa-pen-fancy text-yellow-500 text-2xl"></i>
              <p>演示设计</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.decorateCircle {
  /* Ellipse 1 */

  background: conic-gradient(from 180deg at 50% 50%, #a855f7 0deg, #38bdf8 180deg, #f59e0b 360deg);
  filter: blur(120px);
  border-radius: 50%;
}
</style>
