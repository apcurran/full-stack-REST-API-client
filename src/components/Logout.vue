<template>
  <button @click="logoutUser" class="logout">Logout</button>
</template>

<script>
import LoginStatusStore from "../stores/LoginStatusStore";

export default {
    name: "Logout",
    methods: {
        logoutUser() {
            if (localStorage.length > 0) {
                localStorage.clear();
            }

            this.changeLoginStatus(false);

            this.$router.push("/login");
        },
        changeLoginStatus(status) {
            LoginStatusStore.methods.isLoggedIn(status);
        }
    }
}
</script>

<style>

.logout {
    padding: .5rem;
    background-color: transparent;
    color: #2B6CB0;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    letter-spacing: .08em;
}

</style>