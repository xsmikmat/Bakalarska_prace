<template>
  <router-link to="/rezervace-1">
    <div class="property-1-button-12">
      <div class="rezervace-12 text">{{ rezervace }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component129",
  props: ["rezervace"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-button-12
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.rezervace-12
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
