<template>
  <div class="container-center-horizontal">
    <div class="screen">
      <div class="page">
        <navigace_final/>
        <div class="list-7">
          <div class="container-17">
            <h1 class="heading-1">Kontaktní informace</h1>
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
        </div>
        <div class="list-9">
          <div class="title-20 heading-1">Důležité informace</div>
          <div class="kontakt-info2">
            <div class="container-18">
              <item42 :title="item421Props.title" :subtitle="item421Props.subtitle"/>
              <div class="item-3">
                  <div class="text ">Provozovatel</div>
                <p class="subtext">ŠMIKMÁTOR, s.r.o. <br>
                  Palackého 101<br>
                  612 00 Brno - Královo Pole<br>
                  Česká Republika</p>
              </div>
              <item42 :title="item422Props.title" :subtitle="item422Props.subtitle"
                      :className="item422Props.className"/>
              <item42 :title="item423Props.title" :subtitle="item423Props.subtitle"
                      :className="item423Props.className"/>
            </div>
              <div class="container-18">
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
        <footer-final/>
      </div>
    </div>
  </div>
</template>

<script>
import Item32 from "../components/Item32.vue";
import Item42 from "../components/Item42.vue";
import Container from "../components/Container.vue";
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";

export default {
  name: "Kontakt",
  components: {
    FooterFinal,
    Navigace_final,
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

.list-9
  align-items: center
  display: flex
  flex-direction: column
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 60px 60px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.container-18
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 24px
  height: 484px
  position: relative

.kontakt-info2
  display: flex
  flex-direction: row

.item-3
  align-items: center
  justify-content: center
  display: flex
  flex-direction: column
  gap: 8px
  position: relative

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
