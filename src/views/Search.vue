<template>
  <main class="main main-search">
    <h1 class="main-search__title">Search Page</h1>
    <div class="homes-group">
      <router-link :to="'/homes/' + home._id" class="home-group__card__info__link"  v-for="home in homes" :key="home._id">
        <article class="homes-group__card">
          <div class="homes-group__card__img-container">
            <img :src="home.house_img_main" alt="House" class="homes-group__card__img">
          </div>
          <div class="home-group__card__info">
            <h2 class="home-group__card__info__price">{{ formatPrice(home.price) }}</h2>
            <h3 class="home-group__card__info__street">{{ home.street }},</h3>
            <h3 class="home-group__card__info__state">{{ home.state }}</h3>
            <ul class="home-group__card__info__desc-group">
              <li>{{ home.bedrooms }} bds</li>
              <li>{{ home.bathrooms }} ba</li>
              <li>{{ home.squareFeet }} sqft</li>
            </ul>
          </div>
        </article>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
    name: "Search",
    data() {
      return {
        homes: []
      }
    },
    async created() {
      const API_SEARCH_URL = "http://localhost:5000/homes";
      const options = {
        headers: { "Content-Type": "application/json" }
      };

      try {
        const response = await fetch(API_SEARCH_URL, options);
        const data = await response.json();
  
        this.homes = data;

        console.log(data);
        
      } catch (err) {
        console.error(err);
      }
    },
    methods: {
      formatPrice(homePrice) {
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        });

        return formatter.format(homePrice);
      }
    }
}
</script>

<style>

.main-search {
  width: 80rem;
  max-width: 92.5%;
  margin: 0 auto;
}

.main-search__title {
  margin: 1rem 0 2rem 0;
  text-align: center;
}

.homes-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 2rem;
}

.homes-group__card {
  background-color: hsl(214, 32%, 96%);
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
}

.homes-group__card__img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  object-position: center;
  border-radius: 4px 4px 0 0;
}

.home-group__card__info {
  padding: .5rem 1rem 1rem 1rem;
}

.home-group__card__info > * {
  margin: .2rem 0;
}

.home-group__card__info__street,
.home-group__card__info__state {
  font-size: 1rem;
  font-family: 'Karla', sans-serif;
}

.home-group__card__info__street {
  margin-bottom: 0;
}

.home-group__card__info__state {
  margin-top: 0;
}

.home-group__card__info__desc-group {
  display: flex;
  list-style: none;
}

.home-group__card__info__desc-group li {
  padding-right: 1rem;
  padding-left: 1rem;
  border-right: 1px solid #718096;
}

.home-group__card__info__desc-group li:first-of-type {
  padding-left: 0;
}

.home-group__card__info__desc-group li:last-of-type {
  padding-right: 0;
  border-right: none;
}

</style>