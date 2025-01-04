<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <div class="p-4 bg-white border-slate-100 border-2 dark:border-slate-700 rounded-xl transition-all duration-300 hover:border-b-4 hover:border-blue-500">
      <h3 class="text-xl font-medium text-slate-800 mb-4"> {{ title }}</h3>
      <p class="text-slate
        text-xs mb-4 hyphens-auto line-clamp-1 text-slate-500" style="">{{description}}</p>
    </div>
  </a>
</template>

<script setup>
defineProps(['title', 'date', 'description', 'imgUrl', 'link', 'pid', 'tags']);
</script>
<script>
export default {
  name: 'ProjectCard',
};
</script>
