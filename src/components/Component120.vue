<template>
  <router-link to="/kontakt-3">
    <div class="button-32">
      <div class="kontakt-8 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component120",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-32
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-8
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
