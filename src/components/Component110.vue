<template>
  <router-link to="/kontakt-1">
    <div class="button-14">
      <div class="kontakt-3 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component110",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-14
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-3
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
