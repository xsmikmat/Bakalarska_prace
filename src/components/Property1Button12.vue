<template>
  <div :class="$style.property1button" @click="onProperty1ButtonContainerClick">
    <div :class="$style.rezervace">Rezervace</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1Button12",
    methods: {
      onProperty1ButtonContainerClick() {
        this.$router.push("/rezervace-mc14");
      },
    },
  });
</script>
<style module>
  .rezervace {
    height: 15px;
    width: 73px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .property1button {
    width: 77px;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
    text-align: left;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }
</style>
