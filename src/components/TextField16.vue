<template>
  <div class="text-field-56">
    <div class="text-field-57">
      <div class="state-layer-31">
        <div class="content-28"><input-text-container5 /></div>
        <icon-button22 :className="iconButton22Props.className" />
      </div>
    </div>
    <img class="active-indicator-24" :src="activeIndicator" alt="Active indicator" /><supporting-text3
      :className="supportingText3Props.className"
    />
  </div>
</template>

<script>
import InputTextContainer5 from "./InputTextContainer5";
import IconButton22 from "./IconButton22";
import SupportingText3 from "./SupportingText3";
export default {
  name: "TextField16",
  components: {
    InputTextContainer5,
    IconButton22,
    SupportingText3,
  },
  props: ["activeIndicator", "iconButton22Props", "supportingText3Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-56,
.text-field-58,
.text-field-60
  align-items: flex-start
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $fun-green
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 50px
  position: relative
  width: 497px

.text-field-57,
.text-field-59,
.text-field-61
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

.state-layer-31,
.state-layer-32,
.state-layer-33
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex: 1
  flex-grow: 1
  padding: 4px 0px 4px 16px
  position: relative
  width: 100%

.content-28,
.content-29,
.content-30
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

.active-indicator-24,
.active-indicator-25,
.active-indicator-26
  align-self: stretch
  height: 1px
  object-fit: cover
  position: relative
  width: 100%
</style>
