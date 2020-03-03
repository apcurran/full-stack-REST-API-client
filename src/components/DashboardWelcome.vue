<template>
    <div class="dashboard__section__user">
        <h2 class="dashboard__section__user__greeting">Hello, {{ user.name }}!</h2>
        <Logout/>
    </div>
</template>

<script>
import Logout from "../components/Logout";

export default {
    name: "DashboardWelcome",
    props: ["user"],
    components: {
        Logout,
    }
}
</script>

<style>

</style>