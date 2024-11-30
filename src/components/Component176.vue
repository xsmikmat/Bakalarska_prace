<template>
  <router-link to="/o-ubytovani-3">
    <div class="button-135">
      <div class="o-ubytovn-32 text">{{ oUbytovn }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component176",
  props: ["oUbytovn"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-135
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 44px
  min-width: 80px
  padding: 13px 0

.o-ubytovn-32
  color: $gray
  font-weight: 400
  line-height: 15px
  white-space: nowrap
</style>
