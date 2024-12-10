<template>
  <div class="screen">
    <navigace_final />
    <div class="contents">
      <div class="container">
        <div class="title heading-2">Apartmán U Třešně</div>
      </div>
      <div class="section-1">
        <div class="image-container-foto">
          <img
            class="foto-img"
            src="../../img/u-tresne-02-1.png"
            alt="U Tresne 02 1"
          />
        </div>
        <div class="image-container-foto">
          <img
            class="foto-img"
            src="../../img/u-tresne-1.png"
            alt="U Tresne 02 1"
          />
        </div>
        <div class="image-container-foto">
          <img
            class="foto-img"
            src="../../img/u-tresne05-1.png"
            alt="U Tresne 02 1"
          />
        </div>
        <div class="image-container-foto">
          <img
            class="foto-img"
            src="../../img/u-tresne-04-1.png"
            alt="U Tresne 02 1"
          />
        </div>
      </div>
    </div>
    <footer-final />
  </div>
</template>

<script>
import Contents from "../components/Contents.vue";
import Container from "../components/Container.vue";
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";
export default {
  name: "Fotogalerie",
  components: {
    FooterFinal,
    Navigace_final,
    Contents,
    Container,
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
  mounted() {
    console.log(this.contents1Props);
  },
};
</script>

<style lang="sass">
@import '../../variables'

.button-container-footer
  align-items: flex-start
  display: flex
  flex-direction: column
  position: relative
  top: 20px
  padding-bottom: 60px
  height: fit-content
  overflow: hidden
  padding: 80px
  width: fit-content

.footer
  align-items: center
  background-color: transparent
  display: flex
  justify-content: center
  gap: 60px
  padding: 20px 80px
  position: relative
  width: 100%

.container-footer
  align-items: flex-start
  display: flex
  flex-direction: column
  position: relative

.description-footer
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative

@media (max-width: 468px)
  .footer
    flex-direction: column
    height: 100%
    width: 100%
    gap: 0px
  .upraveno_logo
    display: none
  .button-container-footer
    align-items: center
    justify-content: center
    height: fit-content
    justify-content: center
    overflow: hidden
    position: relative
    width: fit-content
    padding: 0px
  .container-footer
    align-items: center
    height: fit-content
    justify-content: center
    overflow: hidden
    position: relative
    width: fit-content
</style>
