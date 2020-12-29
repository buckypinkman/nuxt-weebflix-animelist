<template>
  <div id="index"></div>
</template>

<script>
export default {
  middleware({ redirect }) {
    return redirect("/Upcoming");
  },
};
</script>

<style scoped>
</style>
