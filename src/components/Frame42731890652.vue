<template>
  <div class="frame-427318906-12">
    <div class="title-50 roboto-normal-black-20px">{{ title }}</div>
    <div class="subtitle-15 roboto-normal-black-16px-2">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame42731890652",
  props: ["title", "subtitle"],
};
</script>

<style lang="sass">
.frame-427318906-12
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-50
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-15
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative
  text-align: center
</style>
