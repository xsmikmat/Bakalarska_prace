<template>
  <router-link to="/fotogalerie-1">
    <div class="button-125">
      <div class="fotogalerie-30 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component168",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-125
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-30
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
