<template>
  <router-link to="/kontakt-1">
    <div class="button-118">
      <div class="kontakt-30 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component165",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-118
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-30
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
