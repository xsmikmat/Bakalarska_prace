<template>
  <div class="container-32">
    <h1 class="title-39 heading-1">{{ title }}</h1>
    <p class="description-18 subtext">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Container4",
  props: ["title", "description"],
};
</script>

<style lang="sass">
@import '../../variables'

.container-32,
.container-33
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 24px
  position: relative

.title-39,
.title-40
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative
  text-align: center

.description-18,
.description-19
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center
</style>
