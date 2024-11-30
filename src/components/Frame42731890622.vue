<template>
  <div class="frame-427318906-19">
    <div class="title-81 roboto-normal-black-20px">{{ title }}</div>
    <div class="subtitle-27 roboto-normal-black-16px-2">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame42731890622",
  props: ["title", "subtitle"],
};
</script>

<style lang="sass">
.frame-427318906-19
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-81
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-27
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative
  text-align: center
</style>
