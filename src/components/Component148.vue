<template>
  <router-link to="/fotogalerie-3">
    <div class="button-89">
      <div class="fotogalerie-21 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component148",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-89
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-21
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
