<template>
  <h3>Account Information</h3>
  <form @submit.prevent="infoSubmit">
    <div class="mb-3">
      <label>First Name</label>
      <input v-model="infoData.firstName" class="form-control" name="first_name">
    </div>
    <div class="mb-3">
      <label>Last Name</label>
      <input v-model="infoData.lastName" class="form-control" name="last_name">
    </div>
    <div class="mb-3">
      <label>Email</label>
      <input v-model="infoData.email" class="form-control" name="email">
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>

  <h3 class="mt-4">Change Password</h3>
  <form @submit.prevent="passwordSubmit">
    <div class="mb-3">
      <label>Password</label>
      <input v-model="passwordData.password" type="password" class="form-control" name="password">
    </div>
    <div class="mb-3">
      <label>Password Confirm</label>
      <input v-model="passwordData.password_confirm" type="password" class="form-control" name="password_confirm">
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>

<script lang="ts">
import {reactive, computed, watch} from 'vue';
import axios from 'axios';
import {useStore} from "vuex";

export default {
  name: "ProfileVue",
  setup() {
    const infoData = reactive({
      firstName: '',
      lastName: '',
      email: ''
    });
    const passwordData = reactive({
      password: '',
      password_confirm: ''
    })

    const store = useStore();

    const user = computed(() => store.state.User.user);

    watch(user, () => {
      infoData.firstName = user.value.firstName;
      infoData.lastName = user.value.lastName;
      infoData.email = user.value.email;
    });

    const infoSubmit = async () => {
      const {data} = await axios.put('users/info', infoData);

      await store.dispatch('User/setUser', data);
    }

    const passwordSubmit = async () => {
      await axios.put('users/password', passwordData);
    }

    return {
      infoData,
      passwordData,
      infoSubmit,
      passwordSubmit
    }
  }
}
</script>
