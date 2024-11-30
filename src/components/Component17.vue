<template>
  <router-link to="/okoli-1">
    <div class="button-12">
      <div class="okol-2 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component17",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-12
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-2
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
