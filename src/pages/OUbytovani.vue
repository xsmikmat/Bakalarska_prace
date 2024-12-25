<template>
  <div class="screen">
    <navigace_final/>
    <div class="okoli-uvod">
      <div class="heading-text-div">
        <h1 class="heading-1">O ubytování</h1>
        <p class="description-18 subtext">Zažijte pohodlnou a krásnou dovolenou</p>
      </div>
      <div class="image-container-okoli"><img class="image-okoli" src="../../img/s-obrazem-1.png" alt="image 1"/></div>
    </div>
    <div class="page-item-1">
      <div class="okoli-uvod">
        <div class="image-container-okoli">
          <img class="image-ubytko1" src="../../img/s-obrazem-1.png" alt="image 2"/>
        </div>
        <div class="oubytovani-fotogalerie">
          <div class="heading-2">Prohlédněte si naše pokoje</div>
          <div class="image-container-okoli">
            <img class="image-ubytko2" src="../../img/u-tresne-1.png" alt="image 2"/>
          </div>
          <router-link to="/fotogalerie">
            <div class="green-button subtext">Fotogalerie</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="contents-6">
      <div class="container-30">
        <div class="heading-text-div">
          <div class="heading-1">Co nabízíme dál</div>
          <p class="description-18 subtext">Relax a nejrůznější aktivity</p>
        </div>
        <img class="image-ubytko2" style="width: 35%" src="../../img/img-2624-2.png" alt="IMG_2624 1"/>
      </div>
      <div class="row-9">
        <div class="article-5">
          <div class="frame"><img class="icon-for" src="../../img/img-2621-1.png" alt="icon-for-email 1"/></div>
          <div class="frame-ubytko-text">
            <div class="description-19 subtext">Venkovní aktivity</div>
            <p class="subtitle-11 text">Volejbal, stolní tenis, kolárna, trampolína</p>
          </div>
        </div>
        <div class="article-5">
          <div class="frame"><img class="icon-for" src="../../img/img-2621-1.png" alt="icon-for-email 1"/></div>
          <div class="frame-ubytko-text">
            <div class="description-19 subtext">Společné prostory</div>
            <p class="subtitle-11 text">1 velká společenská místnost s kuchní, 1 místnost s kobercem</p>
          </div>
        </div>
        <div class="article-5">
          <div class="frame"><img class="icon-for" src="../../img/img-2621-1.png" alt="icon-for-email 1"/></div>
          <div class="frame-ubytko-text">
            <div class="description-19 subtext">Vnitřní aktivity a vybavení</div>
            <p class="subtitle-11 text">Šipky, sauna, kulečník, výčep, kávovar</p>
          </div>
        </div>
      </div>
    </div>
    <footer-final/>
  </div>
</template>

<script>
import ImageContainer5 from "../components/ImageContainer5.vue";
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";

export default {
  name: "OUbytovani",
  components: {
    FooterFinal,
    ImageContainer5,
    Navigace_final,
  },
  props: [
    "upraveno_Logo111",
    "penzionVSrdciEskKanady",
    "title1",
    "title2",
    "description",
    "upraveno_Logo112",
    "container4Props",
    "imageContainer51Props",
    "imageContainer52Props",
    "imageContainer53Props",
    "component1Variant6Props",
    "imageContainer4Props",
    "frame4273189062Props",
    "xArticle21Props",
    "xArticle22Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.heading-text-div
  align-items: center
  display: flex
  flex-direction: column
  gap: 20px
  justify-content: center
  position: relative
  padding: 20px 80px

.description-18, .description-19
  align-self: stretch
  color: $gray
  font-weight: 600
  position: relative
  text-align: center

.oubytovani-fotogalerie
  align-items: center
  display: flex
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  height: 400px

.image-ubytko1
  height: 400px
  width: 100%
  object-fit: cover
  position: relative

.image-ubytko2
  width: 100%
  object-fit: cover
  position: relative
  height: 250px

.image-container-22
  display: flex
  height: 250px
  width: 25%

.contents-6
  align-items: center
  display: flex
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.container-30
  align-items: center
  display: flex
  gap: 60px
  justify-content: space-between
  width: 100%
.row-9
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 100%

.frame-ubytko-text
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 8px
  position: relative

.subtitle-11
  color: $gray

.frame
  background-color: $black-3
  border-radius: 50px
  width: 100px

.icon-for
  height: 100px
  width: 100px

.article-5
  align-items: flex-start
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 1
  flex-grow: 1
  gap: 16px
  justify-content: center
  padding: 16px
  position: relative

@media (max-width: 480px)
  .image-ubytko1
    display: none
  .oubytovani-fotogalerie
    height: fit-content
  .image-ubytko2
    height: 200px
    width: 100% !important
  .container-30
    flex-direction: column
  .article-5
    gap: 8px
    padding: 8px
  .row-9
    flex-direction: column
    gap: 8px
    padding: 8px
    width: 100%
  .contents-6
    padding: 20px
    width: 100%
  .heading-text-div
    padding: 8px
    width: 100%
    gap: 8px
  .container-30
    gap: 8px
    padding: 8px
    width: 100%
  .description-19
   font-weight: bold !important

</style>
