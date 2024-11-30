<template>
  <router-link to="/okoli-3">
    <div class="button-128">
      <div class="okol-30 text">{{ okol }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Navigace57",
  props: ["okol"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-128
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 34px
  padding: 13px 0

.okol-30
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
