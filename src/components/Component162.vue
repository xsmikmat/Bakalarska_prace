<template>
  <router-link to="/okoli-1">
    <div class="button-116">
      <div class="okol-27 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component162",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-116
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-27
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
