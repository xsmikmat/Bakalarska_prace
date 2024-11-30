<template>
  <router-link to="/fotogalerie-2">
    <div class="button-81">
      <div class="fotogalerie-19 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Navigace38",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-81
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-19
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
