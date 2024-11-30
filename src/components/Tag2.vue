<template>
  <div class="tag-3"><div class="text-3 roboto-medium-black-12px">Adventure</div></div>
</template>

<script>
export default {
  name: "Tag2",
};
</script>

<style lang="sass">
@import '../../variables'

.tag-3,
.tag-4,
.tag-5
  align-items: center
  background-color: $black-3
  border-radius: 6px 0px 6px 0px
  display: inline-flex
  flex-direction: column
  justify-content: center
  left: 0
  padding: 4px 8px
  position: absolute
  top: 0

.text-3,
.text-4,
.text-5
  letter-spacing: 0
  line-height: 16px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content
</style>
