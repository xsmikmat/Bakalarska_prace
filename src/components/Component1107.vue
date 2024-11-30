<template>
  <router-link to="/okoli-2">
    <div class="button-162">
      <div class="okol-38 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component1107",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-162
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-38
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
