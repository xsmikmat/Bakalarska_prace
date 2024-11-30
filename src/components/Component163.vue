<template>
  <router-link to="/fotogalerie-3">
    <div class="button-117">
      <div class="fotogalerie-28 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component163",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-117
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-28
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
