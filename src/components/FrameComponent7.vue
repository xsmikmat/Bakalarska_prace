<template>
  <section :class="$style.frameParent">
    <FrameComponent1 />
    <div :class="$style.loremIpsumDolorSitAmetCoWrapper">
      <div :class="$style.loremIpsumDolor">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget
        nullam non. Quis hendrerit dolor magna eget est lorem ipsum
      </div>
    </div>
    <FrameComponent2 />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent1 from "./FrameComponent1.vue";
  import FrameComponent2 from "./FrameComponent2.vue";

  export default defineComponent({
    name: "FrameComponent7",
    components: { FrameComponent1, FrameComponent2 },
  });
</script>
<style module>
  .loremIpsumDolor {
    flex: 1;
    position: relative;
    line-height: 44px;
    font-weight: 600;
    display: inline-block;
    max-width: 100%;
  }
  .loremIpsumDolorSitAmetCoWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 164px 0px 110px;
    box-sizing: border-box;
    min-height: 120px;
    max-width: 100%;
  }
  .frameParent {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 37px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--subtext-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 1200px) {
    .loremIpsumDolorSitAmetCoWrapper {
      padding-left: 55px;
      padding-right: 82px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 750px) {
    .loremIpsumDolor {
      font-size: var(--font-size-base);
      line-height: 35px;
    }
  }
  @media screen and (max-width: 450px) {
    .loremIpsumDolorSitAmetCoWrapper {
      padding-left: 27px;
      padding-right: 41px;
      box-sizing: border-box;
    }
  }
</style>
