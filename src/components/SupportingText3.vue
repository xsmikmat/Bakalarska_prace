<template>
  <div :class="[`supporting-text-4`, className || ``]">
    <div class="supporting-text-5 m3bodysmall">Povinné pole</div>
  </div>
</template>

<script>
export default {
  name: "SupportingText3",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.supporting-text-4
  align-items: flex-start
  display: flex
  gap: 10px
  height: 20px
  left: 0
  padding: 4px 16px 0px
  position: absolute
  top: 47px
  width: 495px

.supporting-text-5
  color: $gravel
  flex: 1
  font-weight: 400
  line-height: 16px
  margin-top: -1.00px
  position: relative

.supporting-text-4.supporting-text-10,
.supporting-text-4.supporting-text-11,
.supporting-text-4.supporting-text-12
  align-items: flex-start
  display: flex
  gap: 10px
  height: 20px
  left: 0
  padding: 4px 16px 0px
  position: absolute
  top: 48px
  width: 495px
</style>
