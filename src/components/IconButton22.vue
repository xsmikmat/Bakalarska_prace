<template>
  <div :class="[`trailing-icon-12`, className || ``]"></div>
</template>

<script>
export default {
  name: "IconButton22",
  props: ["className"],
};
</script>

<style lang="sass">
.trailing-icon-12
  align-items: center
  display: flex
  flex-direction: column
  gap: 10px
  height: 48px
  justify-content: center
  margin-bottom: -9.00px
  position: relative
  width: 48px

.trailing-icon-12.trailing-icon-4,
.trailing-icon-12.trailing-icon-6,
.trailing-icon-12.trailing-icon-8,
.trailing-icon-12.trailing-icon-10
  align-items: center
  display: flex
  flex-direction: column
  gap: 10px
  height: 48px
  justify-content: center
  margin-bottom: -8.00px
  position: relative
  width: 48px

.trailing-icon-12.trailing-icon-5,
.trailing-icon-12.trailing-icon-7,
.trailing-icon-12.trailing-icon-9,
.trailing-icon-12.trailing-icon-11
  align-items: center
  display: flex
  flex-direction: column
  gap: 10px
  height: 48px
  justify-content: center
  position: relative
  width: 48px
</style>
