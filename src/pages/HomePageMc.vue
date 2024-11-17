<template>
  <div :class="$style.homePageMc14">
    <section :class="$style.sectionWrapper"><section /></section>
    <section :class="$style.homePageMc14Inner">
      <div :class="$style.frameParent">
        <div :class="$style.vtejteUNsNaPenzionuWrapper">
          <h1 :class="$style.vtejteUNs">Vítejte u nás na penzionu</h1>
        </div>
        <div :class="$style.loremIpsumDolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
          ipsum
        </div>
        <div :class="$style.introButtonsWrapper">
          <div :class="$style.introButtons">
            <div :class="$style.button" @click="onButtonContainerClick">
              <h1 :class="$style.rezervovat">Rezervovat</h1>
            </div>
            <div :class="$style.button1" @click="onButtonContainerClick1">
              <h1 :class="$style.kontakt">Kontakt</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section :class="$style.sectionWrapper">
      <div :class="$style.section">
        <img
          :class="$style.image1Icon"
          loading="lazy"
          alt=""
          src="/image-12@2x.png"
        />
        <img
          :class="$style.image2Icon"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          :class="$style.image3Icon"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </section>
    <section :class="$style.sectionFrame">
      <div :class="$style.section1">
        <h1 :class="$style.oPenzionuMikmtor">O penzionu Šmikmátor</h1>
        <div :class="$style.section2">
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
            <div :class="$style.button2" @click="onButtonContainerClick2">
              <div :class="$style.vceInformac">Více informací</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section :class="$style.frameSection">
      <div :class="$style.section3">
        <div :class="$style.zitkyAAktivityVOkolWrapper">
          <h1 :class="$style.oPenzionuMikmtor">Zážitky a aktivity v okolí</h1>
        </div>
        <div :class="$style.loremIpsumDolor1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
          ipsum
        </div>
        <div :class="$style.buttonWrapper">
          <div :class="$style.button3" @click="onButtonContainerClick3">
            <div :class="$style.vceInformac">Více informací</div>
          </div>
        </div>
      </div>
    </section>
    <Section1
      upravenoLogo11="/upraveno-logo-1-1-1@2x.png"
      vector200="/vector-200-4.svg"
    />
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
        this.$router.push("/rezervace-mc14");
      },
      onButtonContainerClick1() {
        this.$router.push("/kontakt-mc14");
      },
      onButtonContainerClick2() {
        this.$router.push("/o-ubytovn-mc14");
      },
      onButtonContainerClick3() {
        this.$router.push("/okol-mc14");
      },
    },
  });
</script>
<style module>
  .sectionWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-41xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .vtejteUNs {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 100px;
    font-weight: 400;
    font-family: inherit;
  }
  .vtejteUNsNaPenzionuWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 276px;
  }
  .loremIpsumDolor {
    height: 120px;
    position: relative;
    font-size: var(--subtext-size);
    line-height: 44px;
    font-weight: 600;
    font-family: var(--subtext);
    color: var(--color-gray-100);
    display: inline-block;
    flex-shrink: 0;
  }
  .rezervovat {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 44px;
    font-weight: 400;
    font-family: inherit;
  }
  .button {
    height: 64px;
    border-radius: var(--br-3xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-seagreen);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-3xl) var(--padding-5xs)
      var(--padding-6xl);
    cursor: pointer;
  }
  .kontakt {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 44px;
    font-weight: 400;
    font-family: inherit;
  }
  .button1 {
    width: 222px;
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-5xl) var(--padding-3xs)
      var(--padding-6xl);
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    color: var(--color-darkseagreen);
  }
  .introButtons {
    width: 529px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .introButtonsWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--m3-headline-large-size);
    color: var(--color-seagreen);
  }
  .frameParent {
    width: 1151px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-25xl);
    max-width: 100%;
  }
  .homePageMc14Inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 44px var(--padding-9xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }
  .image1Icon {
    margin-top: -1px;
    height: 250px;
    width: 398px;
    position: relative;
    flex-shrink: 0;
    object-fit: cover;
  }
  .image2Icon {
    margin-top: -1px;
    height: 250px;
    width: 425px;
    position: relative;
    flex-shrink: 0;
    object-fit: cover;
  }
  .image3Icon {
    margin-top: -1px;
    height: 250px;
    width: 364px;
    position: relative;
    flex-shrink: 0;
    object-fit: cover;
  }
  .section {
    flex: 1;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 95px;
    box-sizing: border-box;
    gap: 67px;
    max-width: 100%;
  }
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
  .button2 {
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
  .section2 {
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
  .section1 {
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
  .sectionFrame {
    align-self: stretch;
    height: 870px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-9xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }
  .zitkyAAktivityVOkolWrapper {
    width: 859px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    font-size: var(--heading-1-size);
    font-family: var(--heading-1);
  }
  .loremIpsumDolor1 {
    height: 120px;
    position: relative;
    line-height: 44px;
    font-weight: 600;
    color: var(--color-gray-100);
    display: inline-block;
    flex-shrink: 0;
  }
  .button3 {
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
  .buttonWrapper {
    width: 665px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    text-align: left;
    color: var(--color-darkseagreen);
  }
  .section3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-41xl) 176px;
    box-sizing: border-box;
    gap: 19px;
    max-width: 100%;
  }
  .frameSection {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-9xs);
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
  @media screen and (max-width: 1200px) {
    .vtejteUNsNaPenzionuWrapper {
      padding-left: var(--padding-119xl);
      padding-right: var(--padding-119xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 825px) {
    .vtejteUNs {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .vtejteUNsNaPenzionuWrapper {
      padding-left: var(--padding-50xl);
      padding-right: var(--padding-50xl);
      box-sizing: border-box;
    }

    .rezervovat {
      font-size: var(--font-size-7xl);
      line-height: 35px;
    }

    .kontakt {
      font-size: var(--font-size-7xl);
      line-height: 35px;
    }

    .introButtons {
      flex-wrap: wrap;
      justify-content: center;
    }

    .frameParent {
      gap: var(--gap-3xl);
    }

    .section {
      gap: 33px;
      padding-left: var(--padding-28xl);
      padding-right: var(--padding-28xl);
      box-sizing: border-box;
    }

    .oPenzionuMikmtor {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .iconButtons {
      padding-left: var(--padding-116xl);
      padding-right: var(--padding-116xl);
      box-sizing: border-box;
    }

    .section2 {
      gap: 31px;
      padding-left: var(--padding-44xl);
      padding-right: var(--padding-44xl);
      box-sizing: border-box;
    }

    .section1 {
      gap: 50px;
      padding-top: var(--padding-20xl);
      box-sizing: border-box;
    }

    .section3 {
      padding-left: var(--padding-69xl);
      padding-right: var(--padding-69xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .vtejteUNs {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .vtejteUNsNaPenzionuWrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .loremIpsumDolor {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .rezervovat {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .kontakt {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .homePageMc14Inner {
      padding-bottom: 29px;
      box-sizing: border-box;
    }

    .section {
      gap: var(--gap-mid);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .oPenzionuMikmtor {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .iconButtons {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .section2 {
      gap: var(--gap-base);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .section1 {
      gap: 25px;
      padding-top: var(--padding-6xl);
      box-sizing: border-box;
    }

    .loremIpsumDolor1 {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .section3 {
      padding: var(--padding-20xl) var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>