<template>
  <div class="contents-8">
    <container322 :title="container3Props.title" />
    <div class="list-32"></div>
    <img
      class="vector-200-12"
      src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/vector-200.svg"
      alt="Vector 200"
    />
  </div>
</template>

<script>
import Container322 from "./Container322";
export default {
  name: "Contents5",
  components: {
    Container322,
  },
  props: ["container3Props"],
};
</script>

<style lang="sass">
.contents-8
  align-items: center
  display: flex
  flex-direction: column
  gap: 60px
  justify-content: center
  overflow: hidden
  padding: 60px 170px
  position: relative
  width: 1512px

.list-32
  align-self: stretch
  flex: 0 0 auto
  position: relative
  width: 100%

.vector-200-12
  height: 1px
  left: 0
  object-fit: cover
  position: absolute
  top: 620px
  width: 1512px
</style>
