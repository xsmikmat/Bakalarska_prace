<template>
  <div :class="[`item-3`, className || ``]">
    <div class="frame-427318906-2">
      <div class="title-22 roboto-normal-black-20px">{{ title }}</div>
    </div>
    <p class="subtitle-5 roboto-medium-black-28px" v-html="subtitle"></p>
  </div>
</template>

<script>
export default {
  name: "Item42",
  props: ["title", "subtitle", "className"],
};
</script>

<style lang="sass">
.item-3
  align-items: center
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative
  width: 650px

.frame-427318906-2
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-22
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-5
  align-self: stretch
  letter-spacing: 0
  line-height: 36px
  position: relative
  text-align: center

.item-3.item-2
  align-self: stretch
  width: 100%
</style>
