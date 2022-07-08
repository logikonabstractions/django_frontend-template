import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

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

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
