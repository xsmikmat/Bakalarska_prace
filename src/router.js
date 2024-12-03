import Vue from "vue";
import {createWebHashHistory, createRouter} from "vue-router";
import Fotogalerie from "./components/Fotogalerie";
import Homepage from "./components/Homepage";
import Rezervace from "./components/Rezervace";
import Kontakt from "./components/Kontakt";
import OUbytovani from "./components/OUbytovani";
import Okoli from "./components/Okoli";
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
      props: { ...okoliData },
    },
    {
      path: "/",
      component: Homepage,
      props: { ...homepageData },
    }
  ],
});
