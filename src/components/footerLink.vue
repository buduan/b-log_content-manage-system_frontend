<script setup></script>
<template>
  <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
    <div>
      <h3 class="text-2xl my-2">{{ Title }}</h3>
      <div class="flex flex-col space-y-2">
        <a :href="linkHref" class="text-slate-300 hover:text-slate-50">{{ linkTitle }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Title: String,
    linkHref: String,
    linkTitle: String,
  },

  data() {
    return {
      links: [
        {
          Title: '本站导航',
          linkHref: '/home',
          linkTitle: 'Home',
        },
        {
          Title: '更多站点',
          linkHref: '/about',
          linkTitle: 'About',
        },
        {
          Title: '友情链接',
          linkHref: '/articles',
          linkTitle: 'Articles',
        },
      ],
    }
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

