<template>
  <div class="text-field-38">
    <div class="text-field-39">
      <div class="state-layer-22">
        <div class="content-19"><input-text-container2 /></div>
        <icon-button22 />
      </div>
    </div>
    <img class="active-indicator-15" :src="activeIndicator" alt="Active indicator" /><supporting-text3 />
  </div>
</template>

<script>
import InputTextContainer2 from "./InputTextContainer2";
import IconButton22 from "./IconButton22";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField13",
  components: {
    InputTextContainer2,
    IconButton22,
    SupportingText3,
  },
  props: ["activeIndicator"],
};
</script>

<style lang="sass">
@import '../../variables.sass'

.text-field-38,
.text-field-40,
.text-field-42
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

.text-field-39,
.text-field-41,
.text-field-43
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

.state-layer-22,
.state-layer-23,
.state-layer-24
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-19,
.content-20,
.content-21
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

.active-indicator-15,
.active-indicator-16,
.active-indicator-17
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
