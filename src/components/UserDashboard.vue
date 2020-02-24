<template>
  <section class="user-dash">
      <h3 class="user-dash__title">Your Favorite Homes</h3>
  </section>
</template>

<script>
export default {
    name: "UserDashboard",
    async created() {
        try {
            const API_FAVORITES_URL = `http://localhost:5000/user/favorites`;
            const options = {
                headers: {
                    authorization: `Bearer ${localStorage.authToken}`,
                    "Content-Type": "application/json"
                }
            };
            const response = await fetch(API_FAVORITES_URL, options);
            const data = await response.json();

            console.log(data);

        } catch (err) {
            console.error(err);
        }
    }
}
</script>

<style>

.user-dash {
    margin: 2.65rem 5rem;
}

.user-dash__title {
    font-size: 1.35rem;
}

</style>