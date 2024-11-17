<template>
  <div :class="$style.footer">
    <div :class="$style.footerContent">
      <div :class="$style.footerTop">
        <img
          :class="$style.upravenoLogo11"
          loading="lazy"
          alt=""
          :src="upravenoLogo11"
        />
      </div>
      <div :class="$style.footerDescriptionContainerWrapper">
        <div :class="$style.footerDescriptionContainer">
          <h1 :class="$style.title">Šmikmátor</h1>
          <div :class="$style.description">Penzion v srdci České Kanady</div>
        </div>
      </div>
      <div :class="$style.component1">
        <Button40 /><Button41 /><Button42 /><Property1Button10 /><Button43 />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Button40 from "./Button40.vue";
  import Button41 from "./Button41.vue";
  import Button42 from "./Button42.vue";
  import Property1Button10 from "./Property1Button10.vue";
  import Button43 from "./Button43.vue";

  export default defineComponent({
    name: "Footer",
    components: { Button40, Button41, Button42, Property1Button10, Button43 },
    props: {
      upravenoLogo11: { type: String },
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
  .footerTop {
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
  .footerDescriptionContainer {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .footerDescriptionContainerWrapper {
    width: 559px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-51xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
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
  .footerContent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-41xl);
    max-width: 100%;
  }
  .footer {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-9xl) 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }

  @media screen and (max-width: 1200px) {
    .footerContent {
      gap: var(--gap-11xl);
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1050px) {
    .title {
      font-size: var(--font-size-23xl);
      line-height: 80px;
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
  }
</style>
