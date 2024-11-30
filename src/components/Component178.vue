<template>
  <router-link to="/fotogalerie-1">
    <div class="button-137">
      <div class="fotogalerie-33 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component178",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-137
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-33
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
