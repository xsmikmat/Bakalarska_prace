<template>
  <div class="container-center-horizontal">
    <div class="kontakt-3-1 screen">
      <div class="section-24">
        <header class="header-15">
          <router-link to="/homepage-2"
            ><img class="upraveno_logo-1-1-17" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="navigace-7">
            <div class="button-container-16">
              <navigace36 :oUbytovn="navigace36Props.oUbytovn" />
              <navigace37 :okol="navigace37Props.okol" />
              <navigace38 :fotogalerie="navigace38Props.fotogalerie" />
              <navigace39 :rezervace="navigace39Props.rezervace" />
              <navigace40 :kontakt="navigace40Props.kontakt" />
            </div>
          </div>
        </header>
        <div class="section-item">
          <div class="container-19">
            <h1 class="title-24 roboto-bold-black-40px">{{ title1 }}</h1>
          </div>
          <div class="list-11">
            <div class="row-3">
              <div class="item-4">
                <frame :src="frame1Props.src" />
                <div class="frame-427318906-3">
                  <div class="title-23 roboto-normal-black-20px">{{ title2 }}</div>
                </div>
                <div class="subtitle-6 roboto-medium-black-28px">{{ subtitle1 }}</div>
              </div>
              <div class="item-5">
                <frame :src="frame2Props.src" />
                <div class="frame-427318906-3">
                  <div class="title-23 roboto-normal-black-20px">{{ title3 }}</div>
                </div>
                <div class="subtitle-6 roboto-medium-black-28px">{{ subtitle2 }}</div>
              </div>
              <div class="item-6">
                <frame :src="frame3Props.src" />
                <div class="frame-427318906-3">
                  <div class="title-23 roboto-normal-black-20px">{{ title4 }}</div>
                </div>
                <p class="subtitle-6 roboto-medium-black-28px">{{ subtitle3 }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="list-12">
          <div class="title-25 roboto-bold-black-40px">{{ title5 }}</div>
          <div class="container-20">
            <item2 :title="item21Props.title" :subtitle="item21Props.subtitle" />
            <item2 :title="item22Props.title" :subtitle="item22Props.subtitle" />
            <item2 :title="item23Props.title" :subtitle="item23Props.subtitle" />
          </div>
          <div class="list-13">
            <div class="row-4">
              <item2 :title="item24Props.title" :subtitle="item24Props.subtitle" />
              <item2 :title="item25Props.title" :subtitle="item25Props.subtitle" />
              <item2 :title="item26Props.title" :subtitle="item26Props.subtitle" />
            </div>
          </div>
        </div>
        <div class="section-item">
          <div class="map-container-2">
            <div class="image-10">
              <div class="overlap-group-1">
                <img
                  class="ic-location-1"
                  src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/ic-location.svg"
                  alt="ic-location"
                />
                <div class="title-26 roboto-medium-black-16px">{{ title6 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-25">
          <img class="upraveno_logo-1-1-18" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container2 />
          <div class="component-1-8">
            <div class="button-container-17">
              <component141 :oUbytovn="component141Props.oUbytovn" />
              <component142 :okol="component142Props.okol" />
              <component143 :fotogalerie="component143Props.fotogalerie" />
              <component144 :rezervace="component144Props.rezervace" />
              <component145 :kontakt="component145Props.kontakt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigace36 from "./Navigace36";
import Navigace37 from "./Navigace37";
import Navigace38 from "./Navigace38";
import Navigace39 from "./Navigace39";
import Navigace40 from "./Navigace40";
import Frame from "./Frame";
import Item2 from "./Item2";
import Container2 from "./Container2";
import Component141 from "./Component141";
import Component142 from "./Component142";
import Component143 from "./Component143";
import Component144 from "./Component144";
import Component145 from "./Component145";
export default {
  name: "Kontakt3",
  components: {
    Navigace36,
    Navigace37,
    Navigace38,
    Navigace39,
    Navigace40,
    Frame,
    Item2,
    Container2,
    Component141,
    Component142,
    Component143,
    Component144,
    Component145,
  },
  props: [
    "upraveno_Logo111",
    "title1",
    "title2",
    "subtitle1",
    "title3",
    "subtitle2",
    "title4",
    "subtitle3",
    "title5",
    "title6",
    "upraveno_Logo112",
    "navigace36Props",
    "navigace37Props",
    "navigace38Props",
    "navigace39Props",
    "navigace40Props",
    "frame1Props",
    "frame2Props",
    "frame3Props",
    "item21Props",
    "item22Props",
    "item23Props",
    "item24Props",
    "item25Props",
    "item26Props",
    "component141Props",
    "component142Props",
    "component143Props",
    "component144Props",
    "component145Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.kontakt-3-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1803px
  overflow: hidden
  width: 1100px

.section-24
  align-items: center
  display: flex
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 1100px

.header-15
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  justify-content: space-between
  padding: 0px 100px
  position: relative
  width: 100%

.upraveno_logo-1-1-17
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.navigace-7
  border-radius: 5px
  height: 84px
  overflow: hidden
  position: relative
  width: 473px

.button-container-16
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.section-item
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

.container-19
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-24
  letter-spacing: 0
  line-height: 48px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 520px

.list-11
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 100%

.row-3
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 100%

.item-4
  align-items: center
  display: flex
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative
  width: 303px

.frame-427318906-3
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-23
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-6
  align-self: stretch
  letter-spacing: 0
  line-height: 36px
  position: relative
  text-align: center

.item-5
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative

.item-6
  align-items: center
  display: flex
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative
  width: 302px

.list-12
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 20px 20px
  justify-content: center
  overflow: hidden
  padding: 20px 40px
  position: relative
  width: 100%

.title-25
  letter-spacing: 0
  line-height: 48px
  margin-left: -102.00px
  margin-right: -40.00px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 1144px

.container-20
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 24px
  height: 484px
  position: relative

.list-13
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 40px
  height: 326px
  justify-content: center
  position: relative

.row-4
  align-items: flex-start
  align-self: stretch
  display: flex
  flex-direction: column
  gap: 40px
  height: 477px
  margin-bottom: -75.50px
  margin-top: -75.50px
  position: relative
  width: 100%

.map-container-2
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 300px
  padding: 4px 0px
  position: relative
  width: 100%

.image-10
  align-self: stretch
  background-color: $black-3
  border-radius: 6px
  flex: 1
  flex-grow: 1
  position: relative

.overlap-group-1
  align-items: center
  background-image: url(https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/image-4.svg)
  background-size: 100% 100%
  display: flex
  flex-direction: column
  gap: 7px
  min-height: 300px
  padding: 121px 0
  position: relative
  top: -4px
  width: 940px

.ic-location-1
  height: 24px
  margin-top: 5px
  width: 24px

.title-26
  letter-spacing: 0
  line-height: 22px
  text-align: center
  width: 908px

.section-25
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.upraveno_logo-1-1-18
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.component-1-8
  border-radius: 5px
  height: 250px
  overflow: hidden
  position: relative
  width: 200px

.button-container-17
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
