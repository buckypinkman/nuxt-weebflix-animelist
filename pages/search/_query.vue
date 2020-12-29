<template>
  <div class="search-results container mx-auto mt-7 px-5 md:px-0">
    <h1 class="md:text-3xl text-2xl mb-4">
      Search Results for : {{ $route.params.query }}
    </h1>
    <Spinner v-if="isLoading" class="left-2/4 mt-32"/>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
      <anime-list
        v-for="result in results"
        :key="result.mal_id"
        :id="result.mal_id"
        :poster="result.image_url"
        :score="result.score"
        :title="result.title"
        :type="result.type"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "details",
  data() {
    return {
      results: "",
      isLoading: false
    };
  },
  methods: {
    async getAnime() {
      this.isLoading = true
      try {
        const res = await fetch(
          `https://api.jikan.moe/v3/search/anime?q=${this.$route.params.query}&page=1`
        );
        const data = await res.json();
        this.results = data.results;

        this.isLoading = false
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getAnime();
  },
};
</script>