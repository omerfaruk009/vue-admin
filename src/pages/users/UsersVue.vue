<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
    <router-link to="/users/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
  </div>

  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th>#</th>
        <th>id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(user,index) in users" :key="user.id">
        <td>{{  index+ 1 }}</td>
        <td>{{ user.id }}</td>
        <td>{{ user.firstName }} {{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role.name }}</td>
        <td>
          <div class="btn-group mr-2">
            <router-link :to="`/users/${user.id}/edit`" class="btn btn-sm btn-outline-secondary">Edit</router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" @click="del(user.id)">Delete</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="prev">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
      </li>
    </ul>
  </nav>

</template>

<script lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import {User} from "@/models/user";

export default {
  name: "UsersVue",




  setup() {
    const users = ref([]);
    const page = ref(1);
    const lastPage = ref(0);


    const load = async () => {
      const {data} = await axios.get(`users?page=${page.value}`,{
        params: {
          _sort: 'id',
          _order: 'asc'
        }
      });
      users.value = data.data;
      lastPage.value = data.meta.last_page.data;

    };
    onMounted(load);


    const next = async () => {
      // if (page.value < lastPage.value) {}
      page.value++;
      await load();
    }
    const prev = async () => {
      // if (page.value > 1) { }
      page.value--;
      await load();
    }

    const del = async (id: number) => {
      if (confirm('Are you sure?')) {
        await axios.delete(`users/${id}`);

        users.value = users.value.filter((u: User) => u.id !== id);
      }
    }

    return {
      users,
      next,
      prev,
      del
    }
  }
}

</script>