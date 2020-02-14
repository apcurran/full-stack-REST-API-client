<template>
  <main class="main">
    <h1>Login</h1>
    <form @submit.prevent="signup" class="form-login">
      <p v-if="errorMessage" class="form__error">{{ errorMessage }}</p>
      <div class="form-group">
        <label for="email" class="form-group__label">Email</label>
        <input v-model="user.email" type="email" class="form-group__input" name="email" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-group__label">Password</label>
        <input v-model="user.password" type="password" class="form-group__input" name="password" required>
      </div>
      <input type="submit" class="form__submit" value="Login">
    </form>
  </main>
</template>

<script>
export default {
    name: "Login",
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
        
        const API_LOGIN_URL = "http://localhost:5000/user/login";
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.user.email,
            password: this.user.password
          })
        };

        try {
          const response = await fetch(API_LOGIN_URL, options);
          const data = await response.json();
          
          this.checkForErrors(data);

          if (this.errorMessage) return;

          console.log("You are now logged in.");

          localStorage.setItem("authToken", data.token);

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