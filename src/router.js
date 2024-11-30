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
import Rezervace2 from "./components/Rezervace2";
import Kontakt from "./components/Kontakt";
import Kontakt2 from "./components/Kontakt2";
import Rezervace3 from "./components/Rezervace3";
import Kontakt3 from "./components/Kontakt3";
import OUbytovani from "./components/OUbytovani";
import OUbytovani2 from "./components/OUbytovani2";
import OUbytovani3 from "./components/OUbytovani3";
import Okoli from "./components/Okoli";
import Okoli2 from "./components/Okoli2";
import Okoli3 from "./components/Okoli3";
import KontaktMc14 from "./components/KontaktMc14";
import RezervaceMc14 from "./components/RezervaceMc14";
import FotogalerieMc14 from "./components/FotogalerieMc14";
import HomePagemc14 from "./components/HomePagemc14";
import OUbytovnmc14 from "./components/OUbytovnmc14";
import Okolmc14 from "./components/Okolmc14";
import {
  fotogalerieData,
  homepageData,
  fotogalerie2Data,
  homepage2Data,
  navigaceMobilData,
  homepage3Data,
  fotogalerie3Data,
  rezervaceData,
  rezervace2Data,
  kontaktData,
  kontakt2Data,
  rezervace3Data,
  kontakt3Data,
  oUbytovaniData,
  oUbytovani2Data,
  oUbytovani3Data,
  okoliData,
  okoli2Data,
  okoli3Data,
  kontaktMc14Data,
  rezervaceMc14Data,
  fotogalerieMc14Data,
  homePagemc14Data,
  oUbytovnmc14Data,
  okolmc14Data,
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
      path: "/homepage-3",
      component: Homepage3,
      props: { ...homepage3Data },
    },
    {
      path: "/fotogalerie-3",
      component: Fotogalerie3,
      props: { ...fotogalerie3Data },
    },
    {
      path: "/rezervace-1",
      component: Rezervace,
      props: { ...rezervaceData },
    },
    {
      path: "/rezervace-2",
      component: Rezervace2,
      props: { ...rezervace2Data },
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
      path: "/rezervace-3",
      component: Rezervace3,
      props: { ...rezervace3Data },
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
      path: "/kontakt-mc14",
      component: KontaktMc14,
      props: { ...kontaktMc14Data },
    },
    {
      path: "/rezervace-mc14",
      component: RezervaceMc14,
      props: { ...rezervaceMc14Data },
    },
    {
      path: "/fotogalerie-mc14",
      component: FotogalerieMc14,
      props: { ...fotogalerieMc14Data },
    },
    {
      path: "/o-ubytovani-u40mc14u41",
      component: OUbytovnmc14,
      props: { ...oUbytovnmc14Data },
    },
    {
      path: "/okoli-u40mc14u41",
      component: Okolmc14,
      props: { ...okolmc14Data },
    },
    {
      path: "/",
      component: HomePagemc14,
      props: { ...homePagemc14Data },
    },
  ],
});
