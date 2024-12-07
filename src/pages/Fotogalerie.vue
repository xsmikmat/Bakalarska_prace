<template>
  <div class="screen">
    <navigace_final />
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
        <footer-final />
  </div>

</template>

<script>
import Contents from "./Contents";
import Container from "./Container";
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";
export default {
  name: "Fotogalerie",
  components: {
    FooterFinal,
    Navigace_final,
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
</style>
