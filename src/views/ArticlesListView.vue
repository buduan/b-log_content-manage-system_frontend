<script setup>
import { onMounted, ref } from 'vue'
import postListItem from '@/components/postCards/listView.vue'
import { siteInfo } from '@/main'
import axios from 'axios'

// 定义 articles 变量
const articles = ref({
  posts: [ ],
})
const errStatus = ref({
  msg: '',
  svg: '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M250.824 35 83 79.937l33.703 125.868 167.824-44.937L250.824 35Z" fill="#D6DAE1"/><path d="m232.991 111.327-12.142 9.602 9.842 13.399-12.49 8.933 8.746 14.629-14.443 8.639 8.612 13.426-14.71 9.2 8.693 14.309-13.453 10.029 10.457 14.122-13.239 10.377 84.301 26.371 34.501-137.764-84.675-15.272Z" fill="#EFF2F4"/><path d="m142.324 91.928-27.692 127.326 169.767 36.922 27.692-127.326-169.767-36.922Z" fill="#EFF2F4"/><path d="M147.163 263.025c25.805 0 46.724-20.919 46.724-46.724 0-25.805-20.919-46.724-46.724-46.724-25.805 0-46.724 20.919-46.724 46.724 0 25.805 20.919 46.724 46.724 46.724Z" fill="#FF3640"/><path d="M120.124 236.307s25.274-26.478 54.105-.669" stroke="#fff" stroke-width="2.407" stroke-miterlimit="10"/><path d="M257.326 156.606c5.731 0 10.377-4.646 10.377-10.377 0-5.731-4.646-10.377-10.377-10.377-5.731 0-10.377 4.646-10.377 10.377 0 5.731 4.646 10.377 10.377 10.377Z" fill="#005DFF"/><path d="m242.458 171.985 45.574 9.655M238.874 186.053l27.146 5.804" stroke="#231815" stroke-width="2.059" stroke-miterlimit="10"/><path d="m104.104 108.198 47.071-12.918M108.972 122.747l47.071-12.918M113.332 136.333l47.071-12.918M118.174 150.856l32.763-8.959" stroke="#fff" stroke-width="2.407" stroke-miterlimit="10"/><path d="M180.622 155.162s14.442-69.724 69.029-66.729c35.491 1.846 16.502 31.265-1.498 18.267-24.311-17.465-2.219-51.35 36.133-49.826" stroke="#231815" stroke-width="2.14" stroke-miterlimit="10"/></svg>',

})
// 异步获取文章列表
onMounted(async () => {
  // axios从后端获取文章列表
  axios
    .get(siteInfo.apiDomain + '/load/Article')
    .then((res) => {
      articles.value.posts = res.data.posts
    })
    .catch((err) => {
      errStatus.value.msg = err.message
    })
})
</script>

<template>
  <div id="articleListTitle" class="m-16 text-center py-12">
    <h1 class="md:leading-normal text-4xl md:text-6xl font-thin">articles</h1>
    <h1 class="text-3xl md:text-4xl font-light leading-normal">博客文章</h1>
  </div>

  <ul id="articleList" v-if="!errStatus.msg">
    <postListItem
      v-for="(article, index) in articles.posts"
      :key="index"
      :pid="article.postId"
      :title="article.title"
      :abstract="article.abstract"
      :imgUrl="article.imgUrl"
    />
  </ul>
  <div v-else class="flex flex-col items-center justify-center pb-24">
    <div v-html="errStatus.svg" class="max-w-96 w-11/12 mx-auto"> </div>
    <p class="text-center text-red-500 font-bold text-4xl">{{ errStatus.msg }}</p>
  </div>

</template>
