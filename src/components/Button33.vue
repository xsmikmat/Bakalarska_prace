<template>
  <div :class="$style.button5" @click="onButtonContainerClick">
    <div :class="$style.okol">Okolí</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button33",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/okol-mc14");
      },
    },
  });
</script>
<style module>
  .button5 {
    width: 34px;
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
