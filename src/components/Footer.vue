<template>
    <footer class="footer">
      <h3 class="footer__title">Created by Alex Curran</h3>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>

.footer {
  /* margin-top: 6rem; */
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