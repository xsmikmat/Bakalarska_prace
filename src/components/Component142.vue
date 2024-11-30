<template>
  <router-link to="/okoli-3">
    <div class="button-84">
      <div class="okol-19 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component142",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-84
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-19
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
