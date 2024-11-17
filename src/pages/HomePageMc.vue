<template>
  <div :class="$style.homePageMc14">
    <section />
    <section :class="$style.content">
      <div :class="$style.main">
        <div :class="$style.section">
          <h1 :class="$style.oPenzionuMikmtor">O penzionu Šmikmátor</h1>
          <div :class="$style.section1">
            <List3
              spolecnePrsotory021="/spolecne-prsotory-02-1@2x.png"
              title="Rodinné zázemí"
            /><List3
              spolecnePrsotory021="/spolecne-prsotory-03-1@2x.png"
              title="Široké vybavení"
            /><List3
              spolecnePrsotory021="/okoli-07-1@2x.png"
              title="Krásná příroda"
            />
            <div :class="$style.iconButtons">
              <div :class="$style.button" @click="onButtonContainerClick">
                <div :class="$style.vceInformac">Více informací</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.activities">
        <div :class="$style.section2">
          <div :class="$style.activitiesTitle">
            <h1 :class="$style.oPenzionuMikmtor">Zážitky a aktivity v okolí</h1>
          </div>
          <div :class="$style.loremIpsumDolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
            ipsum
          </div>
          <div :class="$style.activitiesButton">
            <div :class="$style.button1" @click="onButtonContainerClick1">
              <div :class="$style.vceInformac">Více informací</div>
            </div>
          </div>
        </div>
        <Section1
          upravenoLogo11="/upraveno-logo-1-1-1@2x.png"
          vector200="/vector-200-4.svg"
        />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Section from "../components/Section.vue";
  import List3 from "../components/List3.vue";
  import Section1 from "../components/Section1.vue";

  export default defineComponent({
    name: "HomePageMc",
    components: { Section, List3, Section1 },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/o-ubytovn-mc14");
      },
      onButtonContainerClick1() {
        this.$router.push("/okol-mc14");
      },
    },
  });
</script>
<style module>
  .oPenzionuMikmtor {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 100px;
    font-weight: 400;
    font-family: inherit;
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
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-5xl);
    flex-shrink: 0;
    cursor: pointer;
  }
  .iconButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 540px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .section1 {
    height: 714px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    padding: 13.5px 126px;
    box-sizing: border-box;
    gap: 67px 63px;
    max-width: 100%;
    text-align: left;
    font-size: var(--subtext-size);
    color: var(--color-darkseagreen);
    font-family: var(--subtext);
  }
  .section {
    width: 1504px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: var(--padding-41xl) 0px 0px;
    box-sizing: border-box;
    gap: 100px;
    max-width: 100%;
  }
  .main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-9xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .activitiesTitle {
    width: 859px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    font-size: var(--heading-1-size);
    font-family: var(--heading-1);
  }
  .loremIpsumDolor {
    height: 120px;
    position: relative;
    line-height: 44px;
    font-weight: 600;
    color: var(--color-gray-100);
    display: inline-block;
    flex-shrink: 0;
  }
  .button1 {
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
  }
  .activitiesButton {
    width: 665px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    text-align: left;
    color: var(--color-darkseagreen);
  }
  .section2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-41xl) 176px;
    box-sizing: border-box;
    gap: 19px;
    max-width: 100%;
  }
  .activities {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
    max-width: 100%;
    font-size: var(--subtext-size);
    font-family: var(--subtext);
  }
  .content {
    align-self: stretch;
    height: 1629px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    text-align: center;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
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
    gap: 784px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1425px) {
    .iconButtons {
      padding-left: var(--padding-251xl);
      padding-right: var(--padding-251xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 825px) {
    .oPenzionuMikmtor {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .iconButtons {
      padding-left: var(--padding-116xl);
      padding-right: var(--padding-116xl);
      box-sizing: border-box;
    }

    .section1 {
      gap: 31px;
      padding-left: var(--padding-44xl);
      padding-right: var(--padding-44xl);
      box-sizing: border-box;
    }

    .section {
      gap: 50px;
      padding-top: var(--padding-20xl);
      box-sizing: border-box;
    }

    .section2 {
      padding-left: var(--padding-69xl);
      padding-right: var(--padding-69xl);
      box-sizing: border-box;
    }

    .homePageMc14 {
      gap: 392px;
    }
  }
  @media screen and (max-width: 450px) {
    .oPenzionuMikmtor {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .iconButtons {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .section1 {
      gap: var(--gap-base);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .section {
      gap: 25px;
      padding-top: var(--padding-6xl);
      box-sizing: border-box;
    }

    .loremIpsumDolor {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .section2 {
      padding: var(--padding-20xl) var(--padding-xl);
      box-sizing: border-box;
    }

    .homePageMc14 {
      gap: 196px;
    }
  }
</style>