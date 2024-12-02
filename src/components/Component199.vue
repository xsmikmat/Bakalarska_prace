<template>
  <router-link to="/rezervace">
    <div class="property-1-button-36">
      <div class="rezervace-36 text">{{ rezervace }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component199",
  props: ["rezervace"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-button-36
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 77px
  padding: 13px 0

.rezervace-36
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
