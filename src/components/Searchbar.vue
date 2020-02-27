<template>
  <form @submit.prevent="searchHomes" class="searchbar-form">
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
    width: 40rem;
    max-width: 92.5%;
    margin: 2rem auto 5rem auto;
    text-align: center;
}

.searchbar-form__field {
    display: flex;
    justify-content: center;
}

.searchbar-form__input {
    flex: 1 1 90%;
    padding: .5rem 1.25rem;
    border: none;
    border-radius: 500px 0 0 500px;
    outline: none;
    font-size: 1rem;
    background-color: #E2E8F0;

    transition: background-color 125ms ease-in-out;
}

.searchbar-form__submit {
    flex: 2 2 10%;
    padding: .5rem;
    border: none;
    border-radius: 0 500px 500px 0;
    outline: none;
    cursor: pointer;
    background-color: #E2E8F0;

    transition: background-color 125ms ease-in-out;
}

.searchbar-form__input::placeholder {
    color: #4A5568;
}

.searchbar-form__input:focus {
    background-color: #EDF2F7;
}

.searchbar-form__input:focus + .searchbar-form__submit {
    background-color: #EDF2F7;
}

</style>