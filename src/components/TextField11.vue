<template>
  <div :class="[`text-field-24`, className || ``]">
    <div class="text-field-25">
      <div class="state-layer-12">
        <div class="content-12"><input-text-container9 :inputType="inputTextContainer9Props.inputType" /></div>
        <icon-button22 :className="iconButton22Props.className" />
      </div>
    </div>
    <img class="active-indicator-8" :src="activeIndicator" alt="Active indicator" />
  </div>
</template>

<script>
import InputTextContainer9 from "./InputTextContainer9";
import IconButton22 from "./IconButton22";
export default {
  name: "TextField11",
  components: {
    InputTextContainer9,
    IconButton22,
  },
  props: ["activeIndicator", "className", "inputTextContainer9Props", "iconButton22Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-24
  align-items: flex-start
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 49px
  position: relative
  width: 318px

.text-field-25
  align-items: flex-start
  align-self: stretch
  background-color: $white
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  gap: 10px
  height: 56px
  margin-bottom: -7.00px
  position: relative
  width: 100%

.state-layer-12
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-12
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 48px
  justify-content: center
  padding: 4px 0px
  position: relative

.active-indicator-8
  align-self: stretch
  height: 1px
  margin-bottom: -7.00px
  object-fit: cover
  position: relative
  width: 100%

.text-field-24.text-field-26,
.text-field-24.text-field-28,
.text-field-24.text-field-30
  width: 497px
</style>
