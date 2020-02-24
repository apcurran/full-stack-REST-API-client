<template>
    <header class="header--main">
      <nav class="nav">
        <router-link class="logo" :to="{ name: 'Main' }">Billow</router-link>
        <ul class="nav__list">
          <li class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Search' }">Search</router-link>
          </li>
          <li class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Signup' }">Signup</router-link>
          </li>
          <li v-if="userLoggedIn" class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Dashboard' }">Dashboard</router-link>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            userLoggedIn: null
        }
    },
    mounted() {
        if (localStorage.authToken) {
            this.userLoggedIn = true;
        }
    }
}
</script>

<style>

.nav {
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
}

.logo {
  text-decoration: none;
  color: #222;
  font-size: 2rem;
}

.nav__list {
  display: flex;
  margin-left: 6rem;
}

.nav__list__item {
  list-style: none;
  margin: 0 .5rem;
}

.nav__list__link {
  display: inline-block;
  padding: .5rem;
}

</style>