<template>
  <main>
      <h1>Search Page</h1>
      <article v-for="home in homes" :key="home._id">
        <h2>{{ home.street }}</h2>
        <router-link :to="'/homes/' + home._id">View this home</router-link>
      </article>
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

      try {
        const response = await fetch(API_SEARCH_URL, options);
        const data = await response.json();
  
        this.homes = data;
        
      } catch (err) {
        console.error(err);
      }
    }
}
</script>

<style>

</style>