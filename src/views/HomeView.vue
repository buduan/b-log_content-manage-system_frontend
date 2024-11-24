<script setup></script>

<template>
  <main>
    <div class="px-16 mt-16 md:min-h-96 p-12 bg-white">
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
        <a class="b-button bg-yellow-300" href="/contact">联系我</a>
        <a class="b-button bg-slate-100" href="/about">关于我</a>
      </div>
    </div>

    <div class="w-full p-4 px-16 min-h-24 bg-slate-50 hidden md:block">
      <h3 class="text-gray-400">技能树</h3>
      <div class="mt-2 flex-col space-x-2">
        <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Vue.js</span>
        <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Express.js</span>
        <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Photoshop</span>
        <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Powerpoint</span>
        <span class="h-12 min-w-24 p-2 bg-slate-200 text-center content-center">Illustrator</span>
      </div>
    </div>
  </main>
</template>
