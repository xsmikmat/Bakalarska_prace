<template>
  <router-link to="/fotogalerie-3">
    <div class="button-65">
      <div class="fotogalerie-15 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component133",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-65
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-15
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
