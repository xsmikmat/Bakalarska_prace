import App from "./App.vue";
import router from "./router";
import "../styleguide.sass"
import "../globals.sass"
import {createApp} from "vue";

createApp(App).use(router).mount("#app")