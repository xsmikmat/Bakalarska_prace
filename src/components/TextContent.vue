<template>
  <div class="text-content-9">
    <div class="subtitle-20 roboto-medium-black-20px">{{ subtitle }}</div>
    <p class="title-58 roboto-normal-black-16px">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "TextContent",
  props: ["subtitle", "title"],
};
</script>

<style lang="sass">
.text-content-9
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  padding: 12px
  position: relative
  width: 100%

.subtitle-20
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative

.title-58
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative
</style>
