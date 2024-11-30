<template>
  <router-link to="/okoli-3">
    <div class="button-20">
      <div class="okol-4 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component112",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-20
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-4
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
