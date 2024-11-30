<template>
  <router-link to="/kontakt-2">
    <div class="button-154">
      <div class="kontakt-39 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component1100",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-154
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-39
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
