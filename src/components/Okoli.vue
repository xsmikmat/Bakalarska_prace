<template>
  <div class="container-center-horizontal">
    <div class="okoli-1 screen">
      <div class="section-31">
        <header class="header-18">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-24" :src="upraveno_Logo111" alt="upraveno_logo (1) 1" /></router-link
          ><router-link to="/navigace-mobil"
            ><img
              class="menu-6"
              src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/menu-2.svg"
              alt="menu"
            />
          </router-link>
        </header>
        <div class="section-32">
          <div class="container-34">
            <h1 class="title-43 heading-2">{{ title1 }}</h1>
            <p class="description-20 subtext">{{ description }}</p>
          </div>
          <div class="image-container-28"><img class="okoli-10-1-1" :src="okoli101" alt="Okoli 10 1" /></div>
        </div>
        <div class="list-19">
          <div class="list-20">
            <div class="row-10">
              <div class="item-8">
                <img class="icon-for-3" :src="iconForTourism1" alt="icon-for-tourism 1" />
                <div class="frame-427318906-9">
                  <div class="title-42 roboto-bold-black-20px">{{ title2 }}</div>
                </div>
              </div>
              <div class="item-8">
                <div class="frame-427318906-9">
                  <img class="icon-for-3" :src="iconForCycling1" alt="icon-for-cycling 1" />
                  <div class="title-44 roboto-normal-black-20px">{{ title3 }}</div>
                </div>
              </div>
              <div class="item-8">
                <img
                  class="icon-for-3"
                  :src="iconForSwimmersAndBoatersInNature1"
                  alt="icon-for-swimmers-and-boaters-in-nature 1"
                />
                <div class="frame-427318906-9">
                  <div class="title-42 roboto-normal-black-20px">{{ title4 }}</div>
                </div>
              </div>
            </div>
          </div>
          <row />
          <row />
        </div>
        <footer class="footer-11">
          <router-link to="/homepage-3"
            ><img class="upraveno_logo-1-1-24" :src="upraveno_Logo112" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="component-1-12">
            <div class="button-container-23">
              <component161 :oUbytovn="component161Props.oUbytovn" />
              <component162 :okol="component162Props.okol" />
              <component163 :fotogalerie="component163Props.fotogalerie" />
              <component164 :rezervace="component164Props.rezervace" />
              <component165 :kontakt="component165Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Row from "./Row";
import Component161 from "./Component161";
import Component162 from "./Component162";
import Component163 from "./Component163";
import Component164 from "./Component164";
import Component165 from "./Component165";
export default {
  name: "Okoli",
  components: {
    Row,
    Component161,
    Component162,
    Component163,
    Component164,
    Component165,
  },
  props: [
    "upraveno_Logo111",
    "title1",
    "description",
    "okoli101",
    "iconForTourism1",
    "title2",
    "iconForCycling1",
    "title3",
    "iconForSwimmersAndBoatersInNature1",
    "title4",
    "upraveno_Logo112",
    "component161Props",
    "component162Props",
    "component163Props",
    "component164Props",
    "component165Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.okoli-1
  align-items: flex-start
  background-color: $white
  display: flex
  width: 375px

.section-31
  align-items: center
  display: flex
  flex-direction: column
  height: 1468px
  margin-left: 3px
  padding: 20px 0px
  position: relative
  width: 372px

.header-18
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 80px
  justify-content: center
  position: relative
  width: 100%

.upraveno_logo-1-1-24
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.menu-6
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.section-32
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  padding: 8px 20px
  position: relative
  width: 100%

.container-34
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-43
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center

.description-20
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center

.image-container-28
  align-items: center
  align-self: stretch
  display: flex
  height: 261px
  justify-content: center
  padding: 30px 0px
  position: relative
  width: 100%

.okoli-10-1-1
  height: 261px
  margin-bottom: -30.00px
  margin-top: -30.00px
  object-fit: cover
  position: relative
  width: 316px

.list-19
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  justify-content: center
  padding: 8px 20px
  position: relative
  width: 100%

.list-20
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  justify-content: center
  position: relative
  width: 100%

.row-10
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 100%

.item-8
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative

.icon-for-3
  height: 66px
  object-fit: cover
  position: relative
  width: 66px

.frame-427318906-9
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-42
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.title-44
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  position: relative
  text-align: center

.footer-11
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

.component-1-12
  border-radius: 5px
  height: 240px
  margin-bottom: -20.00px
  margin-top: -20.00px
  overflow: hidden
  position: relative
  width: 131px

.button-container-23
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
