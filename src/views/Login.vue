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
        const API_LOGIN_URL = "https://alexcurran-billow.herokuapp.com/user/login";
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

          localStorage.setItem("authToken", data.token);

          if (data.moddedUser.admin === true) {
            localStorage.setItem("admin", data.moddedUser.admin);
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

/* General login & signup form layout/styling */
.main-form {
  display: flex;
  justify-content: center;
  align-items: center;

  /* Fallback bg */
  background-color: #64a2df;
  background-image: linear-gradient(to right, #64A2DF, #AACEF6);
}

.form-section {
  margin: 0 2rem;
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
  font-size: 1.2rem;
  font-family: 'Karla', sans-serif;
  margin-bottom: .4rem;
}

.form-group__input {
  padding: .5rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #bbb;
  outline: none;
}

.form-group__input:focus {
  border-bottom: 2px solid var(--blue);
}

.form-group__submit {
  align-self: flex-start;
  padding: .9rem 2.75rem;
  font-size: 1rem;
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

@media screen and (max-width: 76em) {
  .form-section {
    margin: 4rem;
    grid-template-columns: 1fr;
    grid-auto-rows: .75fr 1fr;
  }

  .form-section__right {
    width: 40rem;
    padding: 4rem;
  }

  .form-group {
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: 41em) {
  .form-section {
    margin: 4rem 1rem;
    flex: 1 1 auto;
  }

  .form-section__left__title {
    font-size: 1.35rem;
  }

  .form-section__right {
    width: 100%;
    padding: 3rem 1.65rem;
  }

  .form-group__label {
    font-size: 1rem;
  }

  .form-group__submit {
    padding: .75rem 2.5rem;
  }
}


</style>