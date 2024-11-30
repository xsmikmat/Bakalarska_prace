<template>
  <div class="container-center-horizontal">
    <div class="fotogalerie-3-1 screen">
      <div class="section-17">
        <header class="header-7">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-10" :src="upraveno_Logo111" alt="upraveno_logo (1) 1" /></router-link
          ><router-link to="/navigace-mobil"
            ><img
              class="menu-2"
              src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/menu-2.svg"
              alt="menu"
            />
          </router-link>
        </header>
        <div class="contents-3">
          <div class="container-12">
            <h1 class="title-15 heading-2" v-html="title"></h1>
            <p class="description-13 text">{{ description }}</p>
          </div>
          <x-section2
            :imageContainer31Props="xSection2Props.imageContainer31Props"
            :imageContainer32Props="xSection2Props.imageContainer32Props"
            :imageContainer33Props="xSection2Props.imageContainer33Props"
            :imageContainer34Props="xSection2Props.imageContainer34Props"
          />
        </div>
        <contents3 :xSection2Props="contents31Props.xSection2Props" />
        <contents3 :xSection2Props="contents32Props.xSection2Props" />
        <footer class="footer-5">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-10" :src="upraveno_Logo112" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="component-1-5">
            <div class="button-container-10">
              <component126 :oUbytovn="component126Props.oUbytovn" />
              <component127 :okol="component127Props.okol" />
              <component128 :fotogalerie="component128Props.fotogalerie" />
              <component129 :rezervace="component129Props.rezervace" />
              <component130 :kontakt="component130Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import XSection2 from "./XSection2";
import Contents3 from "./Contents3";
import Component126 from "./Component126";
import Component127 from "./Component127";
import Component128 from "./Component128";
import Component129 from "./Component129";
import Component130 from "./Component130";
export default {
  name: "Fotogalerie3",
  components: {
    XSection2,
    Contents3,
    Component126,
    Component127,
    Component128,
    Component129,
    Component130,
  },
  props: [
    "upraveno_Logo111",
    "title",
    "description",
    "upraveno_Logo112",
    "xSection2Props",
    "contents31Props",
    "contents32Props",
    "component126Props",
    "component127Props",
    "component128Props",
    "component129Props",
    "component130Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.fotogalerie-3-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1691px
  width: 375px

.section-17
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 3px
  padding: 8px 20px
  position: relative
  width: 372px

.header-7
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 80px
  justify-content: center
  position: relative
  width: 100%

.upraveno_logo-1-1-10
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.menu-2
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.contents-3
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.container-12
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-15
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center

.description-13
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 15px
  position: relative
  text-align: center

.footer-5
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  height: 240px
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 100%

.component-1-5
  border-radius: 5px
  height: 240px
  margin-bottom: -20.00px
  margin-top: -20.00px
  overflow: hidden
  position: relative
  width: 131px

.button-container-10
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
