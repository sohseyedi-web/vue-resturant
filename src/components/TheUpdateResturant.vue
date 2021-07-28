<template>
  <div class="container mt-5 w-50">
    <h2 class="text-center">ویرایش رستوران</h2>
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
        value="ویرایش اطلاعات"
        class="btn btn-warning"
        @click="updateResturant"
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
    async updateResturant(e) {
      e.preventDefault();
      const reslut = await axios.put(
        "http://localhost:3000/resturant/" + this.$route.params.id,
        {
          name: this.resturant.name,
          address: this.resturant.address,
          contact: this.resturant.contact,
        }
      );

      if (reslut.status === 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let account = localStorage.getItem("userInfo");
    if (!account) {
      this.$router.push({ name: "Signup" });
    }

    let reslutUpdate = await axios.get(
      "http://localhost:3000/resturant/" + this.$route.params.id
    );
    this.resturant = reslutUpdate.data;
  },
};
</script>
<style>
</style>