<template>
  <div class="container-45">
    <div class="title-69 roboto-bold-black-40px">{{ title }}</div>
    <p class="description-27 roboto-normal-black-16px">Discover Apartment 1 with these beautiful photos.</p>
  </div>
</template>

<script>
export default {
  name: "Container322",
  props: ["title"],
};
</script>

<style lang="sass">
.container-45
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-69
  letter-spacing: 0
  line-height: 48px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 520px

.description-27
  letter-spacing: 0
  line-height: 24px
  position: relative
  text-align: center
  width: 520px
</style>
