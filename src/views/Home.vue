<template>
  <div class="container home my-5">
    <h3 class="page-header">کاربر {{ name }} خوش آمدید</h3>
    <button @click="logoutWeb" class="btn btn-secondary">خروج</button>
  </div>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th> شماره </th>
          <th>نام رستوران</th>
          <th>آدرس</th>
          <th>تلفن</th>
          <th>تغییرات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resturant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.contact }}</td>
          <td>
            <router-link class="btn btn-success" :to="'/update/' + item.id"
              ><span class="material-icons">edit</span></router-link
            >
            <router-link class="btn btn-danger mr-2" :to="'/update/' + item.id"
              ><span class="material-icons">delete</span></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      resturant: [],
    };
  },
  methods: {
    logoutWeb() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
  async mounted() {
    let account = localStorage.getItem("userInfo");
    this.name = JSON.parse(account).username;
    if (!account) {
      this.$router.push({ name: "Signup" });
    }

    let resultDataRest = await axios.get("http://localhost:3000/resturant");
    this.resturant = resultDataRest.data;
  },
};
</script>
<style>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  border: 2px solid #fff;
  border-radius: 1rem;
  height: 80px;
}
</style>
