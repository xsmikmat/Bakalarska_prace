<template>
  <div :class="[`img_container`, className || ``]">
    <img
      class="image"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-1.png"
      alt="image 1"
    />
    <img
      class="image-2 image"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-2.png"
      alt="image 2"
    />
    <img
      class="image-2 image"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-3.png"
      alt="image 3"
    />
  </div>
</template>

<script>
export default {
  name: "ImgContainer",
  props: ["className"],
};
</script>

<style lang="sass">
.img_container
  align-items: center
  display: flex
  gap: 2vw !important
  height: auto
  justify-content: center
  margin-left: -5vw
  margin-right: -5vw
  overflow: hidden
  padding: 5vw 10vw
  position: relative

@media (max-width: 768px)
  .img_container
    flex-direction: column
    gap: 20px
    margin-left: -20px
    margin-right: -20px
    padding: 20px
    width: calc(100% + 40px)
  .image-2
    display: none

.image
  height: 250px
  object-fit: cover
  position: relative
  width: 398px

.img_container.section-16
  margin-left: -170.00px
  margin-right: -170.00px
</style>
