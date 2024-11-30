<template>
  <div class="frame-3">
    <img
      class="icon-for-tourism-1"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/icon-for-tourism-1.png"
      alt="icon-for-tourism 1"
    />
  </div>
</template>

<script>
export default {
  name: "Frame2",
};
</script>

<style lang="sass">
@import '../../variables'

.frame-3,
.frame-4,
.frame-5
  background-color: $black-3
  border-radius: 50px
  height: 100px
  position: relative
  width: 100px

.icon-for-tourism-1,
.icon-for-tourism-1-1,
.icon-for-tourism-1-2
  height: 116px
  left: -8px
  object-fit: cover
  position: absolute
  top: -8px
  width: 116px
</style>
