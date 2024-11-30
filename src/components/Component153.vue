<template>
  <router-link to="/fotogalerie-2">
    <div class="button-97">
      <div class="fotogalerie-23 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component153",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-97
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-23
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
