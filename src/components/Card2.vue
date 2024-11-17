<template>
  <div :class="$style.card" :style="cardStyle">
    <div :class="$style.imageContainer">
      <div :class="$style.image">
        <div :class="$style.tag">
          <div :class="$style.text">{{text}}</div>
        </div>
        <div :class="$style.titleWrapper">
          <div :class="$style.title">{{title}}</div>
        </div>
      </div>
    </div>
    <div :class="$style.textContent">
      <div :class="$style.subtitle">{{subtitle}}</div>
      <div :class="$style.title1">{{title1}}</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Card2",
    props: {
      text: { type: String },
      title: { type: String },
      subtitle: { type: String },
      title1: { type: String },
      cardPadding: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      cardStyle(): CSS.Properties {
        return {
          padding: this.cardPadding,
        };
      },
    },
  });
</script>
<style module>
  .text {
    position: relative;
    line-height: 16px;
    font-weight: 500;
  }
  .tag {
    border-radius: var(--br-7xs) 0px var(--br-7xs) 0px;
    background-color: var(--color-gray-400);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-6xs) var(--padding-9xs)
      var(--padding-5xs);
  }
  .title {
    flex: 1;
    position: relative;
    line-height: 16px;
    display: inline-block;
    max-width: 100%;
  }
  .titleWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini) 0px var(--padding-base);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
  }
  .image {
    flex: 1;
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-143xl);
    box-sizing: border-box;
    gap: var(--gap-119xl);
    max-width: 100%;
  }
  .imageContainer {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .subtitle {
    align-self: stretch;
    position: relative;
    line-height: 28px;
    font-weight: 500;
  }
  .title1 {
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
  }
  .textContent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs);
    gap: var(--gap-9xs);
    font-size: var(--subtext-size);
  }
  .card {
    flex: 1;
    border-radius: var(--br-7xs);
    border: 1px solid var(--color-gray-300);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 273px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }

  @media screen and (max-width: 450px) {
    .image {
      gap: var(--gap-50xl);
    }

    .subtitle {
      font-size: var(--font-size-base);
      line-height: 22px;
    }
  }
</style>
