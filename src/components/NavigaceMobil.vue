<template>
  <div class="navigace-mobil screen">
    <div class="navigace-mobil-1">
      <div class="header-4">
        <div class="section-14">
          <div class="header-5">
            <router-link to="/homepage-3"
              ><img class="upraveno_logo-1-1-7" :src="upraveno_Logo11" alt="upraveno_logo (1) 1" /></router-link
            ><router-link to="/navigace-mobil"
              ><img
                class="menu-1"
                src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/6746cea99d6a8703ef5210fc/img/menu-2.svg"
                alt="menu"
              />
            </router-link>
          </div>
          <div class="nav">
            <div class="button-container-7">
              <x-nav :oUbytovn="xNavProps.oUbytovn" />
              <x-nav2 :okol="xNav2Props.okol" />
              <x-nav3 :fotogalerie="xNav3Props.fotogalerie" />
              <x-nav4 :rezervace="xNav4Props.rezervace" />
              <x-nav5 :kontakt="xNav5Props.kontakt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xNav from "./xNav";
import xNav2 from "./xNav2";
import xNav3 from "./xNav3";
import xNav4 from "./xNav4";
import xNav5 from "./xNav5";
export default {
  name: "NavigaceMobil",
  components: {
    xNav,
    xNav2,
    xNav3,
    xNav4,
    xNav5,
  },
  props: ["upraveno_Logo11", "xNavProps", "xNav2Props", "xNav3Props", "xNav4Props", "xNav5Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.navigace-mobil
  align-items: flex-start
  display: flex
  overflow: hidden
  width: 375px

.navigace-mobil-1
  align-items: flex-start
  background-color: $white
  display: flex
  margin-left: -1324px
  margin-top: 3684px
  width: 375px

.header-4
  align-items: center
  display: flex
  flex-direction: column
  height: 377px
  padding: 20px 0px
  position: relative
  width: 372px

.section-14
  align-items: center
  align-self: stretch
  display: flex
  flex-direction: column
  height: 353px
  justify-content: center
  margin-bottom: -16.00px
  padding: 20px 0px
  position: relative
  width: 100%

.header-5
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 80px
  justify-content: center
  margin-top: -18.00px
  position: relative
  width: 100%

.upraveno_logo-1-1-7
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.menu-1
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.nav
  border-radius: 5px
  height: 240px
  margin-bottom: -18.00px
  overflow: hidden
  position: relative
  width: 131px

.button-container-7
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px

#overlay-navigace-mobil
  align-items: center
  background-color: #ffffff00
  justify-content: flex-start
</style>
