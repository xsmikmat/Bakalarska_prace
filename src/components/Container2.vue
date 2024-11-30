<template>
  <div class="container-7">
    <div class="title-8 heading-2">Šmikmátor</div>
    <p class="description-8 subtext">Penzion v srdci České Kanady</p>
  </div>
</template>

<script>
export default {
  name: "Container2",
};
</script>

<style lang="sass">
@import '../../variables'

.container-7,
.container-8,
.container-9,
.container-10,
.container-11
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative

.title-8,
.title-9,
.title-10,
.title-11,
.title-12
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative

.description-8,
.description-9,
.description-10,
.description-11,
.description-12
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
</style>
