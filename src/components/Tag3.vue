<template>
  <div class="tag-6"><div class="text-6 roboto-medium-black-12px">Cultural</div></div>
</template>

<script>
export default {
  name: "Tag3",
};
</script>

<style lang="sass">
@import '../../variables'

.tag-6,
.tag-7,
.tag-8
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

.text-6,
.text-7,
.text-8
  letter-spacing: 0
  line-height: 16px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content
</style>
