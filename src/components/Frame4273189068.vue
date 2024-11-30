<template>
  <div :class="[`frame-427318906-17-1`, className || ``]">
    <div class="title-76 subtext">{{ title }}</div>
    <p class="subtitle-24 text">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: "Frame4273189068",
  props: ["title", "subtitle", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.frame-427318906-17-1
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 8px
  position: relative

.title-76
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative

.subtitle-24
  -webkit-box-orient: vertical
  -webkit-line-clamp: 3
  align-self: stretch
  color: $gray
  display: -webkit-box
  font-weight: 400
  height: 48px
  line-height: 15px
  overflow: hidden
  position: relative
  text-overflow: ellipsis

.frame-427318906-17-1.frame-427318906-17 .subtitle-24
  -webkit-box-orient: unset
  -webkit-line-clamp: unset
  display: unset
  height: unset
  overflow: unset
  text-overflow: unset
</style>
