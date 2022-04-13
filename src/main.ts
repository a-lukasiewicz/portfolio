import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/index.css";
import "animate.css";

createApp(App).use(router).mount("#app");
