<template>
  <div class="container-6">
    <h1 class="title-7 heading-2">{{ title }}</h1>
    <p class="description-7 subtext">Discover Apartment 1 with these beautiful photos.</p>
  </div>
</template>

<script>
export default {
  name: "Container32",
  props: ["title"],
};
</script>

<style lang="sass">
@import '../../variables'

.container-6
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-7
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 520px

.description-7
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center
  width: 520px
</style>
