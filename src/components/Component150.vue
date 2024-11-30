<template>
  <router-link to="/kontakt-1">
    <div class="button-90">
      <div class="kontakt-23 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component150",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-90
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-23
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
