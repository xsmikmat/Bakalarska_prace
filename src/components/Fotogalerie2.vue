<template>
  <div class="container-center-horizontal">
    <div class="fotogalerie-2-1 screen">
      <div class="section-7">
        <header class="header-2">
          <router-link to="/homepage-2"
            ><img class="upraveno_logo-1-1-3" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="navigace-1">
            <div class="button-container-3">
              <navigace6 :oUbytovn="navigace6Props.oUbytovn" />
              <navigace7 :okol="navigace7Props.okol" />
              <navigace8 :fotogalerie="navigace8Props.fotogalerie" />
              <navigace9 :rezervace="navigace9Props.rezervace" />
              <navigace10 :kontakt="navigace10Props.kontakt" />
            </div>
          </div>
        </header>
        <div class="contents-1">
          <container32 :title="container32Props.title" />
          <x-section
            :imageContainer21Props="xSectionProps.imageContainer21Props"
            :imageContainer22Props="xSectionProps.imageContainer22Props"
            :imageContainer23Props="xSectionProps.imageContainer23Props"
            :imageContainer24Props="xSectionProps.imageContainer24Props"
          />
        </div>
        <contents2 :container3Props="contents21Props.container3Props" :xSectionProps="contents21Props.xSectionProps" />
        <contents2 :container3Props="contents22Props.container3Props" :xSectionProps="contents22Props.xSectionProps" />
        <footer class="footer-2">
          <img class="upraveno_logo-1-1-4" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container2 />
          <div class="component-1-2">
            <div class="button-container-4">
              <component111 :oUbytovn="component111Props.oUbytovn" />
              <component112 :okol="component112Props.okol" />
              <component113 :fotogalerie="component113Props.fotogalerie" />
              <component114 :rezervace="component114Props.rezervace" />
              <component115 :kontakt="component115Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navigace6 from "./Navigace6";
import Navigace7 from "./Navigace7";
import Navigace8 from "./Navigace8";
import Navigace9 from "./Navigace9";
import Navigace10 from "./Navigace10";
import Container32 from "./Container32";
import XSection from "./XSection";
import Contents2 from "./Contents2";
import Container2 from "./Container2";
import Component111 from "./Component111";
import Component112 from "./Component112";
import Component113 from "./Component113";
import Component114 from "./Component114";
import Component115 from "./Component115";
export default {
  name: "Fotogalerie2",
  components: {
    Navigace6,
    Navigace7,
    Navigace8,
    Navigace9,
    Navigace10,
    Container32,
    XSection,
    Contents2,
    Container2,
    Component111,
    Component112,
    Component113,
    Component114,
    Component115,
  },
  props: [
    "upraveno_Logo111",
    "upraveno_Logo112",
    "navigace6Props",
    "navigace7Props",
    "navigace8Props",
    "navigace9Props",
    "navigace10Props",
    "container32Props",
    "xSectionProps",
    "contents21Props",
    "contents22Props",
    "component111Props",
    "component112Props",
    "component113Props",
    "component114Props",
    "component115Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.fotogalerie-2-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 2795px
  width: 1100px

.section-7
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 1100px

.header-2
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  justify-content: space-between
  padding: 0px 100px
  position: relative
  width: 100%

.upraveno_logo-1-1-3
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.navigace-1
  border-radius: 5px
  height: 84px
  overflow: hidden
  position: relative
  width: 473px

.button-container-3
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.contents-1
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

.footer-2
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 40px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.upraveno_logo-1-1-4
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.component-1-2
  border-radius: 5px
  height: 250px
  overflow: hidden
  position: relative
  width: 200px

.button-container-4
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
