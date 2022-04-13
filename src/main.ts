import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import VueObserveVisibility from "vue-observe-visibility";
import "./assets/index.css";
import "animate.css";

createApp(App).use(VueObserveVisibility).use(router).mount("#app");
