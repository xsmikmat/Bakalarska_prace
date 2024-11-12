<template>
  <div :class="$style.vtejteVPenzionuMikmtorParent">
    <h1 :class="$style.vtejteVPenzionuContainer">
      <p :class="$style.vtejteVPenzionu">Vítejte v Penzionu</p>
      <p :class="$style.vtejteVPenzionu">Šmikmátor</p>
    </h1>
    <header :class="$style.component1">
      <Component1
        property1="O ubytování"
        oUbytovn="O ubytování"
        :onButtonContainerClick="onButtonContainerClick"
      /><Component1
        property1="Okolí"
        property1OUbytovnWidth="34px"
        property1OUbytovnHeight="44px"
        oUbytovn="Okolí"
        :onButtonContainerClick="onButtonContainerClick1"
        buttonAlignItems="flex-start"
        buttonJustifyContent="flex-start"
        buttonPadding="14px 0px 15px"
        buttonBorderRadius="unset"
        buttonBackgroundColor="unset"
        buttonOverflow="unset"
        oUbytovnWidth="35px"
        oUbytovnHeight="15px"
        oUbytovnColor="#807e7f"
        oUbytovnDisplay="inline-block"
        oUbytovnFontWeight="unset"
      /><Component1
        property1="Fotogalerie"
        property1OUbytovnWidth="77px"
        property1OUbytovnHeight="44px"
        oUbytovn="Fotogalerie"
        :onButtonContainerClick="onButtonContainerClick2"
        buttonAlignItems="flex-start"
        buttonJustifyContent="flex-start"
        buttonPadding="14px 0px 15px"
        buttonBorderRadius="unset"
        buttonBackgroundColor="unset"
        buttonOverflow="unset"
        oUbytovnWidth="78px"
        oUbytovnHeight="15px"
        oUbytovnColor="#807e7f"
        oUbytovnDisplay="inline-block"
        oUbytovnFontWeight="unset"
      /><Component1
        property1="Button"
        property1OUbytovnWidth="100px"
        property1OUbytovnHeight="40px"
        oUbytovn="Rezervace"
        :onButtonContainerClick="onProperty1ButtonContainerClick"
        buttonAlignItems="center"
        buttonJustifyContent="center"
        buttonPadding="10px 25px"
        buttonBorderRadius="10px"
        buttonBackgroundColor="#02633e"
        buttonOverflow="hidden"
        oUbytovnWidth="unset"
        oUbytovnHeight="unset"
        oUbytovnColor="#bedebd"
        oUbytovnDisplay="unset"
        oUbytovnFontWeight="600"
      /><Component1
        property1="Konrtakt"
        property1OUbytovnWidth="58px"
        property1OUbytovnHeight="44px"
        oUbytovn="Konrtakt"
        :onButtonContainerClick="onButtonContainerClick3"
        buttonAlignItems="flex-start"
        buttonJustifyContent="flex-start"
        buttonPadding="14px 0px 15px"
        buttonBorderRadius="unset"
        buttonBackgroundColor="unset"
        buttonOverflow="unset"
        oUbytovnWidth="59px"
        oUbytovnHeight="15px"
        oUbytovnColor="#807e7f"
        oUbytovnDisplay="inline-block"
        oUbytovnFontWeight="unset"
      />
    </header>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Component1 from "./Component1.vue";

  export default defineComponent({
    name: "FrameComponent1",
    components: { Component1 },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/o-ubytovn-mc14");
      },
      onButtonContainerClick1() {
        this.$router.push("/okol-mc14");
      },
      onButtonContainerClick2() {
        this.$router.push("/fotogalerie-mc14");
      },
      onProperty1ButtonContainerClick() {
        this.$router.push("/rezervace-mc14");
      },
      onButtonContainerClick3() {
        this.$router.push("/kontakt-mc14");
      },
    },
  });
</script>
<style module>
  .vtejteVPenzionu {
    margin: 0;
  }
  .vtejteVPenzionuContainer {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 100px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
  }
  .component1 {
    margin-top: -126px;
    height: 84px;
    width: 473px;
    border-radius: var(--br-8xs);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-2xl);
    text-align: left;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }
  .vtejteVPenzionuMikmtorParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-105xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-37xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-2);
  }

  @media screen and (max-width: 1050px) {
    .vtejteVPenzionuContainer {
      font-size: var(--font-size-23xl);
      line-height: 80px;
      flex: 1;
    }

    .vtejteVPenzionuMikmtorParent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 750px) {
    .vtejteVPenzionuContainer {
      min-width: 100%;
    }

    .vtejteVPenzionuMikmtorParent {
      gap: var(--gap-9xl);
    }
  }
  @media screen and (max-width: 450px) {
    .vtejteVPenzionuContainer {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }
  }
</style>
