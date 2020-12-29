<template>
  <div>
    <div class="relative inline-block text-left">
      <div>
        <button
          type="button"
          class="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          @click="showDropdown = !showDropdown"
        >
          Select Top Anime
          <!-- Heroicon name: chevron-down -->
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <transition name="ease">
        <div
          class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
          v-if="showDropdown"
        >
          <div
            class="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            @click="showDropdown = false"
          >
            <nuxt-link
              href="#"
              class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 rounded"
              role="menuitem"
              to="/Upcoming">Top Upcoming</nuxt-link
            >
            <nuxt-link
              href="#"
              class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 rounded"
              role="menuitem"
              to="/TopTv"> Top TVs </nuxt-link
            >
            <nuxt-link
              href="#"
              class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 rounded"
              role="menuitem"
              to="/TopMovie"> Top Movies </nuxt-link
            >
            <nuxt-link
              href="#"
              class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 rounded"
              role="menuitem"
              to="/Airing"> Top Airing </nuxt-link
            >
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>

<style>
  .ease-enter-active, .ease-leave-active {
    transition: opacity .2s;
  }

  .ease-enter, .ease-leave-to {
    opacity: 0;
  }
</style>