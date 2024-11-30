<template>
  <div class="item-1">
    <frame :src="frameProps.src" />
    <div class="frame-427318906-1">
      <div class="title-21 roboto-normal-black-20px">{{ title }}</div>
    </div>
    <div class="subtitle-4 roboto-medium-black-28px">{{ subtitle }}</div>
  </div>
</template>

<script>
import Frame from "./Frame";
export default {
  name: "Item32",
  components: {
    Frame,
  },
  props: ["title", "subtitle", "frameProps"],
};
</script>

<style lang="sass">
.item-1
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative

.frame-427318906-1
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-21
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-4
  align-self: stretch
  letter-spacing: 0
  line-height: 36px
  position: relative
  text-align: center
</style>
