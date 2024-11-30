<template>
  <div :class="[`supporting-text-3`, className || ``]">
    <div class="supporting-text-1 m3bodysmall">Povinné pole</div>
  </div>
</template>

<script>
export default {
  name: "SupportingText",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.supporting-text-3
  align-items: flex-start
  display: flex
  gap: 10px
  height: 20px
  left: 0
  padding: 4px 16px 0px
  position: absolute
  top: 47px
  width: 316px

.supporting-text-1
  color: $gravel
  flex: 1
  font-weight: 400
  line-height: 16px
  margin-top: -1.00px
  position: relative

.supporting-text-3.supporting-text-2
  align-items: flex-start
  display: flex
  gap: 10px
  height: 20px
  left: 0
  padding: 4px 16px 0px
  position: absolute
  top: 48px
  width: 316px
</style>
