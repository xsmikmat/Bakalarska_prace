<template>
  <div class="text-field-74">
    <div class="text-field-75">
      <div class="state-layer-40">
        <div class="content-37"><input-text-container8 /></div>
        <icon-button22 />
      </div>
    </div>
    <img class="active-indicator-33" :src="activeIndicator" alt="Active indicator" /><supporting-text3 />
  </div>
</template>

<script>
import InputTextContainer8 from "./InputTextContainer8";
import IconButton22 from "./IconButton22";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField19",
  components: {
    InputTextContainer8,
    IconButton22,
    SupportingText3,
  },
  props: ["activeIndicator"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-74,
.text-field-76,
.text-field-78
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

.text-field-75,
.text-field-77,
.text-field-79
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

.state-layer-40,
.state-layer-41,
.state-layer-42
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-37,
.content-38,
.content-39
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

.active-indicator-33,
.active-indicator-34,
.active-indicator-35
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
