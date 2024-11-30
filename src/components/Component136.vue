<template>
  <router-link to="/o-ubytovani-3">
    <div class="button-71">
      <div class="o-ubytovn-16 text">{{ oUbytovn }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component136",
  props: ["oUbytovn"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-71
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 80px
  padding: 13px 0

.o-ubytovn-16
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
