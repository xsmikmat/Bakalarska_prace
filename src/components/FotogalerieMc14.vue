<template>
  <div class="container-center-horizontal">
    <div class="fotogalerie-mc14 screen">
      <div class="section-41">
        <router-link to="/homepage-3"
          ><img class="upraveno_logo-1-1-32" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
        /></router-link>
        <p class="penzion-v-srdci-esk-kanady-8 valign-text-middle heading-2">{{ penzionVSrdciEskKanady }}</p>
        <div class="component-1-18">
          <div class="button-container-31">
            <component191 :oUbytovn="component191Props.oUbytovn" />
            <component192 :okol="component192Props.okol" />
            <component193 :fotogalerie="component193Props.fotogalerie" />
            <component194 :rezervace="component194Props.rezervace" />
            <component195 :kontakt="component195Props.kontakt" />
          </div>
        </div>
        <img
          class="vector-200-9"
          src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/vector-200.svg"
          alt="Vector 200"
        />
      </div>
      <contents5 :container3Props="contents51Props.container3Props" />
      <contents5 :container3Props="contents52Props.container3Props" />
      <div class="contents-7">
        <container322 :title="container322Props.title" />
        <div class="list-31"></div>
        <img class="vector-200-10" :src="vector2002" alt="Vector 200" />
        <div class="section-42">
          <img class="upraveno_logo-1-1-33" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container8 />
          <img class="vector-200-11" :src="vector2003" alt="Vector 200" />
          <div class="component-1-19">
            <div class="button-container-32">
              <component196 :oUbytovn="component196Props.oUbytovn" />
              <component197 :okol="component197Props.okol" />
              <component198 :fotogalerie="component198Props.fotogalerie" />
              <component199 :rezervace="component199Props.rezervace" />
              <component1100 :kontakt="component1100Props.kontakt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component191 from "./Component191";
import Component192 from "./Component192";
import Component193 from "./Component193";
import Component194 from "./Component194";
import Component195 from "./Component195";
import Contents5 from "./Contents5";
import Container322 from "./Container322";
import Container8 from "./Container8";
import Component196 from "./Component196";
import Component197 from "./Component197";
import Component198 from "./Component198";
import Component199 from "./Component199";
import Component1100 from "./Component1100";
export default {
  name: "FotogalerieMc14",
  components: {
    Component191,
    Component192,
    Component193,
    Component194,
    Component195,
    Contents5,
    Container322,
    Container8,
    Component196,
    Component197,
    Component198,
    Component199,
    Component1100,
  },
  props: [
    "upraveno_Logo111",
    "penzionVSrdciEskKanady",
    "vector2002",
    "upraveno_Logo112",
    "vector2003",
    "component191Props",
    "component192Props",
    "component193Props",
    "component194Props",
    "component195Props",
    "contents51Props",
    "contents52Props",
    "container322Props",
    "component196Props",
    "component197Props",
    "component198Props",
    "component199Props",
    "component1100Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.fotogalerie-mc14
  align-items: flex-start
  background-color: $white
  display: flex
  flex-direction: column
  height: 2327px
  overflow: hidden
  position: relative
  width: 1512px

.section-41
  align-items: center
  display: flex
  gap: 160px
  height: 156px
  justify-content: center
  overflow: hidden
  padding: 60px 170px
  position: relative
  width: 1512px

.upraveno_logo-1-1-32
  cursor: pointer
  height: 109px
  margin-bottom: -36.50px
  margin-left: -114.00px
  margin-top: -36.50px
  object-fit: cover
  position: relative
  width: 153px

.penzion-v-srdci-esk-kanady-8
  color: $black
  font-weight: 400
  height: 91px
  line-height: 44px
  margin-bottom: -26.50px
  margin-top: -28.50px
  position: relative
  text-align: center
  width: 454px

.component-1-18
  border-radius: 5px
  height: 84px
  margin-bottom: -24.00px
  margin-right: -114.00px
  margin-top: -24.00px
  overflow: hidden
  position: relative
  width: 473px

.button-container-31
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.vector-200-9
  height: 1px
  left: 0
  object-fit: cover
  position: absolute
  top: 156px
  width: 1512px

.contents-7
  align-items: center
  display: flex
  flex-direction: column
  gap: 60px
  justify-content: center
  overflow: hidden
  padding: 60px 170px
  position: relative
  width: 1512px

.list-31
  align-self: stretch
  flex: 0 0 auto
  position: relative
  width: 100%

.vector-200-10
  height: 1px
  left: -6611px
  object-fit: cover
  position: absolute
  top: 1219px
  width: 1512px

.section-42
  align-items: center
  display: flex
  gap: 60px
  height: 313px
  justify-content: center
  margin-left: -166.00px
  margin-right: -166.00px
  overflow: hidden
  padding: 60px 170px
  position: relative
  width: 1504px

.upraveno_logo-1-1-33
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.vector-200-11
  height: 1px
  left: -6615px
  object-fit: cover
  position: absolute
  top: -81px
  width: 1504px

.component-1-19
  border-radius: 5px
  height: 308px
  margin-bottom: -57.50px
  margin-top: -57.50px
  overflow: hidden
  position: relative
  width: 260px

.button-container-32
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
