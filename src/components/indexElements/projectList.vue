<script setup>
import { onMounted, ref } from 'vue'
import projectCard from '@/components/indexElements/projectCard.vue'
import axios from 'axios';

const projects = ref([
  {
    id: 1,
    name: 'Loading...',
    description: 'Loading...',
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/buduan?v=4',
    },
    html_url: '',
  }
])


// 异步获取项目列表
onMounted(async () => {
  // 从GitHub获取项目列表
  axios
    .get('https://api.github.com/users/buduan/repos')
    .then((res) => {
      projects.value = res.data.slice(0, 5)
    })
    .catch((err) => {
      projects.value = [
        {
          id: 1,
          name: 'Error',
          description: err.message,
          owner: {
            avatar_url: 'https://avatars.githubusercontent.com/u/buduan?v=4',
          },
          html_url: '',
        }
      ]
    })
})


// export

</script>
<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <projectCard
        v-for="(project, index) in projects"
        :key="index"
        :pid="project.id"
        :title="project.name"
        :description="project.description"
        :imgUrl="project.owner.avatar_url"
        :link="project.html_url"
        :star="project.stargazers_count"
      />
      <projectCard
        title="查看更多"
        description="前往我的GitHub主页，查看团队项目和其他个人项目"
        link="https://github.com/buduan"
      />
    </div>
  </div>
</template>

<script>

</script>
