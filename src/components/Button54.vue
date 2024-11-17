<template>
  <div :class="$style.button" @click="onButtonContainerClick">
    <a :class="$style.fotogalerie">Fotogalerie</a>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button54",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/fotogalerie-mc14");
      },
    },
  });
</script>
<style module>
  .fotogalerie {
    text-decoration: none;
    height: 15px;
    width: 78px;
    position: relative;
    line-height: 15px;
    color: inherit;
    display: inline-block;
    flex-shrink: 0;
  }
  .button {
    height: 44px;
    width: 77px;
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
