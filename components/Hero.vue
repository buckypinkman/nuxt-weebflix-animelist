<template>
  <nuxt-link to="details/tv/40028">
    <div class="hero-section mb-8 relative">
      <div class="title md:w-9/12 p-3 md:ml-8 top-2/4 absolute z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-2">
          Shingeki no Kyojin: The Final Season
        </h2>
        <p class="text-lg">
          With Eren and company now at the shoreline and the threat of Marley
          looming, what’s next for the Scouts and their quest to unravel the
          mysteries of the Titans, humanity, and more?
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-section {
  background-image: url("../assets/images/aot-heroimg.jpg");
  width: 100%;
  height: 60vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  box-shadow: inset 0 -100px 120px rgba(0,0,0,.8)
}

.title {
  top: 23%;
}

@media only screen and (min-width: 1150px) {
  .title {
    top: 33%;
  }
}
</style>