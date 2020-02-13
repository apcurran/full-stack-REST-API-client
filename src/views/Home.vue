<template>
  <main>
      <h1>This specific home</h1>
  </main>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {

        }
    },
    async created() {
        try {
            const API_HOME_URL = `http://localhost:5000/homes/${this.$route.params.homeId}`;
            const options = {
                headers: { "Content-Type": "application/json" }
            };
            const response = await fetch(API_HOME_URL, options);
            const data = await response.json();

            console.log(data);

        } catch (err) {
            console.error(err);
        }
    }
}
</script>

<style>

</style>