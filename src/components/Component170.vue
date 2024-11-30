<template>
  <router-link to="/kontakt-2">
    <div class="button-126">
      <div class="kontakt-32 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component170",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-126
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-32
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
