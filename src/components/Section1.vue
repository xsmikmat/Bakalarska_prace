<template>
  <footer :class="$style.section" :style="sectionStyle">
    <div :class="$style.footerLogo">
      <img
        :class="$style.upravenoLogo11"
        loading="lazy"
        alt=""
        :src="upravenoLogo11"
      />
    </div>
    <div :class="$style.footerInfo">
      <div :class="$style.container">
        <h1 :class="$style.title">Šmikmátor</h1>
        <div :class="$style.description">Penzion v srdci České Kanady</div>
      </div>
    </div>
    <img :class="$style.sectionChild" alt="" :src="vector200" />
    <div :class="$style.component1">
      <Button28 /><Button29 /><Button30 /><Property1Button7 /><Button31 />
    </div>
  </footer>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";
  import Button28 from "./Button28.vue";
  import Button29 from "./Button29.vue";
  import Button30 from "./Button30.vue";
  import Property1Button7 from "./Property1Button7.vue";
  import Button31 from "./Button31.vue";

  export default defineComponent({
    name: "Section1",
    components: { Button28, Button29, Button30, Property1Button7, Button31 },
    props: {
      upravenoLogo11: { type: String },
      vector200: { type: String },
      sectionAlignSelf: { type: String },
    },
    computed: {
      sectionStyle(): CSS.Properties {
        return {
          alignSelf: this.sectionAlignSelf,
        };
      },
    },
  });
</script>
<style module>
  .upravenoLogo11 {
    align-self: stretch;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .footerLogo {
    height: 208.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-80xl-5) 0px 0px;
    box-sizing: border-box;
  }
  .title {
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
  .container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .footerInfo {
    width: 559px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-51xl) 0px 0px;
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
  .section {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs-5) var(--padding-187xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }

  @media screen and (max-width: 1425px) {
    .section {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 825px) {
    .title {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .section {
      gap: var(--gap-11xl);
      padding-left: var(--padding-84xl);
      padding-right: var(--padding-84xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .description {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .section {
      gap: var(--gap-mini);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
