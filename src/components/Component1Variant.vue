<template>
  <div :class="$style.component1variant6">
    <div :class="$style.potvrditRezervaci">Potvrdit rezervaci</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Component1Variant",
  });
</script>
<style module>
  .potvrditRezervaci {
    position: relative;
    font-weight: 600;
  }
  .component1variant6 {
    height: 40px;
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-6xl);
    box-sizing: border-box;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
    font-family: var(--subtext);
  }
</style>
