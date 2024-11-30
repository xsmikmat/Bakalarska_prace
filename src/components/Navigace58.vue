<template>
  <router-link to="/fotogalerie-2">
    <div class="button-129">
      <div class="fotogalerie-31 text">{{ fotogalerie }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Navigace58",
  props: ["fotogalerie"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-129
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.fotogalerie-31
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
