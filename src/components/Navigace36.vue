<template>
  <router-link to="/o-ubytovani-2">
    <div class="button-79">
      <div class="o-ubytovn-18 text">{{ oUbytovn }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Navigace36",
  props: ["oUbytovn"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-79
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 80px
  padding: 13px 0

.o-ubytovn-18
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
