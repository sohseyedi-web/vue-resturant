<template>
  <div class="container mt-5 w-50">
    <h2 class="text-center">فرم ثبت نام</h2>
    <hr />
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      برای نمایش بهتر نام کاربری رو فارسی وارد کن
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <form dir="rtl">
      <div class="form-group my-4">
        <input
          type="text"
          placeholder="نام کاربری"
          class="form-control"
          v-model="Users.username"
        />
      </div>
      <div class="form-group my-4">
        <input
          type="email"
          placeholder="ایمیل"
          class="form-control"
          v-model="Users.email"
        />
      </div>
      <div class="form-group my-4">
        <input
          type="password"
          placeholder="رمز عبور"
          class="form-control"
          v-model="Users.password"
        />
      </div>
      <input
        type="submit"
        @click="signuptoWeb"
        value="ثبت نام"
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
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async signuptoWeb(e) {
      e.preventDefault();
      let resultSign = await axios.post("http://localhost:3000/users", {
        username: this.Users.username,
        email: this.Users.email,
        password: this.Users.password,
      });
      if (resultSign.status === 201) {
        localStorage.setItem("userInfo", JSON.stringify(resultSign.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let account = localStorage.getItem("userInfo");
    if (account) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
</style>
