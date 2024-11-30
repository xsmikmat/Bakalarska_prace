<template>
  <router-link to="/okoli-3">
    <div class="button-30">
      <div class="okol-6 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component117",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-30
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-6
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
