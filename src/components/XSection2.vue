<template>
  <div :class="[`section-18`, className || ``]">
    <image-container3 :src="imageContainer31Props.src" />
    <image-container3 :src="imageContainer32Props.src" />
    <image-container3 :src="imageContainer33Props.src" />
    <image-container3 :src="imageContainer34Props.src" />
  </div>
</template>

<script>
import ImageContainer3 from "./ImageContainer3";
export default {
  name: "XSection2",
  components: {
    ImageContainer3,
  },
  props: [
    "className",
    "imageContainer31Props",
    "imageContainer32Props",
    "imageContainer33Props",
    "imageContainer34Props",
  ],
};
</script>

<style lang="sass">
.section-18
  align-items: center
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 20px 20px
  justify-content: center
  margin-left: -40.00px
  margin-right: -40.00px
  position: relative
  width: 332px

.section-18.list-5
  align-self: stretch
  margin-left: unset
  margin-right: unset
  width: 100%
</style>
