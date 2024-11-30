<template>
  <div class="article-1">
    <frame :src="frameProps.src" :className="frameProps.className" />
    <frame427318906
      :title="frame427318906Props.title"
      :subtitle="frame427318906Props.subtitle"
      :className="frame427318906Props.className"
    />
  </div>
</template>

<script>
import Frame from "./Frame";
import Frame427318906 from "./Frame427318906";
export default {
  name: "XArticle",
  components: {
    Frame,
    Frame427318906,
  },
  props: ["frameProps", "frame427318906Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.article-1
  align-items: flex-start
  align-self: stretch
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 0 0 auto
  gap: 16px
  justify-content: center
  padding: 16px
  position: relative
  width: 100%
</style>
