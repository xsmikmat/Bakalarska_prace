<template>
  <div class="header">
    <router-link to="/"
    ><img class="logo" src="../../img/upraveno-logo--1--1.png" alt="logo"/></router-link>
    <p class="heading-2 nav-header">Do České Kanady víza nepotřebujete</p>
    <div class="navigace">
      <div class="button-nav-container">
        <router-link to="/o-ubytovani">
          <div class="button-nav">
            <div class="text-nav text">O ubytování</div>
          </div>
        </router-link>
        <router-link to="/okoli">
          <div class="button-nav">
            <div class="text-nav text">Okolí</div>
          </div>
        </router-link>
        <router-link to="/fotogalerie">
          <div class="button-nav">
            <div class="text-nav text">Fotogalerie</div>
          </div>
        </router-link>
        <router-link to="/rezervace">
          <div class="rezervace-nav-button">
            <div class="rezervace-nav-text fredoka-semi-bold-surf-16px">Rezervace</div>
          </div>
        </router-link>
        <router-link to="/kontakt">
          <div class="button-nav">
            <div class="text-nav text">Kontakt</div>
          </div>
        </router-link>
      </div>
      <img class="menu-1" src="../../img/icon_burger.png" alt="menu" @click="toggleActive"/>
      <div class="button-container-9" :class="{ 'active': active }" v-if="active">
        <router-link to="/o-ubytovani">
          <div class="button-nav">
            <div class="text-nav text">O ubytování</div>
          </div>
        </router-link>
        <router-link to="/okoli">
          <div class="button-nav">
            <div class="text-nav text">Okolí</div>
          </div>
        </router-link>
        <router-link to="/fotogalerie">
          <div class="button-nav">
            <div class="text-nav text">Fotogalerie</div>
          </div>
        </router-link>
        <router-link to="/rezervace">
          <div class="button-nav">
            <div class="text-nav text">Rezervace</div>
          </div>
        </router-link>
        <router-link to="/kontakt">
          <div class="button-nav">
            <div class="text-nav text">Kontakt</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: "navigace_final",
  components: {},
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
    "loremIpsumDolorSi1",
    "rezervovat",
    "kontakt",
    "oPenzionuMikmtor",
    "upraveno_Logo112",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.logo
  cursor: pointer
  height: 109px
  margin-bottom: -36.50px
  margin-left: -24.00px
  margin-top: -36.50px
  object-fit: cover
  position: relative
  width: 153px

.navigace
  border-radius: 5px
  height: 84px
  margin-bottom: -24.00px
  margin-right: -24.00px
  margin-top: -24.00px
  position: relative

.menu-1
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.header
  align-items: center
  display: flex
  flex-direction: row
  gap: 160px
  height: 156px
  justify-content: center
  padding: 60px 80px
  position: relative

.button-nav-container
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  position: relative
  top: 20px
  width: 100%

.nav-header
  color: $black
  font-weight: 400
  position: relative
  text-align: center

.button-nav
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  padding: 13px 0

.text-nav
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap

.rezervace-nav-text
  letter-spacing: 0
  line-height: normal
  margin-left: -13.50px
  margin-right: -13.50px
  margin-top: -0.50px
  position: relative
  white-space: nowrap

.rezervace-nav-button
  align-items: center
  background-color: $fun-green
  border-radius: 10px
  cursor: pointer
  display: flex
  gap: 10px
  height: 40px
  justify-content: center
  overflow: hidden
  padding: 10px 25px
  position: relative
  width: 100px

@media (min-width: 480px)
  .navigace
    display: flex
  .menu-1
    display: none

@media (max-width: 480px)
  .button-nav-container
    display: none
  .nav-header
    display: none
  .menu-1
    display: flex
  .button-container-9
    align-items: center
    display: block
    gap: 21px
    left: 0 // Align it to the left edge
    background-color: $white // Add a background color for better visibility
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) // Add a slight shadow for distinction
    z-index: 10 // Ensure it appears above other elements
    width: fit-content
    padding: 50px 80px

</style>