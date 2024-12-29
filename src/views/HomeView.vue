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
        <div class="mt-2 flex-col space-x-2">
          <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Vue.js</span>
          <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Express.js</span>
          <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Photoshop</span>
          <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Powerpoint</span>
          <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Illustrator</span>
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
