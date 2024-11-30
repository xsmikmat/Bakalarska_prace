<template>
  <div class="text-field-62">
    <div class="text-field-63">
      <div class="state-layer-34">
        <div class="content-31"><input-text-container6 /></div>
        <icon-button22 />
      </div>
    </div>
    <img class="active-indicator-27" :src="activeIndicator" alt="Active indicator" /><supporting-text3 />
  </div>
</template>

<script>
import InputTextContainer6 from "./InputTextContainer6";
import IconButton22 from "./IconButton22";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField17",
  components: {
    InputTextContainer6,
    IconButton22,
    SupportingText3,
  },
  props: ["activeIndicator"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-62,
.text-field-64,
.text-field-66
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

.text-field-63,
.text-field-65,
.text-field-67
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

.state-layer-34,
.state-layer-35,
.state-layer-36
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-31,
.content-32,
.content-33
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

.active-indicator-27,
.active-indicator-28,
.active-indicator-29
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
