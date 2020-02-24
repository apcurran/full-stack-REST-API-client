<template>
  <main class="main main-home">
      <section class="home-gallery">
          <img :src="homeInfo.house_img_main" alt="Home" class="home-gallery__img1">
          <img :src="homeInfo.house_img_inside_1" alt="Home inside" class="home-gallery__img2">
          <img :src="homeInfo.house_img_inside_2" alt="Home inside" class="home-gallery__img3">
      </section>
      <section class="home-info">
          <div class="desc">
              <h1 class="desc__type">Single Family Home</h1>
              <h2 class="desc__price">{{ formatPrice(homeInfo.price) }}</h2>
              <h3 class="desc__street">{{ homeInfo.street }}, {{ homeInfo.city }}, {{ homeInfo.state }} {{ homeInfo.zip }}</h3>
              <h3 class="desc__sqft">{{ homeInfo.squareFeet }} sqft.</h3>
              <p class="desc__para">{{ homeInfo.description }}</p>
              <div class="desc__ammenities-group">
                <div class="desc__ammenities-subgroup">
                    <img src="../assets/icons/bedroom.svg" alt="Bedroom icon" class="desc__ammenities__img">
                    <p class="desc__ammenities__para">{{ homeInfo.bedrooms }} bedrooms</p>
                </div>
                <div class="desc__ammenities-subgroup">
                    <img src="../assets/icons/bathroom.svg" alt="Bathroom icon" class="desc__ammenities__img">
                    <p class="desc__ammenities__para">{{ homeInfo.bathrooms }} bathroom(s)</p>
                </div>
              </div>
          </div>
          <div class="agent">
              <div class="agent__avatar__wrapper">
                <img :src="homeInfo.agent_img" alt="Agent avatar" class="agent__avatar">
              </div>
              <div class="agent__info-group">
                  <h3 class="agent__info__title">{{ homeInfo.agent }}</h3>
                  <p class="agent__info__para">{{ homeInfo.agent_phone }}</p>
              </div>
          </div>
          <div v-if="userLoggedIn" class="favorite">
              <button @click="addToFavorites" class="favorite__btn">+ Add to Favorites</button>
              <p v-if="favoritedAlert" class="favorite__alert">{{ favoritedAlert }}</p>
          </div>
          <Gmap v-if="dataLoaded" :homeInfo="homeInfo"/>  
      </section>
  </main>
</template>

<script>
import Gmap from "../components/Gmap";

export default {
    name: "Home",
    components: {
        Gmap,
    },
    data() {
        return {
            homeInfo: {},
            dataLoaded: false,
            userLoggedIn: false,
            favoritedAlert: null
        }
    },
    async created() {
        try {
            const API_HOME_URL = `http://localhost:5000/homes/${this.$route.params.homeId}`;
            const options = {
                headers: { "Content-Type": "application/json" }
            };
            const response = await fetch(API_HOME_URL, options);
            const data = await response.json();

            console.log(data);
            this.homeInfo = data;
            this.dataLoaded = true;

            // If a normal user is logged in, show Add To Fav btn
            this.showAddToFavoritesBtn();

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
      showAddToFavoritesBtn() {
          if (!localStorage.admin && localStorage.authToken) {
              this.userLoggedIn = true;
          }
      },
      alertHomeAdded(data) {
          this.favoritedAlert = data.message;
      },
      async addToFavorites() {
          const API_FAVORITES_URL = "http://localhost:5000/user/favorites";
          const options = {
              method: "POST",
              headers: {
                  authorization: `Bearer ${localStorage.authToken}`,
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  home_id: this.homeInfo._id,
                  home_price: this.homeInfo.price,
                  home_street: this.homeInfo.street,
                  home_state: this.homeInfo.state,
                  home_bedrooms: this.homeInfo.bedrooms,
                  home_bathrooms: this.homeInfo.bathrooms,
                  home_squareFeet: this.homeInfo.squareFeet,
                  home_img_main: this.homeInfo.house_img_main
              })
          };

          const response = await fetch(API_FAVORITES_URL, options);
          const data = await response.json();

          console.log(data);

          this.alertHomeAdded(data);
      }
    }
}
</script>

<style>

.main-home {
    margin: 1rem 3.125rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3rem;
}

.home-gallery {
    width: 40rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .25rem;
}

.home-gallery__img1 {
    grid-column: 1 / -1;
    width: 100%;
}

.home-gallery__img2,
.home-gallery__img3 {
    width: 100%;
}

/* Right side */
.home-info {
    width: 45rem;
    display: grid;
    gap: 1rem;
}

.desc__ammenities-group {
    display: flex;
}

.desc__ammenities-subgroup:first-of-type {
    margin-right: 2rem;
}

.desc__ammenities-subgroup {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.desc__ammenities__img {
    width: 3rem;
}

.desc__ammenities__para {
    margin-top: .5rem;
}

.desc__price {
    margin-bottom: 1rem;
}

.desc__para {
    margin: 1rem 0;
    line-height: 1.6;
    font-size: 1.05rem;
}

.agent {
    display: flex;
    align-items: center;
}

.agent__avatar {
    border-radius: 50%;
    box-shadow: 0 3px 15px rgba(0, 0, 0, .225);
}

.agent__info-group {
    margin-left: 1.75rem;
}

.favorite__btn {
    padding: .5rem 1.5rem;
    border: 1px solid #a0aec0;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    font-size: 1rem;
    color: #2d3748;
    
    transition: background-color 125ms ease-in-out;
}

.favorite__btn:hover {
    background-color: #e2e8f0;
}

.favorite__alert {
    margin-top: 1rem;
    color: var(--blue);
}

.gmap {
    grid-row: span 5;
    background-color: #999;
    height: 100%;
}


</style>