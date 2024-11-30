<template>
  <div :class="[`frame`, className || ``]"><img class="icon-for" :src="src" alt="icon-for-email 1" /></div>
</template>

<script>
export default {
  name: "Frame",
  props: ["src", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.frame
  background-color: $black-3
  border-radius: 50px
  height: 100px
  position: relative
  width: 100px

.icon-for
  height: 100px
  left: 0
  object-fit: cover
  position: absolute
  top: 0
  width: 100px

.frame.image-6,
.frame.image-7,
.frame.image-8,
.frame.image-9
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative

.frame.image-container-9,
.frame.image-container-9-1,
.frame.image-container-10,
.frame.image-container-10-1,
.frame.image-container-11,
.frame.image-container-11-1
  align-items: flex-start
  background-color: unset
  border-radius: unset
  display: flex

.frame.image-container-9-1 .icon-for,
.frame.image-container-10-1 .icon-for,
.frame.image-container-11-1 .icon-for,
.frame.image-container-9 .icon-for,
.frame.image-container-10 .icon-for,
.frame.image-container-11 .icon-for
  align-self: stretch
  flex: 1
  flex-grow: 1
  height: unset
  left: unset
  position: relative
  top: unset
  width: unset
</style>
