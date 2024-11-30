<template>
  <div class="contents-2">
    <container32 :title="container3Props.title" />
    <x-section
      :imageContainer21Props="xSectionProps.imageContainer21Props"
      :imageContainer22Props="xSectionProps.imageContainer22Props"
      :imageContainer23Props="xSectionProps.imageContainer23Props"
      :imageContainer24Props="xSectionProps.imageContainer24Props"
    />
  </div>
</template>

<script>
import Container32 from "./Container32";
import XSection from "./XSection";
export default {
  name: "Contents2",
  components: {
    Container32,
    XSection,
  },
  props: ["container3Props", "xSectionProps"],
};
</script>

<style lang="sass">
.contents-2
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%
</style>
