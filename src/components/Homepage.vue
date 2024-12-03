<template>
  <div class="container-center-horizontal">
    <div class="homepage-1 screen">
      <div class="section-3">
        <header class="header-1">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-2" :src="upraveno_Logo111" alt="upraveno_logo (1) 1" /></router-link
          ><router-link to="/navigace-mobil"
            ><img
              class="menu"
              src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/menu-2.svg"
              alt="menu"
            />
          </router-link>
        </header>
        <div class="section-4">
          <h1 class="vtejte-u-ns-na-penzionu valign-text-middle heading-2">Vítejte u nás na penzionu</h1>
          <p class="description-6 subtext">{{ description }}</p>
          <router-link to="/rezervace-2">
            <div class="button-9">
              <div class="rezervovat subtext">{{ rezervovat }}</div>
            </div></router-link
          ><router-link to="/kontakt-3">
            <div class="button-10">
              <div class="kontakt-2 subtext">{{ kontakt }}</div>
            </div></router-link
          >
          <div class="section-5"><img class="image-1" :src="image1" alt="image 1" /></div>
        </div>
        <div class="section-2">
          <div class="o-penzionu-mikmtor valign-text-middle">{{ oPenzionuMikmtor }}</div>
          <div class="section-6">
            <div class="list">
              <div class="card">
                <div class="image-container-2">
                  <img class="spolecne-prsotory-02-1" :src="spolecnePrsotory021" alt="Spolecne prsotory 02 1" />
                </div>
                <div class="text-content">
                  <div class="title-6 subtext">{{ title }}</div>
                  <p class="subtitle valign-text-middle text">{{ subtitle }}</p>
                </div>
              </div>
            </div>
            <div class="icon-buttons">
              <router-link to="/o-ubytovani-3">
                <div class="button-8">
                  <div class="vce-informac text">{{ vceInformac1 }}</div>
                </div></router-link
              >
            </div>
          </div>
        </div>
        <div class="section-2">
          <p class="zitky-a-aktivity-v-okol">{{ zitkyAAktivityVOkol }}</p>
          <p class="lorem-ipsum-dolor-si text">{{ loremIpsumDolorSi }}</p>
          <router-link to="/okoli-2">
            <div class="button-8">
              <div class="vce-informac text">{{ vceInformac2 }}</div>
            </div></router-link
          >
        </div>
        <footer class="footer-1">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-2" :src="upraveno_Logo112" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="component-1-1">
            <div class="button-container-2">
              <component16 :oUbytovn="component16Props.oUbytovn" />
              <component17 :okol="component17Props.okol" />
              <component18 :fotogalerie="component18Props.fotogalerie" />
              <component19 :rezervace="component19Props.rezervace" />
              <component110 :kontakt="component110Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Component16 from "./Component16";
import Component17 from "./Component17";
import Component18 from "./Component18";
import Component19 from "./Component19";
import Component110 from "./Component110";
export default {
  name: "Homepage",
  components: {
    Component16,
    Component17,
    Component18,
    Component19,
    Component110,
  },
  props: [
    "upraveno_Logo111",
    "description",
    "rezervovat",
    "kontakt",
    "image1",
    "oPenzionuMikmtor",
    "spolecnePrsotory021",
    "title",
    "subtitle",
    "vceInformac1",
    "zitkyAAktivityVOkol",
    "loremIpsumDolorSi",
    "vceInformac2",
    "upraveno_Logo112",
    "component16Props",
    "component17Props",
    "component18Props",
    "component19Props",
    "component110Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.homepage-1
  align-items: flex-start
  background-color: $white
  display: flex
  width: 375px

.section-3
  align-items: center
  display: flex
  flex-direction: column
  gap: 20px
  height: 1941px
  margin-left: 3px
  padding: 20px 40px
  position: relative
  width: 372px

.header-1
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 80px
  justify-content: center
  position: relative
  width: 100%

.upraveno_logo-1-1-2
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.menu
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.section-4
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  padding: 20px 0px
  position: relative
  width: 100%

.vtejte-u-ns-na-penzionu
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center

.description-6
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center

.button-9
  align-items: center
  align-self: stretch
  background-color: $white
  border: 1px solid
  border-color: $fun-green
  border-radius: 10px
  cursor: pointer
  display: flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  overflow: hidden
  padding: 5px 25px
  position: relative
  width: 100%

.rezervovat
  color: $fun-green
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.button-10
  align-items: center
  align-self: stretch
  background-color: $fun-green
  border-radius: 10px
  cursor: pointer
  display: flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  overflow: hidden
  padding: 5px 25px
  position: relative
  width: 100%

.kontakt-2
  color: $surf
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center
  white-space: nowrap
  width: fit-content

.section-5
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  justify-content: center
  overflow: hidden
  padding: 8px 0px
  position: relative
  width: 100%

.image-1
  height: 250px
  margin-left: -53.00px
  object-fit: cover
  position: relative
  width: 398px

.section-2
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  padding: 8px 0px
  position: relative
  width: 100%

.o-penzionu-mikmtor
  align-self: stretch
  color: $black
  font-family: $font-family-gloock
  font-size: 24px
  font-weight: 400
  letter-spacing: 0
  line-height: 40px
  margin-top: -1.00px
  position: relative
  text-align: center

.section-6
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  justify-content: center
  padding: 20px
  position: relative
  width: 100%

.list
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 100%

.card
  align-items: center
  align-self: stretch
  display: flex
  flex-direction: column
  height: 526px
  overflow: hidden
  position: relative
  width: 100%

.image-container-2
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 340px
  overflow: hidden
  position: relative
  width: 100%

.spolecne-prsotory-02-1
  height: 340px
  object-fit: cover
  position: relative
  width: 340px

.text-content
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  padding: 12px
  position: relative
  width: 100%

.title-6
  align-self: stretch
  color: $black
  font-weight: 600
  height: 37px
  line-height: 44px
  margin-top: -1.00px
  position: relative
  white-space: nowrap

.subtitle
  align-self: stretch
  color: $gray
  font-weight: 400
  height: 121px
  line-height: 15px
  position: relative

.icon-buttons
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 8px
  justify-content: center
  position: relative
  width: 100%

.button-8
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

.vce-informac
  color: $surf
  font-weight: 400
  line-height: 15px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.zitky-a-aktivity-v-okol
  color: $black
  font-family: $font-family-gloock
  font-size: $font-size-xl
  font-weight: 400
  letter-spacing: 0
  line-height: 40px
  margin-left: -21.00px
  margin-right: -21.00px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 334px

.lorem-ipsum-dolor-si
  align-self: stretch
  color: $gray
  font-weight: 400
  line-height: 15px
  position: relative
  text-align: center

.footer-1
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  height: 240px
  justify-content: center
  margin-bottom: -20.00px
  padding: 20px 0px
  position: relative
  width: 100%

.component-1-1
  border-radius: 5px
  height: 240px
  margin-bottom: -20.00px
  margin-top: -20.00px
  overflow: hidden
  position: relative
  width: 131px

.button-container-2
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
