<template>
  <div :class="$style.card">
    <div :class="$style.imageContainer">
      <div :class="$style.image">
        <div :class="$style.title">Family Cottage</div>
      </div>
    </div>
    <div :class="$style.textContent">
      <h1 :class="$style.title1">{{title}}</h1>
      <div :class="$style.subtitle">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div :class="$style.iconButtons">
        <div :class="$style.button" @click="__PH1__">
          <div :class="$style.vceInformac">Více informací</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Card",
    props: {
      title: { type: String },
      __PH1__: { type: Function },
    },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/o-ubytovn-mc14");
      },
    },
  });
</script>
<style module>
  .title {
    flex: 1;
    position: relative;
    line-height: 16px;
  }
  .image {
    flex: 1;
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-143xl) var(--padding-mini) var(--padding-143xl)
      var(--padding-base);
    box-sizing: border-box;
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
  .title1 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--m3-headline-large-size);
    line-height: 44px;
    font-weight: 400;
    font-family: var(--heading-1);
  }
  .subtitle {
    height: 144px;
    position: relative;
    line-height: 15px;
    color: var(--color-gray-100);
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .vceInformac {
    position: relative;
    line-height: 15px;
    display: inline-block;
    min-width: 97px;
  }
  .button {
    margin: 0 !important;
    position: absolute;
    top: 0px;
    left: calc(50% - 73px);
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-5xl);
    white-space: nowrap;
    cursor: pointer;
  }
  .iconButtons {
    align-self: stretch;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    color: var(--color-darkseagreen);
  }
  .textContent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs);
    gap: var(--gap-9xs);
    text-align: left;
    font-size: var(--text-size);
    font-family: var(--subtext);
  }
  .card {
    width: 340px;
    border-radius: var(--br-7xs);
    border: 1px solid var(--color-gray-300);
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-xs);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }

  @media screen and (max-width: 1050px) {
    .title1 {
      font-size: var(--font-size-7xl);
      line-height: 35px;
    }
  }
  @media screen and (max-width: 750px) {
    .title1 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }
  }
</style>