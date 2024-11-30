<template>
  <router-link to="/o-ubytovani-3">
    <div class="button">
      <div class="o-ubytovn text">{{ oUbytovn }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Navigace",
  props: ["oUbytovn"],
};
</script>

<style lang="sass">
@import '../../variables'

.button
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 80px
  padding: 13px 0

.o-ubytovn
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
