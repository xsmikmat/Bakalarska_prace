<template>
  <div class="item-7">
    <div class="frame-427318906-4">
      <div class="title-27 roboto-normal-black-20px">{{ title }}</div>
    </div>
    <p class="subtitle-7 roboto-medium-black-28px" v-html="subtitle"></p>
  </div>
</template>

<script>
export default {
  name: "Item2",
  props: ["title", "subtitle"],
};
</script>

<style lang="sass">
.item-7
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

.frame-427318906-4
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-27
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-7
  align-self: stretch
  letter-spacing: 0
  line-height: 36px
  position: relative
  text-align: center
</style>
