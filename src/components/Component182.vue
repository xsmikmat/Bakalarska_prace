<template>
  <router-link to="/okoli-2">
    <div class="button-140">
      <div class="okol-33 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component182",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-140
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-33
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
