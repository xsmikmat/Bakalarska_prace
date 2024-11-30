<template>
  <router-link to="/kontakt-3">
    <div class="button-86">
      <div class="kontakt-22 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component145",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-86
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-22
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
