<template>
  <main class="main-page">
    <section class="main-section">
      <section class="main-info">
        <div class="main-info__group">
          <h1 class="main-info__title">Find Your Dream Home.</h1>
          <div class="main-info__subgroup">
            <img src="../assets/icons/bedroom.svg" alt="Bedroom icon" class="main-info__subgroup__img">
            <p class="main-info__subgroup__para">3 Bedrooms</p>
          </div>
          <div class="main-info__subgroup">
            <img src="../assets/icons/bathroom.svg" alt="Bathroom icon" class="main-info__subgroup__img">
            <p class="main-info__subgroup__para">2 Bathrooms</p>
          </div>
          <div class="main-info__subgroup">
            <img src="../assets/icons/kitchen.svg" alt="Kitchen icon" class="main-info__subgroup__img">
            <p class="main-info__subgroup__para">2 Bathrooms</p>
          </div>
        </div>
      </section>
      <img src="../assets/images/kitchen.jpg" alt="Home kitchen" class="main-img">
    </section>
    <div class="main-link-container">
      <router-link class="main-search-link" :to="{ name: 'Search' }">Find Homes</router-link>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Main",
}
</script>

<style>

.main-section {
  padding: 6rem 8rem;
  background-color: #EBF8FF;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  place-items: center center;
  gap: 2.5rem;
}

.main-info {
  justify-self: end;
}

.main-img {
  width: 40rem;
}

.main-info__group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.main-info__title {
  grid-column: 1 / -1;
  justify-self: center;
  font-size: 1.9rem;
}

.main-info__subgroup__img {
  margin: 0 auto 1rem auto;
  display: block;
  width: 3.5rem;
}

.main-link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
}

.main-search-link {
  display: inline-block;
  padding: 1rem 2.75rem;
  text-transform: uppercase;
  letter-spacing: .06em;
  border-radius: 500px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .2);
}

</style>
