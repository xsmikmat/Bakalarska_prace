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
        <div class="list-7">
          <div class="container-17">
            <h1 class="title-19 roboto-bold-black-40px">{{ title1 }}</h1>
          </div>
          <div class="list-8">
            <div class="row-1">
              <item32
                :title="item321Props.title"
                :subtitle="item321Props.subtitle"
                :frameProps="item321Props.frameProps"
              />
              <item32
                :title="item322Props.title"
                :subtitle="item322Props.subtitle"
                :frameProps="item322Props.frameProps"
              />
              <item32
                :title="item323Props.title"
                :subtitle="item323Props.subtitle"
                :frameProps="item323Props.frameProps"
              />
            </div>
          </div>
          <img
            class="vector-200-1"
            src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/vector-200.svg"
            alt="Vector 200"
          />
        </div>
        <div class="list-9">
          <div class="title-20 roboto-bold-black-40px">{{ title2 }}</div>
          <div class="container-18">
            <item42 :title="item421Props.title" :subtitle="item421Props.subtitle" />
            <item42 :title="item422Props.title" :subtitle="item422Props.subtitle" :className="item422Props.className" />
            <item42 :title="item423Props.title" :subtitle="item423Props.subtitle" :className="item423Props.className" />
          </div>
          <div class="list-10">
            <div class="row-2">
              <item42
                :title="item424Props.title"
                :subtitle="item424Props.subtitle"
                :className="item424Props.className"
              />
              <item42
                :title="item425Props.title"
                :subtitle="item425Props.subtitle"
                :className="item425Props.className"
              />
              <item42
                :title="item426Props.title"
                :subtitle="item426Props.subtitle"
                :className="item426Props.className"
              />
            </div>
          </div>
        </div>
        <div class="section-23">
          <div class="map-container-1"></div>
        </div>
        <footer class="footer-7">
          <img class="upraveno_logo-1-1-15" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container />
          <div class="component-1-7">
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
import Item32 from "./Item32";
import Item42 from "./Item42";
import Container from "./Container";
export default {
  name: "Kontakt2",
  components: {
    Item32,
    Item42,
    Container
  },
  props: [
    "upraveno_Logo111",
    "penzionVSrdciEskKanady",
    "title1",
    "title2",
    "upraveno_Logo112",
    "item321Props",
    "item322Props",
    "item323Props",
    "item421Props",
    "item422Props",
    "item423Props",
    "item424Props",
    "item425Props",
    "item426Props"
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.kontakt-2-1
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1775px
  overflow: hidden
  width: 1512px

.page-1
  align-items: flex-end
  background-color: $white
  display: flex
  flex-direction: column
  position: relative
  width: 1512px

.upraveno_logo-1-1-14
  cursor: pointer
  height: 109px
  margin-bottom: -36.50px
  margin-left: -24.00px
  margin-top: -36.50px
  object-fit: cover
  position: relative
  width: 153px

.penzion-v-srdci-esk-kanady-2
  color: $black
  font-weight: 400
  height: 91px
  line-height: 44px
  margin-bottom: -26.50px
  margin-top: -28.50px
  position: relative
  text-align: center
  width: 454px

.navigace-5
  border-radius: 5px
  height: 84px
  margin-bottom: -24.00px
  margin-right: -24.00px
  margin-top: -24.00px
  overflow: hidden
  position: relative
  width: 473px

.button-container-13
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.list-7
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  overflow: hidden
  padding: 20px 80px
  position: relative
  width: 100%

.container-17
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-19
  letter-spacing: 0
  line-height: 48px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 520px

.list-8
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 100%

.row-1
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 100%

.vector-200-1
  height: 1px
  left: 0
  object-fit: cover
  position: absolute
  top: 336px
  width: 1512px

.list-9
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 60px 60px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.title-20
  letter-spacing: 0
  line-height: 48px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 1144px

.container-18
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  height: 484px
  position: relative

.list-10
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 484px
  justify-content: center
  position: relative

.row-2
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 40px
  height: 477px
  margin-left: -4.00px
  margin-right: -4.00px
  position: relative
  width: 650px

.section-23
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 60px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.map-container-1
  align-self: stretch
  height: 300px
  position: relative
  width: 100%

.footer-7
  align-items: center
  background-color: transparent
  display: flex
  gap: 60px
  height: 313px
  justify-content: center
  padding: 60px 170px
  position: relative
  width: 1504px

.upraveno_logo-1-1-15
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.component-1-7
  border-radius: 5px
  height: 308px
  margin-bottom: -57.50px
  margin-top: -57.50px
  overflow: hidden
  position: relative
  width: 260px

.button-container-14
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
