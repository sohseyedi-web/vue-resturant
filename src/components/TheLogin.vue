<template>
  <div class="container mt-5 w-50">
    <h2 class="text-center">ورود کاربران</h2>
    <hr />
    <form>
      <div class="form-group">
        <input
          type="email"
          placeholder="ایمیل"
          class="form-control"
          v-model="Users.email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="رمز عبور"
          class="form-control"
          v-model="Users.password"
        />
      </div>
      <input
        type="submit"
        @click="logintoWeb"
        value="ورود به سایت"
        class="btn btn-info mt-5"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Users: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async logintoWeb(e) {
      e.preventDefault();
      let resultLogin = await axios.get(
        `http://localhost:3000/users?email=${this.Users.email}&password=${this.Users.password}`
      );
      if (resultLogin.status == 200 && resultLogin.data.length > 0) {
        localStorage.setItem("userInfo", JSON.stringify(resultLogin.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
</style>
