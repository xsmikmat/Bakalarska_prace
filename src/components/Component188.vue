<template>
  <router-link to="/fotogalerie-1">
    <div class="button-145">
      <div class="fotogalerie-35 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component188",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-145
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-35
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
