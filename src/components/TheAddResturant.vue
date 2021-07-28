<template>
  <div class="container mt-5 w-50">
    <h2 class="text-center">های جدید رستوران</h2>
    <hr />
    <form>
      <div class="form-group">
        <input
          type="text"
          v-model="resturant.name"
          placeholder="نام رستوران"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="resturant.address"
          placeholder="آدرس رستوران"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="resturant.contact"
          placeholder="تلفن رستوران"
          class="form-control"
        />
      </div>
      <input
        type="submit"
        value="ثبت اطلاعات"
        class="btn btn-warning"
        @click="addResturant"
      />
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      resturant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addResturant(e) {
      e.preventDefault();
      let formAddText = await axios.post("http://localhost:3000/resturant", {
        name: this.resturant.name,
        address: this.resturant.address,
        contact: this.resturant.contact,
      });

      if (formAddText.status === 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let account = localStorage.getItem("userInfo");
    if (!account) {
      this.$router.push({ name: "Signup" });
    }
  },
};
</script>
<style>
</style>