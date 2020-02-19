<template>
  <main class="main main-form">
    <section class="form-section">
      <div class="form-section__left signup-left">
        <h1 class="form-section__left__title">Signup for an Account</h1>
      </div>
      <form @submit.prevent="signup" id="signup-right" class="form-section__right">
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
        <p>{{ user.admin }}</p>
        <div class="form-group">
          <label for="secret" class="form-group__label">Admin Password</label>
          <input v-model="user.secret" type="password" class="form-group__input" name="secret">
        </div>
        <input type="submit" class="form-group__submit" value="Login">
      </form>
    </section>
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
          password: "",
          secret: ""
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
            password: this.user.password,
            secret: this.user.secret
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

#signup-right {
  padding: 3rem 6rem;
}

</style>