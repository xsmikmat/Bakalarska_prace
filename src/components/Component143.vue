<template>
  <router-link to="/fotogalerie-2">
    <div class="button-85">
      <div class="fotogalerie-20 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component143",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-85
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-20
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
