<template>
  <div :class="$style.iconButton">
    <div :class="$style.container">
      <div :class="$style.stateLayer">
        <img :class="$style.icon" loading="lazy" alt="" src="/icon.svg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "IconButton",
  });
</script>
<style module>
  .icon {
    height: 24px;
    width: 24px;
    position: relative;
  }
  .stateLayer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xs);
  }
  .container {
    border-radius: var(--br-81xl);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .iconButton {
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
