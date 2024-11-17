<template>
  <div :class="$style.button1" @click="onButtonContainerClick">
    <div :class="$style.okol">Okolí</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button9",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/okol-mc14");
      },
    },
  });
</script>
<style module>
  .okol {
    height: 15px;
    width: 35px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button1 {
    height: 44px;
    width: 34px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
