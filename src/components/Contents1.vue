<template>
  <section :class="$style.contents">
    <h1 :class="$style.title">{{title}}</h1>
    <div :class="$style.description">
      Discover Apartment 1 with these beautiful photos.
    </div>
    <div :class="$style.list" />
    <img :class="$style.contentsChild" alt="" :src="vector200" />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Contents1",
    props: {
      title: { type: String },
      vector200: { type: String },
    },
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
  .list {
    width: 1172px;
    display: none;
    max-width: 100%;
    z-index: 2;
  }
  .contentsChild {
    width: 100%;
    height: 0.5px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: -0.5px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .contents {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-41xl) var(--padding-476xl) var(--padding-445xl)
      var(--padding-477xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-5xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }

  @media screen and (max-width: 1050px) {
    .title {
      font-size: var(--m3-headline-large-size);
      line-height: 38px;
    }
  }
  @media screen and (max-width: 750px) {
    .contents {
      padding: var(--padding-20xl) var(--padding-228xl) var(--padding-283xl)
        var(--padding-229xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-5xl);
      line-height: 29px;
    }

    .contents {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
