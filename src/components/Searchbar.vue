<template>
  <form @submit.prevent="searchHomes" class="searchbar-form">
      <h1>Searchbar</h1>
      <p v-if="home.error" class="searchbar-form__error">{{ home.error }}</p>
      <div class="searchbar-form__field">
          <input v-model="home.search" type="text" class="searchbar-form__input" name="search" placeholder="Search by street, city, state, or zip code" required>
          <button type="submit" class="searchbar-form__submit">
              <img src="../assets/icons/icon-search.svg" alt="Magnifying glass search icon" class="searchbar-form__submit__img">
          </button>
      </div>
  </form>
</template>

<script>
export default {
    name: "Searchbar",
    data() {
        return {
            home: {
                search: null,
                error: null
            }
        }
    },
    methods: {
        checkForErrors(resData) {
            this.home.error = resData.error;
        },
        async searchHomes() {
            const API_SEARCH_URL = "http://localhost:5000/homes/search";
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    searchTerm: this.home.search
                })
            };

            try {

                const response = await fetch(API_SEARCH_URL, options);
                const data = await response.json();

                this.checkForErrors(data);

                if (this.home.error) return;

                this.$emit("searchResults", data);

            } catch (err) {
                console.error(err);
                this.home.error = err.error;
            }
        }
    }
}
</script>

<style>

.searchbar-form {
    margin: 2rem 0 5rem 0;
    text-align: center;
}

</style>