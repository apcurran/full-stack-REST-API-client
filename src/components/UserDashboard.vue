<template>
  <section class="user-dash">
    <h3 class="user-dash__title">Your Favorite Homes</h3>
    <div class="homes-group">
      <router-link :to="'/homes/' + home.home_id" class="home-group__card__info__link"  v-for="home in homes" :key="home.home_id">
        <article class="homes-group__card">
          <div class="homes-group__card__img-container">
            <img :src="home.home_img_main" alt="House" class="homes-group__card__img">
          </div>
          <div class="home-group__card__info">
            <h2 class="home-group__card__info__price">{{ formatPrice(home.home_price) }}</h2>
            <h3 class="home-group__card__info__street">{{ home.home_street }},</h3>
            <h3 class="home-group__card__info__state">{{ home.home_state }}</h3>
            <ul class="home-group__card__info__desc-group">
              <li>{{ home.home_bedrooms }} bds</li>
              <li>{{ home.home_bathrooms }} ba</li>
              <li>{{ home.home_squareFeet }} sqft</li>
            </ul>
          </div>
        </article>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
    name: "UserDashboard",
    data() {
        return {
            homes: []
        }
    },
    async created() {
        try {
            const API_FAVORITES_URL = `http://localhost:5000/user/favorites`;
            const options = {
                headers: {
                    authorization: `Bearer ${localStorage.authToken}`,
                    "Content-Type": "application/json"
                }
            };
            const response = await fetch(API_FAVORITES_URL, options);
            const data = await response.json();

            this.homes = data;
            console.log(this.homes);

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

.user-dash {
    margin: 2.65rem 5rem;
}

.user-dash__title {
    margin: 1.5rem 0;
    font-size: 1.35rem;
}

</style>