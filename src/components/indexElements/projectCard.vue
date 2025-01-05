<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <div class="p-4 pb-8 h-full relative bg-white border-slate-100 border-2 dark:border-slate-700 rounded-xl transition-all duration-300 hover:border-b-4 hover:border-blue-500">
      <h3 class="text-xl font-medium text-slate-800 mb-4"> {{ title }}</h3>
      <p class="text-slate text-xs mb-4 hyphens-auto line-clamp-1 text-slate-500" style="">
        {{description}}
      </p>
      <!--tags and star count-->
      <div class="flex flex-row justify-between items-center absolute bottom-4 w-full">
        <div class="flex flex-row gap-2" v-if="tags">
          <div class="flex flex-row gap-1">
            <span class="text-slate-800 bg-slate-200 text-xs rounded-full p-1 px-2">tags</span>
          </div>
        </div>
        <div class="flex flex-row gap-2" v-if="star">
          <i class="fa-solid fa-star text-slate-500"></i>
          <span class="text-slate-500 text-xs">Star: {{ star }}</span>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps(['title', 'date', 'description', 'imgUrl', 'link', 'pid', 'tags', 'star']);
</script>
<script>
export default {
  name: 'ProjectCard',
};
</script>
