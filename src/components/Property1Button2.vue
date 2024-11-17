<template>
  <div :class="$style.property1button" @click="onProperty1ButtonContainerClick">
    <a :class="$style.rezervace">Rezervace</a>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1Button2",
    methods: {
      onProperty1ButtonContainerClick() {
        this.$router.push("/rezervace-mc14");
      },
    },
  });
</script>
<style module>
  .rezervace {
    text-decoration: none;
    position: relative;
    font-weight: 600;
    color: inherit;
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
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
  }
</style>
