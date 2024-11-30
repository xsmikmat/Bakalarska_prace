<template>
  <div class="image-container-15"><frame :src="frameProps.src" :className="frameProps.className" /></div>
</template>

<script>
import Frame from "./Frame";
export default {
  name: "ImageContainer4",
  components: {
    Frame,
  },
  props: ["frameProps"],
};
</script>

<style lang="sass">
.image-container-15,
.image-container-16,
.image-container-17,
.image-container-18
  align-items: flex-start
  display: flex
  height: 100px
  position: relative
  width: 100px
</style>
