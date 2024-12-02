<template>
  <div class="container-center-horizontal">
    <div class="screen">
      <div class="page">
        <div class="header">
          <router-link to="/"
          ><img class="logo" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
          /></router-link>
          <p class="heading-2 nav-header">{{ penzionVSrdciEskKanady }}</p>
          <div class="navigace">
            <div class="button-nav-container">
              <router-link to="/o-ubytovani-3">
                <div class="button-nav"><div class="text-nav text">O ubytování</div></div></router-link>
              <router-link to="/okoli-2">
                <div class="button-nav"><div class="text-nav text">Okolí</div></div></router-link>
              <router-link to="/fotogalerie-1">
                <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div></router-link>
              <router-link to="/rezervace-3">
                <div class="property-1-button-23">
                  <div class="rezervace-nav-text fredoka-semi-bold-surf-16px">Rezervace</div>
                </div></router-link>
              <router-link to="/kontakt-2">
                <div class="button-nav"><div class="text-nav text">Kontakt</div></div></router-link>
            </div>
            <img class="menu-1" src="../../img/icon_burger.png" alt="menu" @click="toggleActive" />
              <div class="button-container-9" :class="{ 'active': active }" v-if="active">
                <router-link to="/o-ubytovani-3">
                  <div class="button-nav"><div class="text-nav text">O ubytování</div></div>
                </router-link>
                <router-link to="/okoli-2">
                  <div class="button-nav"><div class="text-nav text">Okolí</div></div>
                </router-link>
                <router-link to="/fotogalerie-1">
                  <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div>
                </router-link>
                <router-link to="/rezervace-3">
                  <div class="button-nav"><div class="text-nav text">Rezervace</div></div>
                </router-link>
                <router-link to="/kontakt-2">
                  <div class="button-nav"><div class="text-nav text">Kontakt</div></div>
                </router-link>
              </div>
          </div>
        </div>
        <div class="page-item">
          <h1 class="vtejte-u-ns-na-penzionu-2 valign-text-middle heading-1">{{ vtejteUNsNaPenzionu }}</h1>
          <p class="lorem-ipsum-dolor-si-3 subtext">{{ loremIpsumDolorSi1 }}</p>
          <div class="section-15">
            <router-link to="/rezervace-3">
              <div class="button-38">
                <div class="rezervovat-2 heading-2">{{ rezervovat }}</div>
              </div></router-link
            ><router-link to="/kontakt-2">
              <div class="button-37">
                <div class="kontakt-10 heading-2">{{ kontakt }}</div>
              </div></router-link
            >
          </div>
          <img-container />
        </div>
        <div class="page-item">
          <div class="o-penzionu-mikmtor-2 valign-text-middle heading-1">{{ oPenzionuMikmtor }}</div>
          <div class="cards">
            <list :spolecnePrsotory021="list1Props.spolecnePrsotory021" :title="list1Props.title" />
            <list :spolecnePrsotory021="list2Props.spolecnePrsotory021" :title="list2Props.title" />
            <list :spolecnePrsotory021="list3Props.spolecnePrsotory021" :title="list3Props.title" />
          </div>
            <div class="icon-buttons-2">
              <router-link to="/o-ubytovani-3">
                <div class="button-37">
                  <div class="vce-informac-2 subtext">{{ vceInformac1 }}</div>
                </div></router-link
              >
            </div>
        </div>
        <div class="page-item">
          <p class="zitky-a-aktivity-v-okol-2 heading-1">{{ zitkyAAktivityVOkol }}</p>
          <p class="lorem-ipsum-dolor-si-4 subtext">{{ loremIpsumDolorSi2 }}</p>
          <router-link to="/okoli-2">
            <div class="button-37">
              <div class="vce-informac-2 subtext">{{ vceInformac2 }}</div>
            </div></router-link
          >
        </div>
        <footer class="footer-4">
          <img class="upraveno_logo-1-1-9" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container />
          <img class="vector-200" :src="vector200" alt="Vector 200" />
          <div class="component-1-4">
            <div class="button-container-9">
              <router-link to="/o-ubytovani-3">
                <div class="button-nav"><div class="text-nav text">O ubytování</div></div></router-link>
              <router-link to="/okoli-2">
                <div class="button-nav"><div class="text-nav text">Okolí</div></div></router-link>
              <router-link to="/fotogalerie-1">
                <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div></router-link>
              <router-link to="/rezervace-3">
                <div class="button-nav"><div class="text-nav text">Rezervace</div></div></router-link>
              <router-link to="/kontakt-2">
                <div class="button-nav"><div class="text-nav text">Kontakt</div></div></router-link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import ImgContainer from "./ImgContainer";
