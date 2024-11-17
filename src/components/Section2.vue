<template>
  <section :class="$style.section1">
    <div :class="$style.containerWrapper">
      <div :class="$style.container">
        <h1 :class="$style.title">O našem ubytování</h1>
        <div :class="$style.description">
          Zažijte pohodlné ubytování v okolí krásné přírody
        </div>
      </div>
    </div>
    <div :class="$style.imageContainer">
      <img
        :class="$style.image1Icon"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
    <img :class="$style.sectionChild" alt="" src="/vector-200-1.svg" />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Section2",
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
    line-height: 44px;
    font-weight: 600;
  }
  .container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .containerWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-87xl) 0px 0px;
    box-sizing: border-box;
    min-width: 361px;
    max-width: 100%;
  }
  .image1Icon {
    height: 390px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  .imageContainer {
    height: 380px;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) 0px;
    box-sizing: border-box;
    min-width: 361px;
    max-width: 100%;
  }
  .section1 {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: var(--padding-41xl) var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--subtext-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 1425px) {
    .section1 {
      gap: var(--gap-11xl);
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 825px) {
    .title {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .containerWrapper {
      min-width: 100%;
    }

    .imageContainer {
      min-width: 100%;
    }

    .section1 {
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

    .imageContainer {
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }

    .section1 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
