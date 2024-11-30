<template>
  <router-link to="/okoli-2">
    <div class="button-1">
      <div class="okol text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Navigace2",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-1
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
