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
              <h2 class="desc__price"></h2>
              <h3 class="desc__street"></h3>
              <div class="desc__ammenities-group">
                  <img src="" alt="" class="desc__ammenities__img">
                  <p class="desc__ammenities__para"></p>
              </div>
          </div>
          <div class="agent">
              <img src="" alt="" class="agent__avatar">
              <div class="agent__info-group">
                  <h3 class="agent__info__title"></h3>
                  <p class="agent__info__para"></p>
              </div>
          </div>
          <div class="gmap"></div>
      </section>
  </main>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            homeInfo: {}
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

.main-home {
    margin: 1rem 3.125rem;
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
.gmap {
    background-color: #999;
}


</style>