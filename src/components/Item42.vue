<template>
  <div :class="[`item-3`, className || ``]">
    <div class="kontakt2-container">
      <div class="title-21 text">{{ title }}</div>
    </div>
    <p class="subtext kontakt2" v-html="subtitle"></p>
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
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 60px
  justify-content: center
  padding: 12px 0px
  position: relative
  align-self: stretch
  width: 100%

.kontakt2-container
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%
.kontakt2
  line-height: 24px
  position: relative
  text-align: center

@media (max-width: 480px)
  .item-3
    gap: 30px
  .kontakt2-container
    gap: 4px
  .title-21
    font-weight: bold !important
</style>
