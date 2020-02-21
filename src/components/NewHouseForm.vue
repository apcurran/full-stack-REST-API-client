<template>
  <form @submit.prevent="submitForm" class="form-house">
    <h1 class="form-house__title">New House</h1>
    <div class="form-house__group">
      <label for="price" class="form-house__label">Price</label>
      <input v-model="house.price" type="text" class="form-house__input" name="price" required>
    </div>
    <div class="form-house__group">
      <label for="street" class="form-house__label">Street</label>
      <input v-model="house.street" type="text" class="form-house__input" name="street" required>
    </div>
    <div class="form-house__group">
      <label for="city" class="form-house__label">City</label>
      <input v-model="house.city" type="text" class="form-house__input" name="city" required>
    </div>
    <div class="form-house__group">
      <label for="state" class="form-house__label">State</label>
      <input v-model="house.state" type="text" class="form-house__input" name="state" required>
    </div>
    <div class="form-house__group">
      <label for="zip" class="form-house__label">Zip</label>
      <input v-model="house.zip" type="text" class="form-house__input" name="zip" required>
    </div>
    <div class="form-house__group">
      <label for="lat" class="form-house__label">Latitude</label>
      <input v-model="house.lat" type="text" class="form-house__input" name="lat" required>
    </div>
    <div class="form-house__group">
      <label for="lon" class="form-house__label">Longitude</label>
      <input v-model="house.lon" type="text" class="form-house__input" name="lon" required>
    </div>
    <div class="form-house__group">
      <label for="bedrooms" class="form-house__label">Bedrooms</label>
      <input v-model="house.bedrooms" type="text" class="form-house__input" name="bedrooms" required>
    </div>
    <div class="form-house__group">
      <label for="bathrooms" class="form-house__label">Bathrooms</label>
      <input v-model="house.bathrooms" type="text" class="form-house__input" name="bathrooms" required>
    </div>
    <div class="form-house__group">
      <label for="squareFeet" class="form-house__label">Square Feet</label>
      <input v-model="house.squareFeet" type="text" class="form-house__input" name="squareFeet" required>
    </div>
    <div class="form-house__group">
      <label for="description" class="form-house__label">Description</label>
      <textarea v-model="house.description" name="description" class="form-house__textarea" cols="30" rows="10" required></textarea>
    </div>
    <div class="form-house__group">
      <label for="agent" class="form-house__label">Agent</label>
      <input v-model="house.agent" type="text" class="form-house__input" name="agent" required>
    </div>
    <div class="form-house__group">
      <label for="agent_phone" class="form-house__label">Agent Phone</label>
      <input v-model="house.agent_phone" type="text" class="form-house__input" name="agent_phone" required>
    </div>
    <div class="form-house__group">
      <label for="agent_img" class="form-house__label">Agent Image (URL)</label>
      <input v-model="house.agent_img" type="text" class="form-house__input" name="agent_img" required>
    </div>
    <div class="form-house__group">
      <label for="house_img_main" class="form-house__label">Main House Image (URL)</label>
      <input v-model="house.house_img_main" type="text" class="form-house__input" name="house_img_main" required>
    </div>
    <div class="form-house__group">
      <label for="house_img_inside_1" class="form-house__label">House (Indoors) Image 1 (URL)</label>
      <input v-model="house.house_img_inside_1" type="text" class="form-house__input" name="house_img_inside_1" required>
    </div>
    <div class="form-house__group">
      <label for="house_img_inside_2" class="form-house__label">House (Indoors) Image 2 (URL)</label>
      <input v-model="house.house_img_inside_2" type="text" class="form-house__input" name="house_img_inside_2" required>
    </div>
    <p class="form__error">{{ errorMessage }}</p>
    <p class="form__correct">{{ correctMessage }}</p>
    <div class="form-house-group">
      <input type="submit" value="Submit" class="form-house__submit">
    </div>
  </form>
</template>

<script>
export default {
    name: "NewHouseForm",
    data() {
      return {
        errorMessage: null,
        correctMessage: null,
        house: {
          price: null,
          street: null,
          city: null,
          state: null,
          zip: null,
          lat: null,
          lon: null,
          bedrooms: null,
          bathrooms: null,
          squareFeet: null,
          description: null,
          agent: null,
          agent_img: null,
          agent_phone: null,
          house_img_main: null,
          house_img_inside_1: null,
          house_img_inside_2: null,
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
      async submitForm() {
        const API_NEW_HOUSE_URL = "http://localhost:5000/homes/new";
        const options = {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.authToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            price: this.house.price,
            street: this.house.street,
            city: this.house.city,
            state: this.house.state,
            zip: this.house.zip,
            lat: this.house.lat,
            lon: this.house.lon,
            bedrooms: this.house.bedrooms,
            bathrooms: this.house.bathrooms,
            squareFeet: this.house.squareFeet,
            description: this.house.description,
            agent: this.house.agent,
            agent_img: this.house.agent_img,
            agent_phone: this.house.agent_phone,
            house_img_main: this.house.house_img_main,
            house_img_inside_1: this.house.house_img_inside_1,
            house_img_inside_2: this.house.house_img_inside_2
          })
        };

        try {
          const response = await fetch(API_NEW_HOUSE_URL, options);
          const data = await response.json();

          this.checkForErrors(data);

        } catch (err) {
          console.error(err);
        }
      }
    }
}
</script>

<style>

.form-house {
  margin: 2.65rem 5rem;
  height: 600px;
  overflow-y: scroll;
}

.form-house__title {
  margin-bottom: 1.5rem;
}

.form-house__group {
  margin-bottom: 1.5rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
}

.form-house__label {
  margin-bottom: .25rem;
  font-size: 1.05rem;
}

.form-house__input {
  padding: .5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #bbb;
  outline: none;
}

.form-house__input:focus {
  border-bottom: 2px solid var(--blue);
}

.form-house__textarea {
  padding: .5rem;
  font-size: 1rem;
}

.form__correct {
  margin: 1rem 0;
  color: var(--blue);
}

.form-house__submit {
  padding: .8rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: .06em;
  background-color: #2a4365;
  color: #fff;
}

</style>