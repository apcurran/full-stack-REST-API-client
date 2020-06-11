<template>
    <header class="header--main">
      <nav class="nav">
        <router-link class="logo" :to="{ name: 'Main' }">Billow</router-link>
        <ul v-if="LoginStatusStore.loggedIn === false" class="nav__list">
          <li class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Search' }">Search</router-link>
          </li>
          <li class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Signup' }">Signup</router-link>
          </li>
        </ul>
        <ul v-else class="nav__list">
          <li class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Search' }">Search</router-link>
          </li>
          <li class="nav__list__item">
            <router-link class="nav__list__link" :to="{ name: 'Dashboard' }">Dashboard</router-link>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>
import LoginStatusStore from "../stores/LoginStatusStore";

export default {
    name: "Navbar",
    data() {
        return {
          LoginStatusStore: LoginStatusStore.data
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

@media screen and (max-width: 42.5em) {
  .nav {
    flex-direction: column;
  }

  .nav__list {
    margin: 1rem 0 0 0;
  }
}

@media screen and (max-width: 28em) {
  .nav {
    padding: 1.25rem 1rem;
  }

  .nav__list__item {
    margin: 0 .2rem;
  }

  .nav__list__link {
    font-size: .95rem;
  }
}



</style>