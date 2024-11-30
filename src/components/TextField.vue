<template>
  <div :class="[`text-field-2`, className || ``]">
    <div class="text-field-3"><state-layer /></div>
  </div>
</template>

<script>
import StateLayer from "./StateLayer";
export default {
  name: "TextField",
  components: {
    StateLayer,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.text-field-2,
.text-field-2.text-field,
.text-field-2.text-field-1
  align-items: flex-start
  align-self: stretch
  border-radius: 4px 4px 0px 0px
  display: flex
  flex-direction: column
  height: 56px
  position: relative
  width: 100%

.text-field-3
  align-items: flex-start
  align-self: stretch
  border: 1px solid
  border-color: $surf
  border-radius: 4px
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 10px
  position: relative
  width: 100%

.text-field-2.text-field .text-field-3,
.text-field-2.text-field-1 .text-field-3
  border: 3px solid
</style>
