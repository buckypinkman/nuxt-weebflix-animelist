<template>
  <nav class="py-4 px-5 text-white bg-gray-900 shadow-md">
    <div class="container mx-auto flex justify-between">
      <nuxt-link to="/" class="flex">
        <img src="../assets/images/logo.png" class="w-24 md:w-32" alt="">
      </nuxt-link>
      <div class="nav-items ml-5 md:ml-10">
        <input type="text" class="py-1 md:py-2 px-4 bg-gray-800 focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-indigo-500 text-sm rounded-full transition duration-200 md:w-64" placeholder="Search anime.." v-model="query" @keypress.enter="goToResult">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    goToResult() {
      this.$router.push({ name: 'search-query', params: { query: this.query } })
    }    
  },
}
</script>

<style scoped>

a.nuxt-link-exact-active {
  font-weight: 600;
}
</style>
