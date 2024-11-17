<template>
  <div :class="$style.kontaktMc14">
    <section />
    <List /><List1 />
    <section :class="$style.mainContent">
      <div :class="$style.section">
        <div :class="$style.image">
          <img :class="$style.imageIcon" alt="" src="/image.svg" />
          <div :class="$style.locationIconContainer">
            <img
              :class="$style.icLocationIcon"
              loading="lazy"
              alt=""
              src="/iclocation.svg"
            />
          </div>
          <div :class="$style.title">Location Map</div>
        </div>
        <img :class="$style.sectionChild" alt="" src="/vector-200-1.svg" />
      </div>
      <footer :class="$style.section1">
        <div :class="$style.logoContainerTwo">
          <img
            :class="$style.upravenoLogo11"
            loading="lazy"
            alt=""
            src="/upraveno-logo-1-1@2x.png"
          />
        </div>
        <div :class="$style.descriptionContent">
          <div :class="$style.titleParent">
            <h1 :class="$style.title1">Šmikmátor</h1>
            <div :class="$style.description">Penzion v srdci České Kanady</div>
          </div>
        </div>
        <img :class="$style.sectionChild" alt="" src="/vector-200-4.svg" />
        <div :class="$style.component1">
          <div :class="$style.button" @click="onButtonContainerClick">
            <div :class="$style.oUbytovn">O ubytování</div>
          </div>
          <div :class="$style.button1" @click="onButtonContainerClick1">
            <div :class="$style.okol">Okolí</div>
          </div>
          <div :class="$style.property1button" @click="onButtonContainerClick2">
            <div :class="$style.fotogalerie">Fotogalerie</div>
          </div>
          <div
            :class="$style.property1button"
            @click="onProperty1ButtonContainerClick"
          >
            <div :class="$style.rezervace">Rezervace</div>
          </div>
          <div :class="$style.button3" @click="onButtonContainerClick3">
            <div :class="$style.kontakt">Kontakt</div>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Section from "../components/Section.vue";
  import List from "../components/List.vue";
  import List1 from "../components/List1.vue";

  export default defineComponent({
    name: "KontaktMc",
    components: { Section, List, List1 },
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
  .imageIcon {
    width: 1100px;
    height: 1100px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 550px);
    left: calc(50% - 550px);
    overflow: hidden;
    flex-shrink: 0;
  }
  .icLocationIcon {
    height: 24px;
    width: 24px;
    position: relative;
    z-index: 1;
  }
  .locationIconContainer {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
  }
  .title {
    align-self: stretch;
    position: relative;
    line-height: 22px;
    font-weight: 500;
    z-index: 1;
  }
  .image {
    flex: 1;
    border-radius: var(--br-7xs);
    background-color: var(--color-gray-400);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 122px var(--padding-mini) var(--padding-97xl) var(--padding-base);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-5xs);
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
    justify-content: flex-start;
    padding: 64px var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    max-width: 100%;
  }
  .upravenoLogo11 {
    align-self: stretch;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .logoContainerTwo {
    height: 208.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-80xl-5) 0px 0px;
    box-sizing: border-box;
  }
  .title1 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 100px;
    font-weight: 400;
    font-family: inherit;
  }
  .description {
    align-self: stretch;
    position: relative;
    font-size: var(--subtext-size);
    line-height: 44px;
    font-weight: 600;
    font-family: var(--subtext);
    color: var(--color-gray-100);
  }
  .titleParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .descriptionContent {
    width: 559px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-51xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
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
  .fotogalerie {
    height: 15px;
    width: 78px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .rezervace {
    height: 15px;
    width: 73px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .property1button {
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
  .kontakt {
    height: 15px;
    width: 53px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button3 {
    width: 58px;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) 0px var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
  }
  .component1 {
    height: 308px;
    width: 260px;
    border-radius: var(--br-8xs);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl) var(--padding-xl) var(--padding-49xl);
    box-sizing: border-box;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }
  .section1 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-12xs) var(--padding-187xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    z-index: 1;
    margin-top: -1px;
    text-align: left;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }
  .mainContent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-base);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }
  .kontaktMc14 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1425px) {
    .section1 {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 825px) {
    .section {
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }

    .title1 {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .section1 {
      gap: var(--gap-11xl);
      padding-left: var(--padding-84xl);
      padding-right: var(--padding-84xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .section {
      padding: var(--padding-23xl) var(--padding-xl);
      box-sizing: border-box;
    }

    .title1 {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .description {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .section1 {
      gap: var(--gap-mini);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>