<template>
  <form class="form-house">
    <h1 class="form-house__title">New House</h1>
    <div class="form-house__group">
      <label for="price" class="form-house__label">Price</label>
      <input v-model="house.price" type="text" class="form-house__input" name="price">
    </div>
    <div class="form-house__group">
      <label for="street" class="form-house__label">Street</label>
      <input v-model="house.street" type="text" class="form-house__input" name="street">
    </div>
    <div class="form-house__group">
      <label for="city" class="form-house__label">City</label>
      <input v-model="house.city" type="text" class="form-house__input" name="city">
    </div>
    <div class="form-house__group">
      <label for="state" class="form-house__label">State</label>
      <input v-model="house.state" type="text" class="form-house__input" name="state">
    </div>
    <div class="form-house__group">
      <label for="zip" class="form-house__label">Zip</label>
      <input v-model="house.zip" type="text" class="form-house__input" name="zip">
    </div>
    <div class="form-house__group">
      <label for="lat" class="form-house__label">Latitude</label>
      <input v-model="house.lat" type="text" class="form-house__input" name="lat">
    </div>
    <div class="form-house__group">
      <label for="lon" class="form-house__label">Longitude</label>
      <input v-model="house.lon" type="text" class="form-house__input" name="lon">
    </div>
    <div class="form-house__group">
      <label for="bedrooms" class="form-house__label">Bedrooms</label>
      <input v-model="house.bedrooms" type="text" class="form-house__input" name="bedrooms">
    </div>
    <div class="form-house__group">
      <label for="bathrooms" class="form-house__label">Bathrooms</label>
      <input v-model="house.bathrooms" type="text" class="form-house__input" name="bathrooms">
    </div>
    <div class="form-house__group">
      <label for="squareFeet" class="form-house__label">Square Feet</label>
      <input v-model="house.squareFeet" type="text" class="form-house__input" name="squareFeet">
    </div>
    <div class="form-house__group">
      <label for="description" class="form-house__label">Description</label>
      <textarea name="description" class="form-house__textarea" cols="30" rows="10"></textarea>
    </div>
    <div class="form-house__group">
      <label for="agent" class="form-house__label">Agent</label>
      <input v-model="house.agent" type="text" class="form-house__input" name="agent">
    </div>
    <div class="form-house__group">
      <label for="agent_phone" class="form-house__label">Agent Phone</label>
      <input v-model="house.agent_phone" type="text" class="form-house__input" name="agent_phone">
    </div>
  </form>
</template>

<script>
export default {
    name: "NewHouseForm",
    data() {
      return {
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
          agent_phone: null,
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
  border-bottom: 2px solid #2B6CB0;
}

</style>