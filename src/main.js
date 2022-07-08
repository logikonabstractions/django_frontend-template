import { createApp } from "vue";
// import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import store from "@/store";
import axios from "axios";

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// fontawesome stuff
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
library.add(faVuejs);

// our own global  base styles
import "@/assets/base.css";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8080";

const app = createApp(App);

// app.use(createPinia());
app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
