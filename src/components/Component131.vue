<template>
  <router-link to="/o-ubytovani-1">
    <div class="button-63">
      <div class="o-ubytovn-14 text">{{ oUbytovn }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component131",
  props: ["oUbytovn"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-63
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 80px
  padding: 13px 0

.o-ubytovn-14
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
