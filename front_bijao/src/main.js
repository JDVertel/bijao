import { createApp } from "vue";

import store from "./store/index.js";

import App from "./App.vue";
import router from "./router";
//integramos boostrap 5
import "@/assets/bootstrap.min.css";
import "@/assets/bootstrap.bundle.min.js";

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
