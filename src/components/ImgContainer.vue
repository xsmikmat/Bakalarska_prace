<template>
  <div :class="[`img_container`, className || ``]">
    <img
      class="image-1-2"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-1.png"
      alt="image 1"
    />
    <img
      class="image-2"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-2.png"
      alt="image 2"
    />
    <img
      class="image-3-1"
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
  gap: 67px
  height: 248px
  justify-content: center
  margin-left: -80.00px
  margin-right: -80.00px
  overflow: hidden
  padding: 60px 170px
  position: relative
  width: 1512px

.image-1-2
  height: 250px
  margin-bottom: -61.00px
  margin-left: -74.50px
  margin-top: -61.00px
  object-fit: cover
  position: relative
  width: 398px

.image-2
  height: 250px
  margin-bottom: -61.00px
  margin-top: -61.00px
  object-fit: cover
  position: relative
  width: 425px

.image-3-1
  height: 250px
  margin-bottom: -61.00px
  margin-right: -74.50px
  margin-top: -61.00px
  object-fit: cover
  position: relative
  width: 364px

.img_container.section-16
  margin-left: -170.00px
  margin-right: -170.00px
</style>
