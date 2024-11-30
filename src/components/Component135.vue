<template>
  <router-link to="/kontakt-1">
    <div class="button-66">
      <div class="kontakt-17 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component135",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-66
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-17
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
