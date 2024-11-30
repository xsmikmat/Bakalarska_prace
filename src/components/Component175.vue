<template>
  <router-link to="/kontakt-3">
    <div class="button-134">
      <div class="kontakt-34 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component175",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-134
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-34
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
