<template>
  <div class="text-field-16">
    <div class="text-field-17">
      <div class="state-layer-8">
        <div class="content-8"><input-text-container5 /></div>
        <icon-button22 :className="iconButton22Props.className" />
      </div>
    </div>
    <img class="active-indicator-4" :src="activeIndicator" alt="Active indicator" /><supporting-text
      :className="iconButton22Props2.className"
    />
  </div>
</template>

<script>
import InputTextContainer5 from "./InputTextContainer5";
import IconButton22 from "./IconButton22";
import SupportingText from "./SupportingText";
export default {
  name: "TextField7",
  components: {
    InputTextContainer5,
    IconButton22,
    SupportingText,
  },
  props: ["activeIndicator", "iconButton22Props", "iconButton22Props2"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-16
  align-items: flex-start
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 50px
  position: relative
  width: 318px

.text-field-17
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

.state-layer-8
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-8
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 48px
  justify-content: center
  margin-bottom: -8.00px
  padding: 4px 0px
  position: relative

.active-indicator-4
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
