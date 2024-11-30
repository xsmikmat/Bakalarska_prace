<template>
  <router-link to="/fotogalerie-3">
    <div class="button-13">
      <div class="fotogalerie-3 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component18",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables.sass'

.button-13
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-3
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
