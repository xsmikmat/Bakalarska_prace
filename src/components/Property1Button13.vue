<template>
  <div :class="$style.property1button" @click="onProperty1ButtonContainerClick">
    <div :class="$style.rezervace">Rezervace</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1Button13",
    methods: {
      onProperty1ButtonContainerClick() {
        this.$router.push("/rezervace-mc14");
      },
    },
  });
</script>
<style module>
  .rezervace {
    position: relative;
    font-weight: 600;
  }
  .property1button {
    height: 40px;
    width: 100px;
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-6xl);
    box-sizing: border-box;
    cursor: pointer;
    z-index: 5;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
    font-family: var(--subtext);
  }
</style>