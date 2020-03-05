<template>
  <section class="user-dash">
    <h3 class="user-dash__title">Your Favorite Homes</h3>
    <div class="homes-group">
        <div v-for="home in homes" :key="home.home_id" class="home-group__card__info__link-wrapper">
            <router-link :to="'/homes/' + home.home_id" class="home-group__card__info__link">
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
            <button @click="deleteHome($event, home.home_id)" class="home-delete-btn">Delete Home</button>
        </div>
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

            const API_FAVORITES_URL = `https://alexcurran-billow.herokuapp.com/user/favorites`;
            const options = {
                headers: {
                    authorization: `Bearer ${localStorage.authToken}`,
                    "Content-Type": "application/json"
                }
            };
            const response = await fetch(API_FAVORITES_URL, options);
            const data = await response.json();

            this.homes = data;

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
        async deleteHome(event, homeId) {
            // DELETE from db
            const API_FAVORITES_DELETE_URL = `https://alexcurran-billow.herokuapp.com/user/favorites/${homeId}`;
            const options = {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.authToken}`,
                    "Content-Type": "application/json"
                }
            };
            const response = await fetch(API_FAVORITES_DELETE_URL, options);
            const data = await response.json();

            // Delete from DOM
            const currentEl = event.target;
            const currentCard = currentEl.closest(".home-group__card__info__link-wrapper");

            currentCard.remove();
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
    padding-bottom: .8rem;
    border-bottom: 1px solid #e2e8f0;
}

.home-delete-btn {
    margin: 1.5rem 0;
    padding: .5rem 1.5rem;
    font-size: 1rem;
    color: #2d3748;
    border: 1px solid #718096;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
}

@media screen and (max-width: 35em) {
    .dashboard__section {
        padding: 1rem;
    }

    .user-dash {
        margin: 2rem 1rem;
    }

    .dashboard__section__user__greeting {
        margin-left: .5rem;
    }
    
    .user-dash__title {
        text-align: center;
    }
}

@media screen and (max-width: 26.5em) {
    .homes-group {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

</style>