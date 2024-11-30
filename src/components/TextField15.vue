<template>
  <div class="text-field-50">
    <div class="text-field-51">
      <div class="state-layer-28">
        <div class="content-25"><input-text-container4 /></div>
        <icon-button22 />
      </div>
    </div>
    <img class="active-indicator-21" :src="activeIndicator" alt="Active indicator" /><supporting-text3 />
  </div>
</template>

<script>
import InputTextContainer4 from "./InputTextContainer4";
import IconButton22 from "./IconButton22";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField15",
  components: {
    InputTextContainer4,
    IconButton22,
    SupportingText3,
  },
  props: ["activeIndicator"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-50,
.text-field-52,
.text-field-54
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

.text-field-51,
.text-field-53,
.text-field-55
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

.state-layer-28,
.state-layer-29,
.state-layer-30
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-25,
.content-26,
.content-27
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

.active-indicator-21,
.active-indicator-22,
.active-indicator-23
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
