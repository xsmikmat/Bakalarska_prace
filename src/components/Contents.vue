<template>
  <div class="contents">
    <div class="container">
      <div class="title heading-2">{{ title }}</div>
      <p class="description subtext">Discover Apartment 1 with these beautiful photos.</p>
    </div>
    <div class="section-1">
      <image-container :src="imageContainer1Props.src" />
      <image-container :src="imageContainer2Props.src" />
      <image-container :src="imageContainer3Props.src" />
      <image-container :src="imageContainer4Props.src" />
    </div>
  </div>
</template>

<script>
import ImageContainer from "./ImageContainer";
export default {
  name: "Contents",
  components: {
    ImageContainer,
  },
  props: ["title", "imageContainer1Props", "imageContainer2Props", "imageContainer3Props", "imageContainer4Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.contents
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 60px
  justify-content: center
  padding: 60px 170px
  position: relative
  width: 100%

.container
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 520px

.description
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center
  width: 520px

.section-1
  align-items: center
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 20px 20px
  justify-content: center
  margin-left: -143.00px
  margin-right: -143.00px
  padding: 60px 40px
  position: relative
  width: 1458px
</style>
