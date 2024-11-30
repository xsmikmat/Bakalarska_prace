<template>
  <div class="article-8">
    <div class="image-container-39">
      <div class="image-20"></div>
    </div>
    <frame4273189068
      :title="frame427318906Props.title"
      :subtitle="frame427318906Props.subtitle"
      :className="frame427318906Props.className"
    />
  </div>
</template>

<script>
import Frame4273189068 from "./Frame4273189068";
export default {
  name: "XArticle3",
  components: {
    Frame4273189068,
  },
  props: ["frame427318906Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.article-8
  align-items: flex-start
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 1
  flex-grow: 1
  gap: 16px
  justify-content: center
  padding: 16px
  position: relative

.image-container-39
  align-items: flex-start
  display: flex
  height: 100px
  position: relative
  width: 100px

.image-20
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative
</style>
