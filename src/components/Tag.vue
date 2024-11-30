<template>
  <div :class="[`tag`, className || ``]"><div class="text roboto-medium-black-12px">Child bed available</div></div>
</template>

<script>
export default {
  name: "Tag",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.tag
  align-items: center
  background-color: $black-3
  border-radius: 6px 0px 6px 0px
  display: inline-flex
  flex-direction: column
  justify-content: center
  left: 15px
  padding: 4px 8px
  position: absolute
  top: 0

.text
  letter-spacing: 0
  line-height: 16px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.tag.tag-1,
.tag.tag-2
  left: 0
</style>
