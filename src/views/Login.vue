<template>
  <main class="main main-form">
    <section class="form-section">
      <div class="form-section__left">
        <h1 class="form-section__left__title">Login to Your Account</h1>
      </div>
      <form @submit.prevent="login" class="form-section__right">
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
          email: "",
          password: ""
        }
      }
    },
    methods: {
      async login() {
        
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

          console.log(data);

          if (data.admin === true) {
            localStorage.setItem("admin", data.admin);
          }

          this.$router.push("/dashboard");

        } catch (err) {
          console.error(err);
          this.errorMessage = err.error;
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
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 6rem;
  background-color: #fff;
}

.form-group {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.form-group__label {
  font-size: 1.5rem;
  font-family: 'Karla', sans-serif;
  margin-bottom: .5rem;
}

.form-group__input {
  padding: .5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #222;
}

.form-group__submit {
  align-self: flex-start;
  padding: .9rem 2.75rem;
  font-size: 1.05rem;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: .06em;
  cursor: pointer;
  background-color: #2a4365;
  color: #fff;
}

.form__error {
  margin: 1rem 0;
  color: #c53030;
}


</style>