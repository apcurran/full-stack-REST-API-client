<template>
  <main class="main main-form">
    <section class="form-section">
      <div class="form-section__left">
        <h1 class="form-section__left__title">Login</h1>
      </div>
      <form @submit.prevent="signup" class="form-section__right">
        <p v-if="errorMessage" class="form__error">{{ errorMessage }}</p>
        <div class="form-group">
          <label for="email" class="form-group__label">Email</label>
          <input v-model="user.email" type="email" class="form-group__input" name="email" required>
        </div>
        <div class="form-group">
          <label for="password" class="form-group__label">Password</label>
          <input v-model="user.password" type="password" class="form-group__input" name="password" required>
        </div>
        <input type="submit" class="form-group__submit" value="Login">
      </form>
    </section>
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

.main-form {
  display: flex;
  justify-content: center;
  align-items: center;

  /* Fallback bg */
  background-color: #64a2df;
  background-image: linear-gradient(to right, #64A2DF, #AACEF6);
}

.form-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 60vh;

  box-shadow: 0 4px 20px rgba(0, 0, 0, .225);
}

.form-section__left {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: linear-gradient(to bottom, #A6FFCB, #1FA2FF);
}

.form-section__left__title {
  font-family: 'Karla', sans-serif;
  font-weight: 700;
}

.form-section__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 9rem;
  background-color: #fff;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group__label {
  font-size: 1.75rem;
  font-family: 'Karla', sans-serif;
}

.form-group__submit {
  align-self: flex-start;
}


</style>