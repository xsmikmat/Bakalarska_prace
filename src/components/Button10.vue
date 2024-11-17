<template>
  <div :class="$style.button2" @click="onButtonContainerClick">
    <a :class="$style.fotogalerie">Fotogalerie</a>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button10",
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
  .button2 {
    height: 44px;
    width: 77px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
