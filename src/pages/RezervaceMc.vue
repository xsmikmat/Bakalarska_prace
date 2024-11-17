<template>
  <div :class="$style.rezervaceMc14">
    <FrameComponent10 />
    <section :class="$style.rezervaceMc14Inner"><FrameComponent5 /></section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent10 from "../components/FrameComponent10.vue";
  import FrameComponent5 from "../components/FrameComponent5.vue";

  export default defineComponent({
    name: "RezervaceMc",
    components: { FrameComponent10, FrameComponent5 },
  });
</script>
<style module>
  .rezervaceMc14Inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 21px 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .rezervaceMc14 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 218px;
    box-sizing: border-box;
    gap: 103px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 750px) {
    .rezervaceMc14 {
      gap: 51px;
    }
  }
  @media screen and (max-width: 450px) {
    .rezervaceMc14 {
      gap: 26px;
    }
  }
</style>