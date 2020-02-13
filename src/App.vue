<template>
  <div id="app">
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
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
.logo {
  font-family: 'Playfair Display', serif;
}

p,
span,
button,
input,
textarea,
a {
  font-family: 'Karla', sans-serif;
}

a {
  text-decoration: none;
  color: #222;
}

/* Navbar */
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
