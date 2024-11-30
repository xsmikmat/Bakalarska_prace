<template>
  <div class="text-field-68">
    <div class="text-field-69">
      <div class="state-layer-37">
        <div class="content-34"><input-text-container7 /></div>
        <icon-button22 />
      </div>
    </div>
    <img class="active-indicator-30" :src="activeIndicator" alt="Active indicator" /><supporting-text3 />
  </div>
</template>

<script>
import InputTextContainer7 from "./InputTextContainer7";
import IconButton22 from "./IconButton22";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField18",
  components: {
    InputTextContainer7,
    IconButton22,
    SupportingText3,
  },
  props: ["activeIndicator"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-68,
.text-field-70,
.text-field-72
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

.text-field-69,
.text-field-71,
.text-field-73
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

.state-layer-37,
.state-layer-38,
.state-layer-39
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-34,
.content-35,
.content-36
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

.active-indicator-30,
.active-indicator-31,
.active-indicator-32
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
