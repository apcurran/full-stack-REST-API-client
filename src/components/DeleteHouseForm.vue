<template>
  <form @submit.prevent="submitForm" class="form-house form-house--delete">
    <h1 class="form-house__title">Delete House</h1>
    <div class="form-house__group">
      <label for="streetQuery" class="form-house__label">Street Address</label>
      <input v-model="house.streetQuery" type="text" class="form-house__input" name="streetQuery" required>
    </div>
    <p class="form__error">{{ errorMessage }}</p>
    <p class="form__correct">{{ correctMessage }}</p>
    <div class="form-house__submit-group">
      <input type="submit" value="Submit" class="form-house__submit">
    </div>
  </form>
</template>

<script>
export default {
    name: "DeleteHouseForm",
    data() {
      return {
        errorMessage: null,
        correctMessage: null,
        house: {
          streetQuery: null
        }
      }
    },
    methods: {
      checkForErrors(resData) {
        if (resData.error) {
          this.errorMessage = resData.error;
        } else if (resData.errors) {
          this.errorMessage = `${resData.errors[0].msg} ${resData.errors[0].param}`;
        } else {
          // Good request
          this.correctMessage = resData.message;
        }
      },
      clearFormInputs() {
        this.house.streetQuery = null
      },
      async submitForm() {
        const API_DELETE_HOUSE_URL = "https://alexcurran-billow.herokuapp.com/homes/delete";
        const options = {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.authToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            streetQuery: this.house.streetQuery
          })
        };

        try {
          const response = await fetch(API_DELETE_HOUSE_URL, options);
          const data = await response.json();

          this.checkForErrors(data);
          this.clearFormInputs();

        } catch (err) {
          console.error(err);
        }
      }
    }
}
</script>

<style>

.form-house--delete {
  overflow-y: auto;
}

.form-house__submit {
  justify-self: flex-start;
}

</style>