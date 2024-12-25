<template>
      <div class="screen">
        <navigace_final/>
        <h1 class="heading-1">Kontaktní informace</h1>
        <div class="list-7">
            <div class="row-kontakt1">
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
        <div class="heading-1">Důležité informace</div>
        <div class="list-7">
            <div class="container-18">
              <item42 :title="item421Props.title"
                      :subtitle="item421Props.subtitle"
                      :className="item421Props.className"/>
              <item42 :title="item422Props.title"
                      :subtitle="item422Props.subtitle"
                      :className="item422Props.className"/>
              <item42 :title="item423Props.title"
                      :subtitle="item423Props.subtitle"
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
        <footer-final/>
      </div>
</template>

<script>
import Item32 from "../components/Item32.vue";
import Item42 from "../components/Item42.vue";
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";
export default {
  name: "Kontakt",
  components: {
    FooterFinal,
    Navigace_final,
    Item32,
    Item42,
  },
  props: [
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
  display: flex
  flex: 0 0 auto
  flex-direction: row
  gap: 20px
  justify-content: center
  overflow: hidden
  padding: 20px 80px
  position: relative
  width: 100%

.list-kontakt1
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 100%

.row-kontakt1
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
  display: flex
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%
  padding: 0px 60px

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

@media (max-width: 480px)
  .row-kontakt1
    flex-direction: column
    gap: 20px
  .list-7
    padding: 20px 20px
    flex-direction: column
  .container-18
    padding: 0px 20px
</style>
