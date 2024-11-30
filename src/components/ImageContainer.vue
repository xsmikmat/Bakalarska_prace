<template>
  <div :class="[`image-container-1`, className || ``]">
    <img class="u-tresne-02-1" :src="src" alt="U Tresne 02 1" />
  </div>
</template>

<script>
export default {
  name: "ImageContainer",
  props: ["src", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.image-container-1
  align-items: flex-start
  display: flex
  height: 400px
  position: relative
  width: 556px

.u-tresne-02-1
  align-self: stretch
  flex: 1
  flex-grow: 1
  object-fit: cover
  position: relative

.image-container-1.image
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative

.image-container-1.image .u-tresne-02-1
  align-self: unset
  flex: unset
  flex-grow: unset
  height: 415px
  left: 0
  position: absolute
  top: 0
  width: 556px
</style>
