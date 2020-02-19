<template>
  <main>
      <h1>Dashboard</h1>
      <button @click="logoutUser" class="logout">Logout</button>
  </main>
</template>

<script>
export default {
    name: "Dashboard",
    methods: {
        logoutUser() {
            if (localStorage.length > 0) {
                localStorage.clear();
            }

            this.$router.push("/login");
        }
    }
}
</script>

<style>

</style>