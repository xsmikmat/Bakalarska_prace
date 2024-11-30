<template>
  <div class="article-5">
    <frame :src="frameProps.src" :className="frameProps.className" />
    <frame4273189062
      :title="frame4273189062Props.title"
      :subtitle="frame4273189062Props.subtitle"
      :className="frame4273189062Props.className"
    />
  </div>
</template>

<script>
import Frame from "./Frame";
import Frame4273189062 from "./Frame4273189062";
export default {
  name: "XArticle2",
  components: {
    Frame,
    Frame4273189062,
  },
  props: ["frameProps", "frame4273189062Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.article-5
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
</style>
