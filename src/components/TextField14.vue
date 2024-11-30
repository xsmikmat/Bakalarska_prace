<template>
  <div class="text-field-44">
    <div class="text-field-45">
      <div class="state-layer-25">
        <div class="content-22"><input-text-container3 /></div>
        <icon-button22 />
      </div>
    </div>
    <img class="active-indicator-18" :src="activeIndicator" alt="Active indicator" /><supporting-text3 />
  </div>
</template>

<script>
import InputTextContainer3 from "./InputTextContainer3";
import IconButton22 from "./IconButton22";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField14",
  components: {
    InputTextContainer3,
    IconButton22,
    SupportingText3,
  },
  props: ["activeIndicator"],
};
</script>

<style lang="sass">
@import '../../variables.sass'

.text-field-44,
.text-field-46,
.text-field-48
  align-items: flex-start
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 49px
  position: relative
  width: 497px

.text-field-45,
.text-field-47,
.text-field-49
  align-items: flex-start
  align-self: stretch
  background-color: $white
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 10px
  position: relative
  width: 100%

.state-layer-25,
.state-layer-26,
.state-layer-27
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-22,
.content-23,
.content-24
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 48px
  justify-content: center
  margin-bottom: -9.00px
  padding: 4px 0px
  position: relative

.active-indicator-18,
.active-indicator-19,
.active-indicator-20
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
