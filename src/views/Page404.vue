<template>
  <main class="main--error-404">
    <h1 class="main--error-404__header">404</h1>
    <h2 class="main--error-404__sub-header">This page does not exist.</h2>
  </main>
</template>

<script>
export default {
    name: "Page404"
}
</script>

<style>

.main--error-404 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main--error-404__header {
    vertical-align: top;
    font-size: calc(4rem + 12vw);
}

.main--error-404__sub-header {
    font-size: calc(1rem + .5vw);
}

</style>