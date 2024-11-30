<template>
  <div class="container-center-horizontal">
    <div class="homepage-3 screen">
      <div class="page">
        <header class="header-6">
          <img class="upraveno_logo-1-1-8" :src="upraveno_Logo111" alt="upraveno_logo (1) 1" />
          <p class="penzion-v-srdci-esk-kanady-1 valign-text-middle heading-2">{{ penzionVSrdciEskKanady }}</p>
          <div class="navigace-3">
            <div class="button-container-8">
              <navigace16 />
              <navigace17 />
              <navigace18 />
              <navigace19 />
              <navigace20 />
            </div>
          </div>
        </header>
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
            <div class="icon-buttons-2">
              <router-link to="/o-ubytovani-3">
                <div class="button-37">
                  <div class="vce-informac-2 subtext">{{ vceInformac1 }}</div>
                </div></router-link
              >
            </div>
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
              <component121 />
              <component122 />
              <component123 />
              <component124 />
              <component125 />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navigace16 from "./Navigace16";
import Navigace17 from "./Navigace17";
import Navigace18 from "./Navigace18";
import Navigace19 from "./Navigace19";
import Navigace20 from "./Navigace20";
import ImgContainer from "./ImgContainer";
import List from "./List";
import Container from "./Container";
import Component121 from "./Component121";
import Component122 from "./Component122";
import Component123 from "./Component123";
import Component124 from "./Component124";
import Component125 from "./Component125";
export default {
  name: "Homepage3",
  components: {
    Navigace16,
    Navigace17,
    Navigace18,
    Navigace19,
    Navigace20,
    ImgContainer,
    List,
    Container,
    Component121,
    Component122,
    Component123,
    Component124,
    Component125,
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

.homepage-3
  align-items: flex-start
  background-color: $white
  display: flex
  height: 2287px
  overflow: hidden
  width: 1504px

.page
  align-items: flex-end
  background-color: $white
  display: flex
  flex-direction: column
  position: relative
  width: 1512px

.header-6
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 160px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.upraveno_logo-1-1-8
  height: 109px
  margin-left: -65.50px
  object-fit: cover
  position: relative
  width: 153px

.penzion-v-srdci-esk-kanady-1
  color: $black
  font-weight: 400
  height: 91px
  line-height: 44px
  position: relative
  text-align: center
  width: 454px

.navigace-3
  border-radius: 5px
  height: 84px
  margin-right: -65.50px
  overflow: hidden
  position: relative
  width: 556px

.button-container-8
  align-items: flex-end
  display: flex
  height: 44px
  left: 20px
  min-width: 434px
  position: relative
  top: 20px

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
  width: fit-content

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
  align-items: center
  display: flex
  flex-wrap: wrap
  gap: 67px 67px
  height: 714px
  justify-content: center
  margin-left: -80.00px
  margin-right: -80.00px
  padding: 20px 80px
  position: relative
  width: 1512px

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
