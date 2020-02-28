<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
    --purple: #4e62c2;
    --blue: #3182ce;
    --light-blue: #63b3ed;
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

/* Global default height for all pages */
.main {
  min-height: 80vh;
}

</style>
