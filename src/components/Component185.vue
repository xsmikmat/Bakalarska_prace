<template>
  <router-link to="/kontakt-2">
    <div class="button-142">
      <div class="kontakt-36 text">{{ kontakt }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component185",
  props: ["kontakt"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-142
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 58px
  padding: 13px 0

.kontakt-36
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
