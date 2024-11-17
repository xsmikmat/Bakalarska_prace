<template>
  <div :class="$style.vtejteVPenzionuMikmtorParent">
    <h1 :class="$style.vtejteVPenzionuContainer">
      <p :class="$style.vtejteVPenzionu">Vítejte v Penzionu</p>
      <p :class="$style.vtejteVPenzionu">Šmikmátor</p>
    </h1>
    <header :class="$style.component1">
      <div :class="$style.button" @click="onButtonContainerClick">
        <a :class="$style.oUbytovn">O ubytování</a>
      </div>
      <div :class="$style.button1" @click="onButtonContainerClick1">
        <a :class="$style.okol">Okolí</a>
      </div>
      <div :class="$style.button2" @click="onButtonContainerClick2">
        <a :class="$style.fotogalerie">Fotogalerie</a>
      </div>
      <div
        :class="$style.property1button"
        @click="onProperty1ButtonContainerClick"
      >
        <a :class="$style.rezervace">Rezervace</a>
      </div>
      <div :class="$style.button3" @click="onButtonContainerClick3">
        <a :class="$style.konrtakt">Konrtakt</a>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent1",
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
  }
  .okol {
    text-decoration: none;
    height: 15px;
    width: 35px;
    position: relative;
    line-height: 15px;
    color: inherit;
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
  .rezervace {
    text-decoration: none;
    position: relative;
    font-weight: 600;
    color: inherit;
  }
  .property1button {
    height: 40px;
    width: 100px;
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-6xl);
    box-sizing: border-box;
    cursor: pointer;
    z-index: 5;
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
  }
  .konrtakt {
    text-decoration: none;
    height: 15px;
    width: 59px;
    position: relative;
    line-height: 15px;
    color: inherit;
    display: inline-block;
    flex-shrink: 0;
  }
  .button3 {
    height: 44px;
    width: 58px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
    z-index: 4;
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
    position: relative;
    width: 100%;
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
    font-family: var(--heading-1);
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
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }
  }
  @media screen and (max-width: 450px) {
    .vtejteVPenzionuContainer {
      min-width: 100%;
    }

    .vtejteVPenzionuMikmtorParent {
      gap: var(--gap-9xl);
    }
  }
</style>