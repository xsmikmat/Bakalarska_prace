<template>
  <div class="item">
    <div class="frame-427318906">
      <div class="title-18 roboto-normal-black-20px">{{ title }}</div>
    </div>
    <div class="subtitle-3 text" v-html="subtitle"></div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["title", "subtitle"],
};
</script>

<style lang="sass">
@import '../../variables'

.item
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative
  width: 100%

.frame-427318906
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-18
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-3
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 15px
  position: relative
  text-align: center
</style>
