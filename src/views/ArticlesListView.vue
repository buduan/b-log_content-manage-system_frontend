<script setup>
import { onMounted, ref } from 'vue'
import postListItem from '@/components/postCards/listView.vue'
import { siteInfo } from '@/main'
import axios from 'axios'

// 定义 articles 变量
const articles = ref({
  posts: [
    // 示例数据
    { postId: 1, title: '暂无内容', abstract: '先去别的地方看看吧！' },
  ],
})

// 异步获取文章列表
onMounted(async () => {
  // axios从后端获取文章列表
  axios
    .get(siteInfo.apiDomain + '/load/Article')
    .then((res) => {
      console.log(res.data)
      articles.value.posts = res.data.posts
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <div id="articleListTitle" class="m-16 text-center py-12">
    <h1 class="md:leading-normal text-4xl md:text-6xl font-thin">articles</h1>
    <h1 class="text-3xl md:text-4xl font-light leading-normal">博客文章</h1>
  </div>

  <ul id="articleList">
    <postListItem
      v-for="(article, index) in articles.posts"
      :key="index"
      :pid="article.postId"
      :title="article.title"
      :abstract="article.abstract"
      :imgUrl="article.imgUrl"
    />
  </ul>
</template>
