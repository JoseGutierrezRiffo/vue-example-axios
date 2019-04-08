<template>
  <div class="mt-5">
    <form @submit.prevent="onSubmit" class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal text-center">Ingresar</h1>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        v-validate="{ required: true, email: true }"
        name="email"
        class="form-control"
        placeholder="Email address"
        v-model="email"
        autofocus
      >
      <span>{{ errors.first('email') }}</span>

      <label for="inputPassword" class="sr-only">Password</label>
      <input
        v-validate="{ required: true, min: 6 }"
        type="password"
        name="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      >
      <span>{{ errors.first('password') }}</span>

      <button class="btn btn-lg btn-primary btn-block">Sign in</button>
    </form>
  </div>
</template>

<script>
import router from "vue-router";
import loginUserService from "../services/authentication/loginService";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      provider: ''
    };
  },

  methods: {
    onSubmit() {
      // this.$validator.validate().then(valid => {
      //   if (!valid) {
      //     // do stuff if not valid.
      //   } else {
      //     localStorage.setItem("tk", "qwerty");
      //     this.$router.push({name: "welcome"});
      //   }
      // });
      if (this.isValid()) {
        loginUserService(this.email, this.password, this.provider)
          .then((res) => {
            localStorage.setItem('token', res.data.token);
            this.$router.push({name: 'welcome'});
          }, (error) => {
            alert(error);
          });
      } else {
        alert('Debes llenar los campos correctamente.');
      }
    },

    isValid() {
      let isValid = true;
      if (this.email === '' || this.password === '') {
        isValid = false;
      }
      return isValid;
    }
  }
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 430px;
  padding: 15px;
  margin: auto;
  border: 3px solid #f1f1f1
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 25px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>