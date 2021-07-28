import { createApp } from "vue";
import App from "./App.vue";
import '../node_modules/bootstrap-v4-rtl/dist/css/bootstrap.min.css'
import router from "./router";

createApp(App).use(router).mount("#app");
