<template>
  <div :class="[`image-container-24`, className || ``]"><img class="image-1-6" :src="src" alt="image 1" /></div>
</template>

<script>
export default {
  name: "ImageContainer5",
  props: ["src", "className"],
};
</script>

<style lang="sass">
.image-container-24
  align-items: flex-start
  display: flex
  flex: 1
  flex-grow: 1
  height: 380px
  position: relative

.image-1-6
  align-self: stretch
  flex: 1
  flex-grow: 1
  object-fit: cover
  position: relative

.image-container-24.image-container-25
  align-self: stretch
  height: unset

.image-container-24.image-container-26
  align-self: stretch
  flex: unset
  flex-grow: unset
  height: 240px
  width: 100%

.image-container-24.image-container-27
  height: 400px
</style>
