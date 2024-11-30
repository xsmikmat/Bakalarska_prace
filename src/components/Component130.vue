<template>
  <router-link to="/kontakt-1">
    <div class="button-58">
      <div class="kontakt-15 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component130",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-58
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-15
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
