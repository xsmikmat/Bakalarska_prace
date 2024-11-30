<template>
  <router-link to="/rezervace-2">
    <div class="property-1-button-22">
      <div class="rezervace-22 text">{{ rezervace }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component154",
  props: ["rezervace"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-button-22
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.rezervace-22
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
