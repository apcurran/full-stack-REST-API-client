<template>
  <button @click="logoutUser" class="logout">Logout</button>
</template>

<script>
export default {
    name: "Logout",
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