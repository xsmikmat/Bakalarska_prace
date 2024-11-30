<template>
  <router-link to="/kontakt-3">
    <div class="button-98">
      <div class="kontakt-25 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component155",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-98
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-25
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
