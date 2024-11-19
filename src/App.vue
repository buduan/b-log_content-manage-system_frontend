<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { siteInfo } from './main'
</script>

<template>
  <header class="nevigete h-auto bg-white px-6 fixed top-0 w-full">
    <div class="flex justify-between items-center">
      <div id="title" class="flex my-4 ml-4">
        <h1 class="siteTitle">{{ siteInfo.defaultName }}</h1>
      </div>
      <div id="linkMenuBar" class="flex sm:invisible visible">aaaa</div>
      <div id="linkMenu" class="flex invisible md:visible">
        <RouterLink to="/" class="routerLink" active-class="routerLinkActive">Home</RouterLink>
        <RouterLink to="/about" class="routerLink" active-class="routerLinkActive"
          >About</RouterLink
        >
        <RouterLink to="/articles" class="routerLink" active-class="routerLinkActive"
          >Article</RouterLink
        >
        <RouterLink to="/designs" class="routerLink" active-class="routerLinkActive"
          >Design</RouterLink
        >
      </div>
    </div>
  </header>
  <div v-if="0">
    <div id="alert" class="flex bg-yellow-50 h-12 items-center mt-16">
      <p class="text-center w-full">🎉 This is an alert message!</p>
    </div>
  </div>

  <div class="continer"></div>
  <RouterLink ref=""></RouterLink>
  <RouterView />

  <footer class="bg-slate-800 min-h-64 p-12">
    <h1>11</h1>
  </footer>
</template>

<style>
@import './assets/main.css';
.siteTitle {
  font-size: theme('fontSize.xl');
}
</style>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        this.someData = data
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  },
}
</script>
