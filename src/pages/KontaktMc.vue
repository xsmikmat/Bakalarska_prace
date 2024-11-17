<template>
  <div :class="$style.kontaktMc14">
    <section />
    <List /><List1 />
    <section :class="$style.section">
      <div :class="$style.image">
        <img :class="$style.imageIcon" alt="" src="/image.svg" />
        <div :class="$style.icLocationWrapper">
          <img
            :class="$style.icLocationIcon"
            loading="lazy"
            alt=""
            src="/iclocation.svg"
          />
        </div>
        <div :class="$style.title">Location Map</div>
      </div>
      <img :class="$style.sectionChild" alt="" src="/vector-200-1.svg" />
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Section from "../components/Section.vue";
  import List from "../components/List.vue";
  import List1 from "../components/List1.vue";

  export default defineComponent({
    name: "KontaktMc",
    components: { Section, List, List1 },
  });
</script>
<style module>
  .imageIcon {
    width: 1100px;
    height: 1100px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 550px);
    left: calc(50% - 550px);
    overflow: hidden;
    flex-shrink: 0;
  }
  .icLocationIcon {
    height: 24px;
    width: 24px;
    position: relative;
    z-index: 1;
  }
  .icLocationWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
  }
  .title {
    align-self: stretch;
    position: relative;
    line-height: 22px;
    font-weight: 500;
    z-index: 1;
  }
  .image {
    flex: 1;
    border-radius: var(--br-7xs);
    background-color: var(--color-gray-400);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 122px var(--padding-mini) var(--padding-97xl) var(--padding-base);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .sectionChild {
    height: 0.5px;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: -0.5px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
  }
  .section {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 64px var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-base);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }
  .kontaktMc14 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 309px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 750px) {
    .section {
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .section {
      padding: var(--padding-23xl) var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>