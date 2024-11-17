<template>
  <div :class="$style.card">
    <div :class="$style.avatar" />
    <div :class="$style.cardContainers">
      <div :class="$style.titleContainers">
        <div :class="$style.title">HappyGuest123</div>
      </div>
      <div :class="$style.title1">Great stay with excellent facilities</div>
    </div>
    <div :class="$style.extraContainers">
      <img
        :class="$style.extraSpacersIcon"
        loading="lazy"
        alt=""
        src="/frame-427318817.svg"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Card3",
  });
</script>
<style module>
  .avatar {
    height: 32px;
    width: 32px;
    position: relative;
    border-radius: var(--br-13xl);
    background-color: var(--color-gray-300);
    overflow: hidden;
    flex-shrink: 0;
    display: none;
    z-index: 1;
  }
  .title {
    flex: 1;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .titleContainers {
    width: 309.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-20xl) 0px var(--padding-21xl);
    box-sizing: border-box;
  }
  .title1 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .cardContainers {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl);
    flex-shrink: 0;
    max-width: 100%;
  }
  .extraSpacersIcon {
    align-self: stretch;
    height: 9.8px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .extraContainers {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs-1) 0px 0px;
    margin-left: -58.3px;
  }
  .card {
    flex: 1;
    width: 100%;
    position: relative;
    border-radius: var(--br-7xs);
    background-color: var(--color-gray-400);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xl) var(--padding-base) var(--padding-base);
    box-sizing: border-box;
    min-width: 273px;
    max-width: 100%;
    text-align: left;
    font-size: var(--m3-label-large-size);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }
</style>
