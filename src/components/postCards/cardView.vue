<!-- postlistcard.vue -->
<script setup>
defineProps(['title', 'abstract', 'imgUrl'])
</script>

<template>
  <li class="articleCard flex flex-row items-center gap-4 p-4 lg:mx-48">
    <img class="h-24 w-auto" :src="imgUrl" alt="article image" v-if="imgUrl" />
    <div class="articleCardTitle">
      <h2 class="lg:text-4xl text-lg mb-2">{{ title }}</h2>
      <p class="text-slate-400 text-sm">
        {{ abstract }}
      </p>
    </div>
  </li>
</template>

<style scoped>
.articleCardTitle p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
