import App from "./App.vue";
import router from "./router";
import "../styleguide.sass"
import "../globals.sass"
import PrimeVue from 'primevue/config';
import {createApp} from "vue";
import Aura from '@primevue/themes/aura';

import "primeicons/primeicons.css"; // Icons
const app = createApp(App);

app.use(router);
app.use(PrimeVue,{
    theme: {
        preset: Aura,
            options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});

app.mount("#app");