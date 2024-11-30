<template>
  <router-link to="/okoli-1">
    <div class="button-88">
      <div class="okol-20 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component147",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-88
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-20
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
