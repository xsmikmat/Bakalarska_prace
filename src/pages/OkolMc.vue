<template>
  <div :class="$style.okolMc14">
    <section />
    <main :class="$style.body">
      <section :class="$style.section">
        <div :class="$style.mainContent">
          <div :class="$style.container">
            <h1 :class="$style.title">Co nabízí okolí</h1>
            <div :class="$style.description">
              Různé výlety a aktivity pro všechny
            </div>
          </div>
        </div>
        <div :class="$style.imageContainer">
          <img :class="$style.okoli101" alt="" src="/okoli-10-1@2x.png" />
          <div :class="$style.image" />
        </div>
        <img
          :class="$style.sectionChild"
          loading="lazy"
          alt=""
          src="/vector-200-1.svg"
        />
      </section>
      <List2 />
    </main>
    <img :class="$style.okolMc14Child" alt="" src="/vector-200-4.svg" />
    <footer upravenoLogo11="/upraveno-logo-1-1-1@2x.png" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Section from "../components/Section.vue";
  import List2 from "../components/List2.vue";
  import Footer from "../components/Footer.vue";

  export default defineComponent({
    name: "OkolMc",
    components: { Section, List2, Footer },
  });
</script>
<style module>
  .title {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 100px;
    font-weight: 400;
    font-family: inherit;
  }
  .description {
    align-self: stretch;
    position: relative;
    font-size: var(--subtext-size);
    line-height: 44px;
    font-weight: 600;
    font-family: var(--subtext);
    color: var(--color-gray-100);
  }
  .container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .mainContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-97xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .okoli101 {
    width: 556px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    display: none;
    max-width: 100%;
  }
  .image {
    align-self: stretch;
    width: 1px;
    position: relative;
    background-color: var(--color-gainsboro);
  }
  .imageContainer {
    height: 400px;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    background-image: url("/public/okoli-10-1@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
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
    padding: var(--padding-41xl) var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }
  .body {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .okolMc14Child {
    width: 1504px;
    height: 0px;
    position: absolute;
    margin: 0 !important;
    bottom: -2px;
    left: 0px;
  }
  .okolMc14 {
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
    gap: 1.3px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .section {
      gap: var(--gap-11xl);
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .title {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }
  }
  @media screen and (max-width: 750px) {
    .mainContent {
      min-width: 100%;
    }

    .imageContainer {
      min-width: 100%;
    }

    .section {
      gap: var(--gap-mini);
      padding: var(--padding-20xl) var(--padding-23xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .description {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .section {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>