import List from "./List";
import Container from "./Container";
import xNav from "@/components/xNav.vue";
import xNav3 from "@/components/xNav3.vue";
import xNav2 from "@/components/xNav2.vue";
import xNav4 from "@/components/xNav4.vue";
import xNav5 from "@/components/xNav5.vue";
export default {
  name: "Homepage3",
  components: {
    xNav5, xNav4, xNav2, xNav3, xNav,
    ImgContainer,
    List,
    Container
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
  props: [
    "upraveno_Logo111",
    "penzionVSrdciEskKanady",
    "vtejteUNsNaPenzionu",
    "loremIpsumDolorSi1",
    "rezervovat",
    "kontakt",
    "oPenzionuMikmtor",
    "vceInformac1",
    "zitkyAAktivityVOkol",
    "loremIpsumDolorSi2",
    "vceInformac2",
    "upraveno_Logo112",
    "vector200",
    "list1Props",
    "list2Props",
    "list3Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

@media screen and (max-width: 991px)

  .navigace
    display: none !important
  .nav-header
    display: none
  .menu-1
    display: flex !important

@media screen and (min-width: 990px)
  .menu-1
    display: none
  .navigace
    display: flex

.menu-1
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.page-item
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  padding: 20px 80px
  position: relative
  width: 100%

.vtejte-u-ns-na-penzionu-2,
.o-penzionu-mikmtor-2,
.zitky-a-aktivity-v-okol-2
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative
  text-align: center
  white-space: nowrap

.lorem-ipsum-dolor-si-3
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center
  width: 1151px

.section-15
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 100px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.button-38
  align-items: center
  background-color: $white
  border: 1px solid
  border-color: $fun-green
  border-radius: 10px
  cursor: pointer
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  overflow: hidden
  padding: 10px 25px
  position: relative

.rezervovat-2
  color: $fun-green
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.button-37
  align-items: center
  background-color: $fun-green
  border-radius: 10px
  cursor: pointer
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  overflow: hidden
  padding: 10px 25px
  position: relative

.kontakt-10
  color: $surf
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 172px

.cards
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  gap: 67px
  padding: 20px 80px
  margin-left: -80px
  margin-right: -80px
  position: relative

@media (max-width: 991px)
  .cards
    flex-direction: column
    gap: 20px
    padding: 20px 40px
    margin-left: 0
    margin-right: 0

.icon-buttons-2
  align-items: center
  display: flex
  gap: 8px
  justify-content: center
  margin-bottom: -6.50px
  position: relative
  width: 1260px

.vce-informac-2
  color: $surf
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.lorem-ipsum-dolor-si-4
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center

.footer-4
  align-items: center
  background-color: transparent
  display: flex
  gap: 20px
  height: 313px
  justify-content: center
  overflow: hidden
  padding: 20px 80px
  position: relative
  width: 1504px

.upraveno_logo-1-1-9
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.vector-200
  height: 1px
  left: 1125px
  object-fit: cover
  position: absolute
  top: -92px
  width: 1504px

.component-1-4
  border-radius: 5px
  height: 308px
  margin-bottom: -17.50px
  margin-top: -17.50px
  overflow: hidden
  position: relative
  width: 260px

.button-container-9
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
