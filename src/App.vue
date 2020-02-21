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
    <footer class="footer">
      <h3 class="footer__title">Created by Alex Curran</h3>
    </footer>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global Fonts */
h1,
h2,
.logo {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
}

h3 {
  font-weight: 400;
}

p,
span,
button,
input,
textarea,
label,
a {
  font-family: 'Karla', sans-serif;
}

a {
  text-decoration: none;
  color: #222;
}

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

/* Global default height for all pages */
.main {
  min-height: 80vh;
}

.footer {
  margin-top: 6rem;
  padding: 2rem;
  background-color: #1a202c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__title {
  font-family: 'Karla', sans-serif;
  font-weight: 400;
  font-size: .975rem;
  opacity: .7;
  transition: opacity 125ms ease-in-out;
}

.footer__title:hover {
  opacity: 1;
}

</style>
