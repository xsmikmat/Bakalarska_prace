<template>
  <router-link to="/fotogalerie-2">
    <div class="button-93">
      <div class="fotogalerie-22 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Navigace43",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-93
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-22
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
