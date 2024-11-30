<template>
  <router-link to="/fotogalerie-1">
    <div class="button-163">
      <div class="fotogalerie-39 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component1108",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-163
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-39
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
