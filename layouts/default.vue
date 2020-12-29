<template>
  <div>
    <navbar />
    <Hero />
    <div class="app container px-5 md:px-0 mx-auto">
      <nav-button class="mb-6" />
      <transition name="ease">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  color: white;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #1a202c;
}

.poster {
  background-color: rgba(229, 230, 235, 0.86);
}
</style>
