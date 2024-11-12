<template>
  <div :class="$style.homePageMc14">
    <section :class="$style.frameParent">
      <FrameComponent1 />
      <div :class="$style.loremIpsumDolorSitAmetCoWrapper">
        <div :class="$style.loremIpsumDolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
          ipsum
        </div>
      </div>
      <FrameComponent2 />
    </section>
    <section :class="$style.oPenzionuMikmtorWrapper">
      <h1 :class="$style.oPenzionuMikmtor">O penzionu Šmikmátor</h1>
    </section>
    <FrameComponent3 />
    <section :class="$style.activitiesContentWrapper">
      <div :class="$style.activitiesContent">
        <div :class="$style.activitiesTitle">
          <h1 :class="$style.zitkyAAktivity">Zážitky a aktivity v okolí</h1>
        </div>
        <div :class="$style.loremIpsumDolor1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
          ipsum
        </div>
        <div :class="$style.buttonWrapper">
          <div :class="$style.button" @click="onButtonContainerClick">
            <div :class="$style.vceInformac">Více informací</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent1 from "../components/FrameComponent1.vue";
  import FrameComponent2 from "../components/FrameComponent2.vue";
  import FrameComponent3 from "../components/FrameComponent3.vue";

  export default defineComponent({
    name: "HomePageMc",
    components: { FrameComponent1, FrameComponent2, FrameComponent3 },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/okol-mc14");
      },
    },
  });
</script>
<style module>
  .loremIpsumDolor {
    flex: 1;
    position: relative;
    line-height: 44px;
    font-weight: 600;
    display: inline-block;
    max-width: 100%;
  }
  .loremIpsumDolorSitAmetCoWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 164px 0px var(--padding-91xl);
    box-sizing: border-box;
    min-height: 120px;
    max-width: 100%;
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 37px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--subtext-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }
  .oPenzionuMikmtor {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 100px;
    font-weight: 400;
    font-family: inherit;
  }
  .oPenzionuMikmtorWrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 402px 0px 403px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-2);
  }
  .zitkyAAktivity {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 100px;
    font-weight: 400;
    font-family: inherit;
  }
  .activitiesTitle {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 291px 0px 292px;
    font-size: var(--heading-1-size);
    font-family: var(--heading-2);
  }
  .loremIpsumDolor1 {
    position: relative;
    line-height: 44px;
    font-weight: 600;
    color: var(--color-gray-100);
    z-index: 1;
  }
  .vceInformac {
    position: relative;
    line-height: 44px;
    font-weight: 600;
  }
  .button {
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-5xl) var(--padding-3xs)
      var(--padding-6xl);
    cursor: pointer;
    z-index: 2;
  }
  .buttonWrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 486px 0px 485px;
    text-align: left;
    color: var(--color-darkseagreen);
  }
  .activitiesContent {
    width: 1151px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 284px;
    max-width: 100%;
  }
  .activitiesContentWrapper {
    width: 1371px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--subtext-size);
    color: var(--color-black);
    font-family: var(--subtext);
  }
  .homePageMc14 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs) 1033px 67px;
    box-sizing: border-box;
    gap: 116px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .loremIpsumDolorSitAmetCoWrapper {
      padding-left: 55px;
      padding-right: 82px;
      box-sizing: border-box;
    }

    .oPenzionuMikmtorWrapper {
      padding-left: var(--padding-182xl);
      padding-right: var(--padding-182xl);
      box-sizing: border-box;
    }

    .activitiesTitle {
      padding-left: 146px;
      padding-right: 145px;
      box-sizing: border-box;
    }

    .buttonWrapper {
      padding-left: 242px;
      padding-right: 243px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .oPenzionuMikmtor {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .zitkyAAktivity {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }
  }
  @media screen and (max-width: 750px) {
    .loremIpsumDolorSitAmetCoWrapper {
      padding-left: 27px;
      padding-right: 41px;
      box-sizing: border-box;
    }

    .oPenzionuMikmtorWrapper {
      padding-left: var(--padding-81xl);
      padding-right: var(--padding-81xl);
      box-sizing: border-box;
    }

    .activitiesTitle {
      padding-left: var(--padding-54xl);
      padding-right: 72px;
      box-sizing: border-box;
    }

    .buttonWrapper {
      padding-left: var(--padding-102xl);
      padding-right: var(--padding-102xl);
      box-sizing: border-box;
    }

    .homePageMc14 {
      gap: 58px;
      padding-left: 33px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .loremIpsumDolor {
      font-size: var(--m3-body-large-size);
      line-height: 35px;
    }

    .oPenzionuMikmtor {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .oPenzionuMikmtorWrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .zitkyAAktivity {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .activitiesTitle {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .loremIpsumDolor1 {
      font-size: var(--m3-body-large-size);
      line-height: 35px;
    }

    .buttonWrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .homePageMc14 {
      gap: 29px;
    }
  }
</style>
