<template>
  <div class="animelist">
    <Spinner v-if="$store.state.isLoading" class="ml-16" />
    <nuxt-link :to="{ name: routeName, params: { id: id } }" v-else>
      <div
        class="cursor-pointer transform transition duration-200 relative md:p-2 hover:scale-95 hover:text-indigo-600"
      >
        <img :src="poster" class="rounded poster shadow-lg" />
        <!-- if the score is zero, return the type and start date for top upcoming anime. Because
        top upcoming anime are always zero scored.-->
        <div
          v-if="score == 0"
          class="p-1 border border-indigo-400 font-semibold absolute top-0 rounded shadow-md text-gray-800 poster"
        >
          {{ type }}
          <span
            v-if="start_date != null"
            class="text-xs border-l border-indigo-400 pl-1"
            >{{ start_date }}</span
          >
        </div>

        <!-- else if, return only the score -->
        <div
          class="p-1 border border-indigo-400 font-semibold absolute top-0 rounded shadow-md text-gray-800 poster"
          v-else-if="score != null"
        >
          <span class="text-indigo-600">★</span> {{ score }}
        </div>
        <div class="text p-3">
          <p class="text-sm md:text-base">{{ title }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["id", "poster", "score", "title", "type", "start_date"],
  computed: {
    routeName() {
      if (this.type == "TV") {
        return "details-tv-id";
      }
      return "details-movie-id";
    },
  },
};
</script>
