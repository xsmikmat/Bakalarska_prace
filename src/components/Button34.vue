<template>
  <div :class="$style.button6" @click="onButtonContainerClick">
    <div :class="$style.fotogalerie1">Fotogalerie</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button34",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/fotogalerie-mc14");
      },
    },
  });
</script>
<style module>
  .fotogalerie1 {
    height: 15px;
    width: 78px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button6 {
    width: 77px;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
