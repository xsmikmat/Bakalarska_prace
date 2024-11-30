<template>
  <router-link to="/okoli-2">
    <div class="button-5">
      <div class="okol-1 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component12",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-5
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-1
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
