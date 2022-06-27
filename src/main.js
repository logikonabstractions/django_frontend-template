import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// our own global  base styles
import "@/assets/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
