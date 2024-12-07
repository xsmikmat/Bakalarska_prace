import Vue from "vue";
import {createWebHashHistory, createRouter} from "vue-router";
import Fotogalerie from "./pages/Fotogalerie.vue";
import Homepage from "./pages/Homepage.vue";
import Rezervace from "./pages/Rezervace.vue";
import Kontakt from "./pages/Kontakt.vue";
import OUbytovani from "./pages/OUbytovani.vue";
import Okoli from "./pages/Okoli.vue";
import {
  fotogalerieData,
  homepageData,
  rezervaceData,
  kontaktData,
  oUbytovaniData,
  okoliData,
} from "./data";

export default createRouter({
  history: createWebHashHistory(),
  mode: "history",
  routes: [
    {
      path: "/fotogalerie",
      component: Fotogalerie,
      props: { ...fotogalerieData },
    },
    {
      path: "/rezervace",
      component: Rezervace,
      props: { ...rezervaceData },
    },
    {
      path: "/kontakt",
      component: Kontakt,
      props: { ...kontaktData },
    },
    {
      path: "/o-ubytovani",
      component: OUbytovani,
      props: { ...oUbytovaniData },
    },
    {
      path: "/okoli",
      component: Okoli,
    },
    {
      path: "/",
      component: Homepage,
      props: { ...homepageData },
    }
  ],
});
