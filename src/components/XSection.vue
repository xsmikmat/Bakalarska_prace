<template>
  <div class="section-8">
    <image-container2 :src="imageContainer21Props.src" />
    <image-container2 :src="imageContainer22Props.src" />
    <image-container2 :src="imageContainer23Props.src" />
    <image-container2 :src="imageContainer24Props.src" />
  </div>
</template>

<script>
import ImageContainer2 from "./ImageContainer2";
export default {
  name: "XSection",
  components: {
    ImageContainer2,
  },
  props: ["imageContainer21Props", "imageContainer22Props", "imageContainer23Props", "imageContainer24Props"],
};
</script>

<style lang="sass">
.section-8
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 40px 40px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%
</style>
