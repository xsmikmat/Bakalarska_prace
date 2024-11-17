<template>
  <header :class="$style.section">
    <img
      :class="$style.upravenoLogo11"
      loading="lazy"
      alt=""
      src="/upraveno-logo-1-1@2x.png"
      @click="onUpravenoLogoClick"
    />
    <div :class="$style.penzionVSrdciEskKanadyWrapper">
      <h1 :class="$style.penzionVSrdci">Penzion v srdci České Kanady</h1>
    </div>
    <div :class="$style.component1Wrapper">
      <div :class="$style.component1">
        <div :class="$style.button" @click="onButtonContainerClick">
          <a :class="$style.oUbytovn">O ubytování</a>
        </div>
        <div :class="$style.button1" @click="onButtonContainerClick1">
          <div :class="$style.okol">Okolí</div>
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
          <a :class="$style.kontakt">Kontakt</a>
        </div>
      </div>
    </div>
    <img
      :class="$style.sectionChild"
      loading="lazy"
      alt=""
      src="/vector-200-1.svg"
    />
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Section",
    methods: {
      onUpravenoLogoClick() {
        this.$router.push("/");
      },
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
  .upravenoLogo11 {
    height: 109px;
    width: 153px;
    position: relative;
    object-fit: cover;
    cursor: pointer;
  }
  .penzionVSrdci {
    margin: 0;
    align-self: stretch;
    height: 91px;
    position: relative;
    font-size: inherit;
    line-height: 44px;
    font-weight: 400;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .penzionVSrdciEskKanadyWrapper {
    width: 454px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) 0px 0px;
    box-sizing: border-box;
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
  }
  .kontakt {
    text-decoration: none;
    height: 15px;
    width: 53px;
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
    width: 473px;
    height: 84px;
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
    z-index: 1;
  }
  .component1Wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi-5) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .sectionChild {
    height: 0.5px;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: -0.5px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
  }
  .section {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-4xl-5) var(--padding-37xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 1200px) {
    .penzionVSrdci {
      display: none;
    }

    .penzionVSrdciEskKanadyWrapper {
      width: 0px;
    }
  }
  @media screen and (max-width: 825px) {
    .section {
      padding-left: var(--padding-9xl);
      padding-right: var(--padding-9xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .component1 {
      display: none;
    }
  }
</style>
