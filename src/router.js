import Vue from "vue";
import {createWebHashHistory, createRouter} from "vue-router";
import Fotogalerie from "./components/Fotogalerie";
import Homepage from "./components/Homepage";
import Fotogalerie2 from "./components/Fotogalerie2";
import Homepage2 from "./components/Homepage2";
import NavigaceMobil from "./components/NavigaceMobil";
import Homepage3 from "./components/Homepage3";
import Fotogalerie3 from "./components/Fotogalerie3";
import Rezervace from "./components/Rezervace";
import Kontakt from "./components/Kontakt";
import Kontakt2 from "./components/Kontakt2";
import Kontakt3 from "./components/Kontakt3";
import OUbytovani from "./components/OUbytovani";
import OUbytovani2 from "./components/OUbytovani2";
import OUbytovani3 from "./components/OUbytovani3";
import Okoli from "./components/Okoli";
import Okoli2 from "./components/Okoli2";
import Okoli3 from "./components/Okoli3";
import {
  fotogalerieData,
  homepageData,
  fotogalerie2Data,
  homepage2Data,
  navigaceMobilData,
  homepage3Data,
  fotogalerie3Data,
  rezervaceData,
  kontaktData,
  kontakt2Data,
  kontakt3Data,
  oUbytovaniData,
  oUbytovani2Data,
  oUbytovani3Data,
  okoliData,
  okoli2Data,
  okoli3Data,
} from "./data";

export default createRouter({
  history: createWebHashHistory(),
  mode: "history",
  routes: [
    {
      path: "/fotogalerie-1",
      component: Fotogalerie,
      props: { ...fotogalerieData },
    },
    {
      path: "/homepage-1",
      component: Homepage,
      props: { ...homepageData },
    },
    {
      path: "/fotogalerie-2",
      component: Fotogalerie2,
      props: { ...fotogalerie2Data },
    },
    {
      path: "/homepage-2",
      component: Homepage2,
      props: { ...homepage2Data },
    },
    {
      path: "/navigace-mobil",
      component: NavigaceMobil,
      props: {
        upraveno_Logo11:
          "https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/upraveno-logo--1--1.png",
        xNavProps: navigaceMobilData.xNavProps,
        xNav2Props: navigaceMobilData.xNav2Props,
        xNav3Props: navigaceMobilData.xNav3Props,
        xNav4Props: navigaceMobilData.xNav4Props,
        xNav5Props: navigaceMobilData.xNav5Props,
      },
    },
    {
      path: "/fotogalerie-3",
      component: Fotogalerie3,
      props: { ...fotogalerie3Data },
    },
    {
      path: "/rezervace",
      component: Rezervace,
      props: { ...rezervaceData },
    },
    {
      path: "/kontakt-1",
      component: Kontakt,
      props: { ...kontaktData },
    },
    {
      path: "/kontakt-2",
      component: Kontakt2,
      props: { ...kontakt2Data },
    },
    {
      path: "/kontakt-3",
      component: Kontakt3,
      props: { ...kontakt3Data },
    },
    {
      path: "/o-ubytovani-1",
      component: OUbytovani,
      props: { ...oUbytovaniData },
    },
    {
      path: "/o-ubytovani-2",
      component: OUbytovani2,
      props: { ...oUbytovani2Data },
    },
    {
      path: "/o-ubytovani-3",
      component: OUbytovani3,
      props: { ...oUbytovani3Data },
    },
    {
      path: "/okoli-1",
      component: Okoli,
      props: { ...okoliData },
    },
    {
      path: "/okoli-2",
      component: Okoli2,
      props: { ...okoli2Data },
    },
    {
      path: "/okoli-3",
      component: Okoli3,
      props: { ...okoli3Data },
    },
    {
      path: "/",
      component: Homepage3,
      props: { ...homepage3Data },
    }
  ],
});
