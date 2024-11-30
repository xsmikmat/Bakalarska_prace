<template>
  <div class="container-center-horizontal">
    <div class="kontakt-1-1 screen">
      <div class="section-21">
        <header class="header-13">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-13" :src="upraveno_Logo111" alt="upraveno_logo (1) 1" /></router-link
          ><router-link to="/navigace-mobil"
            ><img
              class="menu-4"
              src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/menu-6.svg"
              alt="menu"
            />
          </router-link>
        </header>
        <div class="list-6">
          <div class="row">
            <item :title="item1Props.title" :subtitle="item1Props.subtitle" />
            <item :title="item2Props.title" :subtitle="item2Props.subtitle" />
            <item :title="item3Props.title" :subtitle="item3Props.subtitle" />
            <item :title="item4Props.title" :subtitle="item4Props.subtitle" />
            <item :title="item5Props.title" :subtitle="item5Props.subtitle" />
            <item :title="item6Props.title" :subtitle="item6Props.subtitle" />
          </div>
        </div>
        <div class="section-22">
          <div class="map-container">
            <div class="image-4">
              <div class="overlap-group">
                <img
                  class="image-5"
                  src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/image.svg"
                  alt="image"
                />
                <div class="title-17 roboto-medium-black-16px">{{ title }}</div>
                <img
                  class="ic-location"
                  src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/ic-location.svg"
                  alt="ic-location"
                />
              </div>
            </div>
          </div>
        </div>
        <footer class="footer-6">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-13" :src="upraveno_Logo112" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="component-1-6">
            <div class="button-container-12">
              <component131 :oUbytovn="component131Props.oUbytovn" />
              <component132 :okol="component132Props.okol" />
              <component133 :fotogalerie="component133Props.fotogalerie" />
              <component134 :rezervace="component134Props.rezervace" />
              <component135 :kontakt="component135Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import Component131 from "./Component131";
import Component132 from "./Component132";
import Component133 from "./Component133";
import Component134 from "./Component134";
import Component135 from "./Component135";
export default {
  name: "Kontakt",
  components: {
    Item,
    Component131,
    Component132,
    Component133,
    Component134,
    Component135,
  },
  props: [
    "upraveno_Logo111",
    "title",
    "upraveno_Logo112",
    "item1Props",
    "item2Props",
    "item3Props",
    "item4Props",
    "item5Props",
    "item6Props",
    "component131Props",
    "component132Props",
    "component133Props",
    "component134Props",
    "component135Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.kontakt-1-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1250px
  width: 375px

.section-21
  align-items: center
  display: flex
  flex-direction: column
  height: 1234px
  overflow: hidden
  padding: 20px
  position: relative
  width: 375px

.header-13
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 80px
  justify-content: center
  position: relative
  width: 100%

.upraveno_logo-1-1-13
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.menu-4
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.list-6
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 8px
  justify-content: center
  padding: 8px 20px
  position: relative
  width: 100%

.row
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 8px
  padding: 20px 0px
  position: relative

.section-22
  align-items: center
  align-self: stretch
  display: flex
  flex-direction: column
  gap: 60px
  height: 218px
  justify-content: center
  overflow: hidden
  padding: 60px 0px
  position: relative
  width: 100%

.map-container
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 220px
  margin-bottom: -60.00px
  margin-top: -61.00px
  padding: 4px 0px
  position: relative
  width: 100%

.image-4
  align-self: stretch
  background-color: $black-3
  border-radius: 6px
  flex: 1
  flex-grow: 1
  position: relative

.overlap-group
  height: 218px
  left: -15px
  position: relative
  top: -3px
  width: 365px

.image-5
  height: 218px
  left: 15px
  position: absolute
  top: 0
  width: 335px

.title-17
  left: 0
  letter-spacing: 0
  line-height: 22px
  position: absolute
  text-align: center
  top: 116px
  transform: rotate(180deg)
  width: 365px

.ic-location
  height: 24px
  left: 171px
  position: absolute
  top: 85px
  width: 24px

.footer-6
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

.component-1-6
  border-radius: 5px
  height: 240px
  margin-bottom: -20.00px
  margin-top: -20.00px
  overflow: hidden
  position: relative
  width: 131px

.button-container-12
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
