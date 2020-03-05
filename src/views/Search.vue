<template>
  <main class="main main-search">
    <Searchbar v-on:searchResults="updateHomeResults($event)"/>
    <div v-if="loading" class="loading">Loading...</div>
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
    <div class="search-nav">
      <button @click="getPrevSearchResults" class="search-nav__btn">Previous Page</button>
      <button @click="getNextSearchResults" class="search-nav__btn">Next Page</button>
    </div>
  </main>
</template>

<script>
import Searchbar from "../components/Searchbar";

export default {
    name: "Search",
    components: {
      Searchbar,
    },
    data() {
      return {
        homes: [],
        searchNav: {
          previous: null,
          next: null
        },
        loading: false
      }
    },
    async created() {
      // Initial page 1 results
      const API_SEARCH_URL = "https://alexcurran-billow.herokuapp.com/homes?page=1&limit=20";
      const options = {
        headers: { "Content-Type": "application/json" }
      };

      try {
        this.loading = true;
        const response = await fetch(API_SEARCH_URL, options);
        const data = await response.json();

        // Set home results
        this.homes = data.results;
        // Set next page num
        this.searchNav.next = data.next.page;
        this.loading = false;

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
      },
      async getNextSearchResults() {
        if (this.searchNav.next === null) return;

        const searchPage = this.searchNav.next;
        const API_SEARCH_URL = `https://alexcurran-billow.herokuapp.com/homes?page=${searchPage}&limit=20`;
        const options = {
          headers: { "Content-Type": "application/json" }
        };

        try {
          
          const response = await fetch(API_SEARCH_URL, options);
          const data = await response.json();

          this.homes = data.results;
          // Set next to null if next prop does not exist on data from API
          if (data.next === undefined) {
            this.searchNav.next = null;
            // Otherwise, set the data prop
          } else {
            this.searchNav.next = data.next.page;
          }

          // Set prev page num
          this.searchNav.previous = data.previous.page;

        } catch (err) {
          console.error(err);
        }
      },
      async getPrevSearchResults() {
        if (this.searchNav.previous === null) return;

        const searchPage = this.searchNav.previous;
        const API_SEARCH_URL = `https://alexcurran-billow.herokuapp.com/homes?page=${searchPage}&limit=20`;
        const options = {
          headers: { "Content-Type": "application/json" }
        };

        try {
          
          const response = await fetch(API_SEARCH_URL, options);
          const data = await response.json();

          this.homes = data.results;
          // Set next page num
          this.searchNav.next = data.next.page;
          // Set previous to null if previous prop does not exist on data from API
          if (data.previous === undefined) {
            this.searchNav.previous = null;
            // Otherwise, set the data prop
          } else {
            this.searchNav.previous = data.previous.page;
          }


        } catch (err) {
          console.error(err);
          console.trace(err);
        }
      },
      updateHomeResults(homeResults) {
        this.homes = homeResults;

        // Reset prev and next btns
        this.searchNav.previous = null;
        this.searchNav.next = null;
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

.search-nav {
  margin: 2.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-nav__btn {
  margin: 0 .5rem;
  padding: .5rem;
  font-size: 1.05rem;
  color: #2b6cb0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

</style>