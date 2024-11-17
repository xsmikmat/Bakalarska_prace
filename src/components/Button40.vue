<template>
  <div :class="$style.button" @click="onButtonContainerClick">
    <div :class="$style.oUbytovn">O ubytování</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button40",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/o-ubytovn-mc14");
      },
    },
  });
</script>
<style module>
  .oUbytovn {
    height: 15px;
    width: 81px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button {
    width: 80px;
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
