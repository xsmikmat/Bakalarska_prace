<template>
  <div class="image-container-3"><img class="u-tresne-02-1-1" :src="src" alt="U Tresne 02 1" /></div>
</template>

<script>
export default {
  name: "ImageContainer2",
  props: ["src"],
};
</script>

<style lang="sass">
.image-container-3
  align-items: flex-start
  display: flex
  height: 260px
  position: relative
  width: 336px

.u-tresne-02-1-1,
.u-tresne-2-1,
.u-tresne05-1-1,
.u-tresne-04-1-1,
.s-obrazem-2-1,
.s-obrazem-03-1-1,
.s-obrazem-05-1-1,
.s-obrazem-02-1-1,
.img_2620-1-1,
.img_2624-2-1,
.img_2615-1-1,
.img_2621-1-1
  align-self: stretch
  flex: 1
  flex-grow: 1
  object-fit: cover
  position: relative
</style>
