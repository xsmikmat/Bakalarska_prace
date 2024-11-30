<template>
  <div class="image-container-6"><img class="u-tresne-02-1-2" :src="src" alt="U Tresne 02 1" /></div>
</template>

<script>
export default {
  name: "ImageContainer3",
  props: ["src"],
};
</script>

<style lang="sass">
.image-container-6
  align-items: flex-start
  display: flex
  height: 110px
  position: relative
  width: 136px

.u-tresne-02-1-2,
.u-tresne-2-2,
.u-tresne05-1-2,
.u-tresne-04-1-2,
.s-obrazem-2-2,
.s-obrazem-03-1-2,
.s-obrazem-05-1-2,
.s-obrazem-02-1-2,
.img_2620-1-2,
.img_2624-2-2,
.img_2615-1-2,
.img_2621-1-2
  align-self: stretch
  flex: 1
  flex-grow: 1
  object-fit: cover
  position: relative
</style>
