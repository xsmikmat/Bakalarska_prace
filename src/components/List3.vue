<template>
  <div :class="$style.list">
    <div :class="$style.card">
      <div :class="$style.imageContainer">
        <img
          :class="$style.spolecnePrsotory021"
          loading="lazy"
          alt=""
          :src="spolecnePrsotory021"
        />
      </div>
      <div :class="$style.textContent">
        <h1 :class="$style.title">{{title}}</h1>
        <div :class="$style.subtitle">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "List3",
    props: {
      spolecnePrsotory021: { type: String },
      title: { type: String },
    },
  });
</script>
<style module>
  .spolecnePrsotory021 {
    height: 340px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
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
  .title {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 44px;
    font-weight: 400;
    font-family: inherit;
  }
  .subtitle {
    height: 144px;
    position: relative;
    font-size: var(--text-size);
    line-height: 15px;
    font-family: var(--subtext);
    color: var(--color-gray-100);
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .textContent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs);
    gap: var(--gap-9xs);
  }
  .card {
    flex: 1;
    border-radius: var(--br-7xs);
    border: 1px solid var(--color-gray-300);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
  }
  .list {
    width: 346px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-10xs);
    box-sizing: border-box;
    min-width: 329px;
    max-width: 100%;
    text-align: left;
    font-size: var(--m3-headline-large-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }

  @media screen and (max-width: 825px) {
    .title {
      font-size: var(--font-size-7xl);
      line-height: 35px;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .list {
      gap: var(--gap-xl);
    }
  }
</style>
