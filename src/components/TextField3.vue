<template>
  <div class="text-field-8">
    <div class="text-field-9">
      <div class="state-layer-4">
        <div class="content-4"><input-text-container /></div>
        <icon-button22 />
      </div>
    </div>
    <img class="active-indicator" :src="activeIndicator" alt="Active indicator" /><supporting-text />
  </div>
</template>

<script>
import InputTextContainer from "./InputTextContainer";
import IconButton22 from "./IconButton22";
import SupportingText from "./SupportingText";
export default {
  name: "TextField3",
  components: {
    InputTextContainer,
    IconButton22,
    SupportingText,
  },
  props: ["activeIndicator"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-8
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
  width: 318px

.text-field-9
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

.state-layer-4
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-4
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

.active-indicator
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
