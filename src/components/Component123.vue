<template>
  <router-link to="/fotogalerie-1">
    <div class="button-51"><div class="fotogalerie-11 text">Fotogalerie</div></div></router-link
  >
</template>

<script>
export default {
  name: "Component123",
};
</script>

<style lang="sass">
@import '../../variables'

.button-51,
.button-52
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-11,
.fotogalerie-12
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
