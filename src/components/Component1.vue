<template>
  <div
    :class="$style.button"
    @click="onButtonContainerClick"
    :data-property1="property1"
    :style="buttonStyle"
  >
    <a :class="$style.oUbytovn" :style="oUbytovnStyle">{{oUbytovn}}</a>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Component1",
    props: {
      oUbytovn: { type: String },
      property1: { type: String, default: "O ubytování" },
      property1OUbytovnWidth: {
        type: [Object, Array, String, Number, Boolean],
      },
      property1OUbytovnHeight: {
        type: [Object, Array, String, Number, Boolean],
      },
      buttonAlignItems: { type: String },
      buttonJustifyContent: { type: String },
      buttonPadding: { type: [Object, Array, String, Number, Boolean] },
      buttonBorderRadius: { type: String },
      buttonBackgroundColor: { type: String },
      buttonOverflow: { type: String },
      oUbytovnWidth: { type: [Object, Array, String, Number, Boolean] },
      oUbytovnHeight: { type: [Object, Array, String, Number, Boolean] },
      oUbytovnColor: { type: String },
      oUbytovnDisplay: { type: String },
      oUbytovnFontWeight: { type: String },
      onButtonContainerClick: { type: Function },
    },
    methods: {
      onButtonContainerClick1() {
        this.$router.push("/o-ubytovn-mc14");
      },
    },
    computed: {
      buttonStyle(): CSS.Properties {
        return {
          width: this.property1OUbytovnWidth,
          height: this.property1OUbytovnHeight,
          alignItems: this.buttonAlignItems,
          justifyContent: this.buttonJustifyContent,
          padding: this.buttonPadding,
          borderRadius: this.buttonBorderRadius,
          backgroundColor: this.buttonBackgroundColor,
          overflow: this.buttonOverflow,
        };
      },
      oUbytovnStyle(): CSS.Properties {
        return {
          width: this.oUbytovnWidth,
          height: this.oUbytovnHeight,
          color: this.oUbytovnColor,
          display: this.oUbytovnDisplay,
          fontWeight: this.oUbytovnFontWeight,
        };
      },
    },
  });
</script>
<style module>
  .oUbytovn {
    text-decoration: none;
    height: 15px;
    width: 81px;
    position: relative;
    line-height: 15px;
    color: inherit;
    display: inline-block;
    flex-shrink: 0;
  }
  .button {
    height: 44px;
    width: 80px;
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
