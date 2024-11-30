<template>
  <div :class="[`text-field-32`, className || ``]">
    <div class="text-field-33">
      <div class="state-layer-19">
        <div class="content-16"><input-text-container /></div>
        <icon-button22 />
      </div>
    </div>
    <img
      class="active-indicator-12"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673db85e76e2d7568d4b007c/img/active-indicator-78.svg"
      alt="Active indicator"
    />
    <supporting-text3 />
  </div>
</template>

<script>
import InputTextContainer from "./InputTextContainer";
import IconButton22 from "./IconButton22";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField22",
  components: {
    InputTextContainer,
    IconButton22,
    SupportingText3,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-32
  align-items: flex-start
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 49px
  margin-top: -1.00px
  position: relative
  width: 497px

.text-field-33
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

.state-layer-19
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-16
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

.active-indicator-12
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%

.text-field-32.text-field-34
  margin-top: unset
</style>
