<template>
  <div class="container-50">
    <h1 class="title-74 heading-1">{{ title }}</h1>
    <p class="description-29 subtext">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Container22",
  props: ["title", "description"],
};
</script>

<style lang="sass">
@import '../../variables'

.container-50,
.container-51
  align-items: flex-start
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 24px
  position: relative

.title-74,
.title-75
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative

.description-29,
.description-30
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
</style>
