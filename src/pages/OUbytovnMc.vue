<template>
  <div :class="$style.oUbytovnMc14">
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
    <section :class="$style.section1">
      <div :class="$style.containerWrapper">
        <div :class="$style.container">
          <h1 :class="$style.title">O našem ubytování</h1>
          <div :class="$style.description">
            Zažijte pohodlné ubytování v okolí krásné přírody
          </div>
        </div>
      </div>
      <div :class="$style.imageContainer">
        <img
          :class="$style.image1Icon"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <img :class="$style.sectionChild" alt="" src="/vector-200-1.svg" />
    </section>
    <section :class="$style.products">
      <div :class="$style.imageContainer1">
        <img
          :class="$style.imageIcon"
          loading="lazy"
          alt=""
          src="/image1@2x.png"
        />
      </div>
      <div :class="$style.container1">
        <div :class="$style.container2">
          <h1 :class="$style.title1">Prohlédněte si naše pokoje</h1>
        </div>
        <div :class="$style.list">
          <div :class="$style.row">
            <div :class="$style.card">
              <div :class="$style.imageContainer2">
                <div :class="$style.image">
                  <div :class="$style.title2">Apartment 1</div>
                  <div :class="$style.tag">
                    <div :class="$style.text">Child bed available</div>
                  </div>
                  <img
                    :class="$style.sObrazem1"
                    loading="lazy"
                    alt=""
                    src="/s-obrazem-1@2x.png"
                  />
                </div>
              </div>
              <div :class="$style.textContent">
                <div
                  :class="$style.component1variant6"
                  @click="onButtonContainerClick2"
                >
                  <div :class="$style.potvrditRezervaci">Fotogalerie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img :class="$style.sectionChild" alt="" src="/vector-200-1.svg" />
    </section>
    <section :class="$style.contents">
      <div :class="$style.container3">
        <div :class="$style.containerFrame">
          <div :class="$style.container">
            <h1 :class="$style.title">Co nabízíme dál</h1>
            <div :class="$style.description">
              Relax and enjoy various activities
            </div>
          </div>
        </div>
        <div :class="$style.imageContainer3">
          <div :class="$style.image1" />
        </div>
      </div>
      <div :class="$style.list1">
        <div :class="$style.row1">
          <div :class="$style.article">
            <div :class="$style.imageContainer4">
              <img :class="$style.imageIcon1" alt="" src="/image-11@2x.png" />
            </div>
            <div :class="$style.titleParent">
              <div :class="$style.title4">Společné prostory</div>
              <div :class="$style.subtitle">
                1 velká společenská místnost s kuchní, 1 místnost s TV
              </div>
            </div>
          </div>
          <div :class="$style.article">
            <div :class="$style.imageContainer5">
              <div :class="$style.image2" />
            </div>
            <div :class="$style.titleParent">
              <div :class="$style.title4">Venkovní aktivity</div>
              <div :class="$style.subtitle">
                Volejbal, pinpong, kulečník, prostor pro kola, ...
              </div>
            </div>
          </div>
          <div :class="$style.article">
            <div :class="$style.imageContainer5">
              <div :class="$style.image2" />
            </div>
            <div :class="$style.titleParent">
              <div :class="$style.title4">Vnitřní aktivity</div>
              <div :class="$style.subtitle2">Šipky, výčep, TV, sauna</div>
            </div>
          </div>
        </div>
      </div>
      <img :class="$style.contentsChild" alt="" src="/vector-200-1.svg" />
    </section>
    <footer :class="$style.section2">
      <div :class="$style.upravenoLogo11Wrapper">
        <img
          :class="$style.upravenoLogo111"
          alt=""
          src="/upraveno-logo-1-1-1@2x.png"
        />
      </div>
      <div :class="$style.frameDiv">
        <div :class="$style.container">
          <h1 :class="$style.title">Šmikmátor</h1>
          <div :class="$style.description">Penzion v srdci České Kanady</div>
        </div>
      </div>
      <img :class="$style.sectionChild" alt="" src="/vector-200-4.svg" />
      <div :class="$style.component11">
        <div :class="$style.button4" @click="onButtonContainerClick">
          <div :class="$style.oUbytovn1">O ubytování</div>
        </div>
        <div :class="$style.button5" @click="onButtonContainerClick1">
          <div :class="$style.okol">Okolí</div>
        </div>
        <div :class="$style.button6" @click="onButtonContainerClick2">
          <div :class="$style.fotogalerie1">Fotogalerie</div>
        </div>
        <div :class="$style.button6" @click="onProperty1ButtonContainerClick">
          <div :class="$style.rezervace1">Rezervace</div>
        </div>
        <div :class="$style.button7" @click="onButtonContainerClick3">
          <div :class="$style.kontakt1">Kontakt</div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "OUbytovnMc",
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
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
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
    text-align: left;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
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
    text-align: center;
    font-size: var(--m3-headline-large-size);
    color: var(--color-black);
    font-family: var(--heading-1);
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
  .containerWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-87xl) 0px 0px;
    box-sizing: border-box;
    min-width: 361px;
    max-width: 100%;
  }
  .image1Icon {
    height: 390px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  .imageContainer {
    height: 380px;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) 0px;
    box-sizing: border-box;
    min-width: 361px;
    max-width: 100%;
  }
  .section1 {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: var(--padding-41xl) var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }
  .imageIcon {
    height: 398px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  .imageContainer1 {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 361px;
    max-width: 100%;
  }
  .title1 {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 44px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
  }
  .container2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .title2 {
    position: absolute;
    width: calc(100% - 31px);
    top: calc(50% - 8px);
    left: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
  }
  .text {
    position: relative;
    line-height: 16px;
    font-weight: 500;
  }
  .tag {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-7xs) 0px var(--br-7xs) 0px;
    background-color: var(--color-gray-400);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-6xs) var(--padding-9xs)
      var(--padding-5xs);
    white-space: nowrap;
    text-align: left;
  }
  .sObrazem1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .image {
    height: 240px;
    width: 556px;
    position: relative;
    background-color: var(--color-gainsboro);
    max-width: 100%;
  }
  .imageContainer2 {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .potvrditRezervaci {
    position: relative;
    font-weight: 600;
  }
  .component1variant6 {
    height: 40px;
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-6xl);
    box-sizing: border-box;
    cursor: pointer;
  }
  .textContent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-lg) var(--padding-192xl) var(--padding-xs);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
    font-family: var(--subtext);
  }
  .card {
    flex: 1;
    border-radius: var(--br-7xs);
    border: 1px solid var(--color-gray-300);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .row {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .list {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-xs);
    font-family: var(--m3-label-large);
  }
  .container1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-25xl);
    min-width: 361px;
    max-width: 100%;
  }
  .products {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-41xl) var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--m3-headline-large-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }
  .containerFrame {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    box-sizing: border-box;
    min-width: 606px;
    max-width: 100%;
  }
  .image1 {
    align-self: stretch;
    width: 180px;
    position: relative;
    background-color: var(--color-gainsboro);
    display: none;
  }
  .imageContainer3 {
    height: 180px;
    width: 180px;
    background-color: var(--color-gainsboro);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .container3 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--gap-41xl);
    max-width: 100%;
  }
  .imageIcon1 {
    height: 100px;
    width: 100px;
    position: relative;
    object-fit: cover;
  }
  .imageContainer4 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .title4 {
    align-self: stretch;
    position: relative;
    line-height: 44px;
    font-weight: 600;
  }
  .subtitle {
    position: relative;
    font-size: var(--text-size);
    line-height: 15px;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .titleParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    min-width: 140px;
  }
  .article {
    flex: 1;
    border-radius: var(--br-7xs);
    border: 1px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) var(--padding-mini);
    gap: var(--gap-base);
    min-width: 273px;
    min-height: 132px;
    max-width: 100%;
  }
  .image2 {
    align-self: stretch;
    width: 100px;
    position: relative;
    background-color: var(--color-gainsboro);
    display: none;
  }
  .imageContainer5 {
    height: 100px;
    width: 100px;
    background-color: var(--color-gainsboro);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 100px;
  }
  .subtitle2 {
    align-self: stretch;
    position: relative;
    font-size: var(--text-size);
    line-height: 15px;
  }
  .row1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--gap-21xl);
    max-width: 100%;
  }
  .list1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl) 0px;
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--subtext-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }
  .contentsChild {
    width: 100%;
    height: 0.5px;
    position: absolute;
    margin: 0 !important;
    right: 0px;
    bottom: -0.5px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .contents {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-102xl-5) var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-1);
  }
  .upravenoLogo111 {
    align-self: stretch;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .upravenoLogo11Wrapper {
    height: 208.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-80xl-5) 0px 0px;
    box-sizing: border-box;
  }
  .frameDiv {
    width: 559px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-51xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .oUbytovn1 {
    height: 15px;
    width: 81px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button4 {
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
  .button5 {
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
  .fotogalerie1 {
    height: 15px;
    width: 78px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button6 {
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
  .rezervace1 {
    height: 15px;
    width: 73px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .kontakt1 {
    height: 15px;
    width: 53px;
    position: relative;
    line-height: 15px;
    display: inline-block;
    flex-shrink: 0;
  }
  .button7 {
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
  .component11 {
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
  .section2 {
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
  .oUbytovnMc14 {
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
      gap: var(--gap-11xl);
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }

    .products {
      gap: var(--gap-11xl);
      flex-wrap: wrap;
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }

    .section2 {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1200px) {
    .penzionVSrdci {
      display: none;
    }

    .penzionVSrdciEskKanadyWrapper {
      width: 0px;
    }

    .containerFrame {
      min-width: 100%;
    }

    .container3 {
      gap: var(--gap-11xl);
    }
  }
  @media screen and (max-width: 825px) {
    .section {
      padding-left: var(--padding-9xl);
      padding-right: var(--padding-9xl);
      box-sizing: border-box;
    }

    .title {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .containerWrapper {
      min-width: 100%;
    }

    .imageContainer {
      min-width: 100%;
    }

    .section1 {
      gap: var(--gap-mini);
      padding: var(--padding-20xl) var(--padding-23xl);
      box-sizing: border-box;
    }

    .imageContainer1 {
      min-width: 100%;
    }

    .title1 {
      font-size: var(--font-size-7xl);
      line-height: 35px;
    }

    .textContent {
      padding-left: var(--padding-86xl);
      padding-right: var(--padding-86xl);
      box-sizing: border-box;
    }

    .row {
      gap: var(--gap-xl);
    }

    .list {
      gap: var(--gap-xl);
    }

    .container1 {
      gap: var(--gap-3xl);
      min-width: 100%;
    }

    .products {
      gap: var(--gap-mini);
      padding: var(--padding-20xl) var(--padding-23xl);
      box-sizing: border-box;
    }

    .row1 {
      gap: var(--gap-xl);
    }

    .list1 {
      gap: var(--gap-xl);
    }

    .contents {
      gap: var(--gap-11xl);
      padding: var(--padding-60xl) var(--padding-66xl);
      box-sizing: border-box;
    }

    .section2 {
      gap: var(--gap-11xl);
      padding-left: var(--padding-84xl);
      padding-right: var(--padding-84xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .component1 {
      display: none;
    }

    .title {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .description {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .imageContainer {
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }

    .section1 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .title1 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .textContent {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .products {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .imageIcon1 {
      flex: 1;
    }

    .imageContainer4 {
      flex: 1;
    }

    .title4 {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .article {
      flex-wrap: wrap;
    }

    .imageContainer5 {
      flex: 1;
    }

    .contents {
      gap: var(--gap-mini);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .section2 {
      gap: var(--gap-mini);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>