<template>
  <div :class="$style.button6" @click="onProperty1ButtonContainerClick">
    <div :class="$style.rezervace1">Rezervace</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1Button8",
    methods: {
      onProperty1ButtonContainerClick() {
        this.$router.push("/rezervace-mc14");
      },
    },
  });
</script>
<style module>
  .rezervace1 {
    height: 15px;
    width: 73px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
</style>
