<template>
  <div :class="$style.fotogalerieMc14">
    <section />
    <Contents1 title="Apartmán U Třešně" vector200="/vector-200-1.svg" />
    <section :class="$style.contentsParent">
      <Contents1 title="Apartmán S Obrazem" vector200="/vector-200-1.svg" />
      <div :class="$style.subAsideContentWrapper">
        <div :class="$style.subAsideContent">
          <h1 :class="$style.title">Ostatní prostory</h1>
          <div :class="$style.description">
            Discover Apartment 1 with these beautiful photos.
          </div>
        </div>
      </div>
    </section>
    <div :class="$style.list" />
    <img :class="$style.fotogalerieMc14Child" alt="" src="/vector-200-1.svg" />
    <img :class="$style.fotogalerieMc14Item" alt="" src="/vector-200-4.svg" />
    <footer upravenoLogo11="/upraveno-logo-1-1-1@2x.png" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Section from "../components/Section.vue";
  import Contents1 from "../components/Contents1.vue";
  import Footer from "../components/Footer.vue";

  export default defineComponent({
    name: "FotogalerieMc",
    components: { Section, Contents1, Footer },
  });
</script>
<style module>
  .title {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 48px;
    font-weight: 700;
    font-family: inherit;
  }
  .description {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
  }
  .subAsideContent {
    width: 520px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    max-width: 100%;
  }
  .subAsideContentWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .contentsParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 466.5px;
    box-sizing: border-box;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }
  .list {
    width: 1172px;
    display: none;
    max-width: 100%;
    z-index: 3;
  }
  .fotogalerieMc14Child {
    width: 100%;
    height: 0px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: -62px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .fotogalerieMc14Item {
    width: 1504px;
    height: 0px;
    position: absolute;
    margin: 0 !important;
    bottom: -2px;
    left: calc(50% - 752px);
  }
  .fotogalerieMc14 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-12xs-5);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .contentsParent {
      padding-bottom: 303px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .title {
      font-size: var(--m3-headline-large-size);
      line-height: 38px;
    }
  }
  @media screen and (max-width: 750px) {
    .contentsParent {
      gap: var(--gap-11xl);
      padding-bottom: 197px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-5xl);
      line-height: 29px;
    }
  }
</style>