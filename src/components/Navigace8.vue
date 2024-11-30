<template>
  <router-link to="/fotogalerie-2">
    <div class="button-17">
      <div class="fotogalerie-4 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Navigace8",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-17
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-4
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
