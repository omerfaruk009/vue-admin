<template>
  <div>

    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please register</h1>

        <input v-model="firstName" class="form-control" placeholder="Firs Name">

        <input v-model="lastName" class="form-control" placeholder="Last Name">

        <input v-model="email" type="email" class="form-control" placeholder="Email">

        <input v-model="password" type="password" class="form-control" placeholder="Password">

        <input v-model="passwordConfirm" type="password" class="form-control" placeholder="Password Confirm">


        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      </form>
    </main>
  </div>
</template>


<script>
import {ref} from "vue";
import axios from 'axios'
import {useRouter} from "vue-router";

export default {
  name: "RegisterVue",
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    const router = useRouter();

    const submit = async () => {
      await axios.post('register',{
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        password_confirm: passwordConfirm.value,
      });
       await router.push('/login');
    };

    return {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      submit,
    }
  }


}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
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
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>