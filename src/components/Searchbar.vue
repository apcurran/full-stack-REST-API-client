<template>
  <form @submit.prevent="searchHomes" class="searchbar-form">
      <p v-if="home.error" class="searchbar-form__error">{{ home.error }}</p>
      <div class="searchbar-form__field">
          <input v-model="home.searchTerm" type="text" class="searchbar-form__input" name="search" placeholder="Search by street, city, state, or zip code" required>
          <button type="submit" class="searchbar-form__submit">
              <img src="../assets/icons/icon-search.svg" alt="Magnifying glass search icon" class="searchbar-form__submit__img" width="24" height="24">
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
                searchTerm: null,
                error: null
            }
        }
    },
    methods: {
        checkForErrors(resData) {
            this.home.error = resData.error;
        },
        async searchHomes() {
            const API_SEARCH_URL = `https://alexcurran-billow.herokuapp.com/homes/search/${this.home.searchTerm}`;

            try {

                const response = await fetch(API_SEARCH_URL);
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
    width: 40rem;
    max-width: 100%;
    margin: 2rem auto 5rem auto;
    text-align: center;
}

.searchbar-form__field {
    display: flex;
    justify-content: center;
    border-radius: 500px;

    transition: box-shadow 100ms ease-in-out;
}

/* Style the form field when either descendant is focused */
.searchbar-form__field:focus-within {
    box-shadow: 0 2px 16px rgba(0, 0, 0, .175);
}

.searchbar-form__input {
    flex: 1 1 90%;
    padding: .5rem 1.25rem;
    border: none;
    border-radius: 500px 0 0 500px;
    outline: none;
    font-size: 1rem;
    background-color: #E2E8F0;
}

.searchbar-form__submit {
    flex: 2 2 10%;
    /* Align icon within btn */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    border: none;
    border-radius: 0 500px 500px 0;
    outline: none;
    cursor: pointer;
    background-color: #E2E8F0;
}

.searchbar-form__input::placeholder {
    color: #4A5568;
}

@media screen and (max-width: 26em) {
    .searchbar-form__input {
        padding: .5rem .75rem;
        font-size: .95rem;
    }
}

</style>