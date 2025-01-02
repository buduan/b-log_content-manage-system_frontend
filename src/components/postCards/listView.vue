<!-- postlistcard.vue -->
<script setup>

defineProps(['title', 'abstract', 'imgUrl'])
</script>

<template>
  <routerLink :to="'/post/' + pid">
    <li class="articleCard flex flex-row items-center gap-4 p-4 lg:mx-48">
    <img
      class="h-24 w-36 object-fill-cover rounded-xl"
      :src="imgUrl"
      alt="article image"
      v-if="imgUrl"
    />
    <div>
      <h2 class="lg:text-4xl text-lg mb-2 listViewTitle text-slate-800">{{ title }}</h2>
      <p class="text-slate-400 text-sm listViewAbstract">
        {{ abstract }}
      </p>
    </div>
  </li>
  </routerLink>

</template>

<style scoped>
.listViewTitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.listViewAbstract p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
