<template>
  <div class="container-1">
    <div class="title-1 heading-2">Šmikmátor</div>
    <p class="description-1 subtext">Penzion v srdci České Kanady</p>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="sass">
@import '../../variables'

.container-1,
.container-2,
.container-3,
.container-4,
.container-5
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 24px
  position: relative
  width: 559px

.title-1,
.title-2,
.title-3,
.title-4,
.title-5
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative

.description-1,
.description-2,
.description-3,
.description-4,
.description-5
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
</style>
