<template>
  <form @submit.prevent="submitForm" class="form-house">
    <h1 class="form-house__title">Update a House (Change any necessary values)</h1>
    <div class="form-house__group--update">
      <label for="streetQuery" class="form-house__label--update">Current Street Address:</label>
      <input v-model="house.streetQuery" type="text" class="form-house__input--update" name="streetQuery">
    </div>
    <div class="form-house__group">
      <label for="price" class="form-house__label">New Price</label>
      <input v-model="house.price" type="text" class="form-house__input" name="price">
    </div>
    <div class="form-house__group">
      <label for="street" class="form-house__label">New Street</label>
      <input v-model="house.street" type="text" class="form-house__input" name="street">
    </div>
    <div class="form-house__group">
      <label for="city" class="form-house__label">New City</label>
      <input v-model="house.city" type="text" class="form-house__input" name="city">
    </div>
    <div class="form-house__group">
      <label for="state" class="form-house__label">New State</label>
      <input v-model="house.state" type="text" class="form-house__input" name="state">
    </div>
    <div class="form-house__group">
      <label for="zip" class="form-house__label">New Zip</label>
      <input v-model="house.zip" type="text" class="form-house__input" name="zip">
    </div>
    <div class="form-house__group">
      <label for="lat" class="form-house__label">New Latitude</label>
      <input v-model="house.lat" type="text" class="form-house__input" name="lat">
    </div>
    <div class="form-house__group">
      <label for="lon" class="form-house__label">New Longitude</label>
      <input v-model="house.lon" type="text" class="form-house__input" name="lon">
    </div>
    <div class="form-house__group">
      <label for="bedrooms" class="form-house__label">New Bedrooms</label>
      <input v-model="house.bedrooms" type="text" class="form-house__input" name="bedrooms">
    </div>
    <div class="form-house__group">
      <label for="bathrooms" class="form-house__label">New Bathrooms</label>
      <input v-model="house.bathrooms" type="text" class="form-house__input" name="bathrooms">
    </div>
    <div class="form-house__group">
      <label for="squareFeet" class="form-house__label">New Square Feet</label>
      <input v-model="house.squareFeet" type="text" class="form-house__input" name="squareFeet">
    </div>
    <div class="form-house__group">
      <label for="description" class="form-house__label">New Description</label>
      <textarea v-model="house.description" name="description" class="form-house__textarea" cols="30" rows="10"></textarea>
    </div>
    <div class="form-house__group">
      <label for="agent" class="form-house__label">New Agent</label>
      <input v-model="house.agent" type="text" class="form-house__input" name="agent">
    </div>
    <div class="form-house__group">
      <label for="agent_phone" class="form-house__label">New Agent Phone</label>
      <input v-model="house.agent_phone" type="text" class="form-house__input" name="agent_phone">
    </div>
    <div class="form-house__group">
      <label for="agent_img" class="form-house__label">New Agent Image (URL)</label>
      <input v-model="house.agent_img" type="text" class="form-house__input" name="agent_img">
    </div>
    <div class="form-house__group">
      <label for="house_img_main" class="form-house__label">New Main House Image (URL)</label>
      <input v-model="house.house_img_main" type="text" class="form-house__input" name="house_img_main">
    </div>
    <div class="form-house__group">
      <label for="house_img_inside_1" class="form-house__label">New House (Indoors) Image 1 (URL)</label>
      <input v-model="house.house_img_inside_1" type="text" class="form-house__input" name="house_img_inside_1">
    </div>
    <div class="form-house__group">
      <label for="house_img_inside_2" class="form-house__label">New House (Indoors) Image 2 (URL)</label>
      <input v-model="house.house_img_inside_2" type="text" class="form-house__input" name="house_img_inside_2">
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
    name: "UpdateHouseForm",
    data() {
      return {
        errorMessage: null,
        correctMessage: null,
        house: {
          streetQuery: null,
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
        const API_UPDATE_HOUSE_URL = "http://localhost:5000/homes/update";

        let formData = new FormData();

        formData.append("streetQuery", this.house.streetQuery);
        formData.append("price", this.house.price);
        formData.append("street", this.house.street);
        formData.append("city", this.house.city);
        formData.append("state", this.house.state);
        formData.append("zip", this.house.zip);
        formData.append("lat", this.house.lat);
        formData.append("lon", this.house.lon);
        formData.append("bedrooms", this.house.bedrooms);
        formData.append("bathrooms", this.house.bathrooms);
        formData.append("squareFeet", this.house.squareFeet);
        formData.append("description", this.house.description);
        formData.append("agent", this.house.agent);
        formData.append("agent_img", this.house.agent_img);
        formData.append("agent_phone", this.house.agent_phone);
        formData.append("house_img_main", this.house.house_img_main);
        formData.append("house_img_inside_1", this.house.house_img_inside_1);
        formData.append("house_img_inside_2", this.house.house_img_inside_2);

        const options = {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${localStorage.authToken}`,
          },
          body: formData
        };

        try {
          const response = await fetch(API_UPDATE_HOUSE_URL, options);
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

.form-house__group--update {
  margin: 3rem 0;
}

.form-house__label--update {
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: .75rem;
  color: var(--blue);
}

.form-house__input--update {
  width: 13rem;
  background-color: #E2E8F0;
  font-size: 1rem;
  padding: .5rem;
  border: none;
  border-radius: 4px;
}

</style>