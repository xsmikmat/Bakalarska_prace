<template>
  <div class="container-center-horizontal">
    <div class="screen">
      <div class="page">
        <div class="header">
          <router-link to="/"
          ><img class="logo" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
          /></router-link>
          <p class="nav-header valign-text-middle heading-2">{{ penzionVSrdciEskKanady }}</p>
          <div class="navigace">
            <div class="button-nav-container">
              <router-link to="/o-ubytovani-3">
                <div class="button-nav"><div class="text-nav text">O ubytování</div></div></router-link>
              <router-link to="/okoli-2">
                <div class="button-nav"><div class="text-nav text">Okolí</div></div></router-link>
              <router-link to="/fotogalerie-1">
                <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div></router-link>
              <router-link to="/rezervace">
                <div class="property-1-button-23">
                  <div class="rezervace-nav-text fredoka-semi-bold-surf-16px">Rezervace</div>
                </div></router-link>
              <router-link to="/kontakt-2">
                <div class="button-nav"><div class="text-nav text">Kontakt</div></div></router-link>
            </div>
          </div>
        </div>
        <contents
          :title="contents1Props.title"
          :imageContainer1Props="contents1Props.imageContainer1Props"
          :imageContainer2Props="contents1Props.imageContainer2Props"
          :imageContainer3Props="contents1Props.imageContainer3Props"
          :imageContainer4Props="contents1Props.imageContainer4Props"
        />
        <contents
          :title="contents2Props.title"
          :imageContainer1Props="contents2Props.imageContainer1Props"
          :imageContainer2Props="contents2Props.imageContainer2Props"
          :imageContainer3Props="contents2Props.imageContainer3Props"
          :imageContainer4Props="contents2Props.imageContainer4Props"
        />
        <contents
          :title="contents3Props.title"
          :imageContainer1Props="contents3Props.imageContainer1Props"
          :imageContainer2Props="contents3Props.imageContainer2Props"
          :imageContainer3Props="contents3Props.imageContainer3Props"
          :imageContainer4Props="contents3Props.imageContainer4Props"
        />
        <footer class="footer">
          <img class="upraveno_logo-1-1-1" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container />
          <div class="component-1">
            <div class="button-footer-container">
              <router-link to="/o-ubytovani-3">
                <div class="button-nav"><div class="text-nav text">O ubytování</div></div></router-link>
              <router-link to="/okoli-2">
                <div class="button-nav"><div class="text-nav text">Okolí</div></div></router-link>
              <router-link to="/fotogalerie-1">
                <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div></router-link>
              <router-link to="/rezervace">
                <div class="button-nav"><div class="text-nav text">Rezervace</div></div></router-link>
              <router-link to="/kontakt-2">
                <div class="button-nav"><div class="text-nav text">Kontakt</div></div></router-link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navigace from "./Navigace";
import Navigace2 from "./Navigace2";
import Navigace3 from "./Navigace3";
import Navigace4 from "./Navigace4";
import Navigace5 from "./Navigace5";
import Contents from "./Contents";
import Container from "./Container";
export default {
  name: "Fotogalerie",
  components: {
    Navigace,
    Navigace2,
    Navigace3,
    Navigace4,
    Navigace5,
    Contents,
    Container
  },
  props: [
    "upraveno_Logo111",
    "penzionVSrdciEskKanady",
    "upraveno_Logo112",
    "navigaceProps",
    "navigace2Props",
    "navigace3Props",
    "navigace4Props",
    "navigace5Props",
    "contents1Props",
    "contents2Props",
    "contents3Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.fotogalerie-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 4163px
  overflow: hidden
  width: 1512px

.section
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  position: relative
  width: 1512px

.header
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  gap: 160px
  height: 156px
  justify-content: center
  padding: 60px 170px
  position: relative
  width: 100%

.upraveno_logo-1-1
  cursor: pointer
  height: 109px
  margin-bottom: -36.50px
  margin-left: -114.00px
  margin-top: -36.50px
  object-fit: cover
  position: relative
  width: 153px

.penzion-v-srdci-esk-kanady
  color: $black
  font-weight: 400
  height: 91px
  line-height: 44px
  margin-bottom: -26.50px
  margin-top: -28.50px
  position: relative
  text-align: center
  width: 454px

.navigace
  border-radius: 5px
  height: 84px
  margin-bottom: -24.00px
  margin-right: -114.00px
  margin-top: -24.00px
  overflow: hidden
  position: relative
  width: 473px

.button-container
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.footer
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  gap: 60px
  height: 313px
  justify-content: center
  padding: 60px 170px
  position: relative
  width: 100%

.upraveno_logo-1-1-1
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.component-1
  border-radius: 5px
  height: 308px
  margin-bottom: -57.50px
  margin-top: -57.50px
  overflow: hidden
  position: relative
  width: 260px

.button-container-1
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
