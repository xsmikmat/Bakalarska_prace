import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import HomePageMc from "./pages/HomePageMc.vue";
import FotogalerieMc from "./pages/FotogalerieMc.vue";
import KontaktMc from "./pages/KontaktMc.vue";
import OUbytovnMc from "./pages/OUbytovnMc.vue";
import RezervaceMc from "./pages/RezervaceMc.vue";
import OkolMc from "./pages/OkolMc.vue";
import Page from "./pages/Page.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "HomePageMc",
    component: HomePageMc,
  },
  {
    path: "/fotogalerie-mc14",
    name: "FotogalerieMc",
    component: FotogalerieMc,
  },
  {
    path: "/kontakt-mc14",
    name: "KontaktMc",
    component: KontaktMc,
  },
  {
    path: "/o-ubytovn-mc14",
    name: "OUbytovnMc",
    component: OUbytovnMc,
  },
  {
    path: "/rezervace-mc14",
    name: "RezervaceMc",
    component: RezervaceMc,
  },
  {
    path: "/okol-mc14",
    name: "OkolMc",
    component: OkolMc,
  },
  {
    path: "/page",
    name: "Page",
    component: Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string;
  const metaDesc = toRoute?.meta?.description as string;

  window.document.title = metaTitle || "Bakalářská-práce";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;