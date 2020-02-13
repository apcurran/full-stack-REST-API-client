<template>
  <main>
      <h1>Search Page</h1>
      <p v-for="home in homes" :key="home._id">{{ home }}</p>
  </main>
</template>

<script>
export default {
    name: "Search",
    data() {
      return {
        homes: []
      }
    },
    async created() {
      const API_SEARCH_URL = "http://localhost:5000/homes";
      const options = {
        headers: { "Content-Type": "application/json" }
      };
      const response = await fetch(API_SEARCH_URL, options);
      const data = await response.json();

      this.homes = data;
    }
}
</script>

<style>

p {
  margin: 1rem 0;
}

</style>