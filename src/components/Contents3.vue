<template>
  <div class="contents-4">
    <div class="container-13">
      <div class="title-16 heading-2">Apartmán <br />S obrazem</div>
      <p class="description-14 text">Discover Apartment 1 with these beautiful photos.</p>
    </div>
    <x-section2
      :className="xSection2Props.className"
      :imageContainer31Props="xSection2Props.imageContainer31Props"
      :imageContainer32Props="xSection2Props.imageContainer32Props"
      :imageContainer33Props="xSection2Props.imageContainer33Props"
      :imageContainer34Props="xSection2Props.imageContainer34Props"
    />
  </div>
</template>

<script>
import XSection2 from "./XSection2";
export default {
  name: "Contents3",
  components: {
    XSection2,
  },
  props: ["xSection2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.contents-4
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px 0px
  position: relative
  width: 100%

.container-13
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-16
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center

.description-14
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 15px
  position: relative
  text-align: center
</style>
