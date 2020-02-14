<template>
  <main class="main main-form">
    <h1>Signup</h1>
    <form @submit.prevent="signup" class="form-signup">
      <p v-if="errorMessage" class="form__error">{{ errorMessage }}</p>
      <div class="form-group">
        <label for="name" class="form-group__label">Name</label>
        <input v-model="user.name" type="text" class="form-group__input" name="name" required>
      </div>
      <div class="form-group">
        <label for="email" class="form-group__label">Email</label>
        <input v-model="user.email" type="email" class="form-group__input" name="email" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-group__label">Password</label>
        <input v-model="user.password" type="password" class="form-group__input" name="password" required>
      </div>
      <input type="submit" class="form__submit" value="Signup">
    </form>
  </main>
</template>

<script>
export default {
    name: "Signup",
    data() {
      return {
        errorMessage: null,
        user: {
          name: "",
          email: "",
          password: ""
        }
      }
    },
    methods: {
      async signup() {
        
        const API_SIGNUP_URL = "http://localhost:5000/user/signup";
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.user.name,
            email: this.user.email,
            password: this.user.password
          })
        };

        try {
          const response = await fetch(API_SIGNUP_URL, options);
          const data = await response.json();
          
          this.checkForErrors(data);

          if (this.errorMessage) return;

          this.$router.push("/login");

        } catch (err) {
          console.error(err);
        }
      },
      checkForErrors(resData) {
        this.errorMessage = resData.error;
      }
    }
}
</script>

<style>

</style>