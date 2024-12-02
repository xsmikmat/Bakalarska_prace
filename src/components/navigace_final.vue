<template>
  <div class="header">
    <router-link to="/"
    ><img class="logo" :src="upraveno_Logo112" alt="logo"/></router-link>
    <p class="heading-2 valign-text-middle nav-header">{{ penzionVSrdciEskKanady }}</p>
    <div class="navigace">
      <div class="button-nav-container">
        <router-link to="/o-ubytovani-3">
          <div class="button-nav"><div class="text-nav text">O ubytování</div></div></router-link>
        <router-link to="/okoli-2">
          <div class="button-nav"><div class="text-nav text">Okolí</div></div></router-link>
        <router-link to="/fotogalerie-1">
          <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div></router-link>
        <router-link to="/rezervace-3">
          <div class="property-1-button-23">
            <div class="rezervace-nav-text fredoka-semi-bold-surf-16px">Rezervace</div>
          </div></router-link>
        <router-link to="/kontakt-2">
          <div class="button-nav"><div class="text-nav text">Kontakt</div></div></router-link>
      </div>
      <img class="menu-1" src="../../img/icon_burger.png" alt="menu" @click="toggleActive" />
      <div class="button-container-9" :class="{ 'active': active }" v-if="active">
        <router-link to="/o-ubytovani-3">
          <div class="button-nav"><div class="text-nav text">O ubytování</div></div>
        </router-link>
        <router-link to="/okoli-2">
          <div class="button-nav"><div class="text-nav text">Okolí</div></div>
        </router-link>
        <router-link to="/fotogalerie-1">
          <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div>
        </router-link>
        <router-link to="/rezervace-3">
          <div class="button-nav"><div class="text-nav text">Rezervace</div></div>
        </router-link>
        <router-link to="/kontakt-2">
          <div class="button-nav"><div class="text-nav text">Kontakt</div></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: "navigace_final",
  components: {

  },
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
  overflow: hidden
  position: relative

.header
  align-items: center
  align-self: stretch
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

.nav-header
  color: $black
  font-weight: 400
  height: 91px
  line-height: 44px
  margin-bottom: -26.50px
  margin-top: -28.50px
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

.property-1-button-23,
.property-1-button-24
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

.rezervace-nav-text
  letter-spacing: 0
  line-height: normal
  margin-left: -13.50px
  margin-right: -13.50px
  margin-top: -0.50px
  position: relative
  white-space: nowrap
  width: fit-content

@media screen and (max-width: 991px)

  .navigace
    display: none !important
  .nav-header
    display: none
  .menu-1
    display: flex !important

@media screen and (min-width: 990px)
  .menu-1
    display: none
  .navigace
    display: flex

.menu-1
  cursor: pointer
  height: 24px
  position: relative
  width: 24px
</style>