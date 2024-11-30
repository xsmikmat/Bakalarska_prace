<template>
  <router-link to="/rezervace-3">
    <div class="property-1-button-32">
      <div class="rezervace-32 fredoka-semi-bold-surf-16px">{{ rezervace }}</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Component179",
  props: ["rezervace"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-button-32
  align-items: center
  background-color: $fun-green
  border-radius: 10px
  cursor: pointer
  display: flex
  gap: 10px
  height: 40px
  justify-content: center
  overflow: hidden
  padding: 10px 25px
  position: relative
  width: 100px

.rezervace-32
  letter-spacing: 0
  line-height: normal
  margin-left: -13.50px
  margin-right: -13.50px
  margin-top: -0.50px
  position: relative
  white-space: nowrap
  width: fit-content
</style>
