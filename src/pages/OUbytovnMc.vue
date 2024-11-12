<template>
  <div :class="$style.oUbytovnMc14">
    <section :class="$style.sectionParent">
      <div :class="$style.section">
        <div :class="$style.sectionInner">
          <div :class="$style.titleParent">
            <h1 :class="$style.title">O našem ubytování</h1>
            <div :class="$style.description">
              Zažijte pohodlné ubytování v okolí krásné přírody
            </div>
          </div>
        </div>
        <div :class="$style.image" />
        <img
          :class="$style.sectionChild"
          loading="lazy"
          alt=""
          src="/vector-200-1.svg"
        />
      </div>
      <div :class="$style.component1">
        <div :class="$style.button" @click="onButtonContainerClick">
          <div :class="$style.oUbytovn">O ubytování</div>
        </div>
        <div :class="$style.button1" @click="onButtonContainerClick1">
          <div :class="$style.okol">Okolí</div>
        </div>
        <div :class="$style.button2" @click="onButtonContainerClick2">
          <div :class="$style.fotogalerie">Fotogalerie</div>
        </div>
        <div
          :class="$style.property1button"
          @click="onProperty1ButtonContainerClick"
        >
          <div :class="$style.rezervace">Rezervace</div>
        </div>
        <div :class="$style.button3" @click="onButtonContainerClick3">
          <div :class="$style.konrtakt">Konrtakt</div>
        </div>
      </div>
    </section>
    <section :class="$style.products">
      <div :class="$style.image1" />
      <div :class="$style.galleryItems">
        <h1 :class="$style.title1">Prohlédněte si naše pokoje</h1>
        <div :class="$style.cardContainer">
          <div :class="$style.card">
            <div :class="$style.image2">
              <div :class="$style.tag">
                <div :class="$style.text">Child bed available</div>
              </div>
              <div :class="$style.titleWrapper">
                <div :class="$style.title2">Apartment 1</div>
              </div>
            </div>
            <div :class="$style.cardInner">
              <div :class="$style.titleGroup">
                <div :class="$style.title3">2 pokoje pro 2, 1 pokoj pro 4</div>
                <div :class="$style.subtitle">Apartmán U Třešně</div>
              </div>
            </div>
          </div>
          <div :class="$style.card">
            <div :class="$style.image2">
              <div :class="$style.tag">
                <div :class="$style.text">Child bed available</div>
              </div>
              <div :class="$style.titleWrapper">
                <div :class="$style.title2">Apartment 2</div>
              </div>
            </div>
            <div :class="$style.cardInner">
              <div :class="$style.titleGroup">
                <div :class="$style.title3">1 pokoj pro 2, 1 pokoj pro 4</div>
                <div :class="$style.subtitle">Apartmán s výhledem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        :class="$style.sectionChild"
        loading="lazy"
        alt=""
        src="/vector-200-1.svg"
      />
    </section>
    <section :class="$style.contents">
      <div :class="$style.contentContainer">
        <div :class="$style.innerContent">
          <div :class="$style.titleParent">
            <h1 :class="$style.title">Co nabízíme dál</h1>
            <div :class="$style.description">
              Relax and enjoy various activities
            </div>
          </div>
        </div>
        <div :class="$style.image4" />
      </div>
      <div :class="$style.row">
        <div :class="$style.article">
          <div :class="$style.image5" />
          <div :class="$style.articleDetails">
            <div :class="$style.title7">Společné prostory</div>
            <div :class="$style.subtitle2">
              1 velká společenská místnost s kuchní, 1 místnost s TV
            </div>
          </div>
        </div>
        <div :class="$style.article">
          <div :class="$style.image5" />
          <div :class="$style.articleDetails">
            <div :class="$style.title7">Venkovní aktivity</div>
            <div :class="$style.subtitle2">
              Volejbal, pinpong, kulečník, prostor pro kola, ...
            </div>
          </div>
        </div>
        <div :class="$style.article">
          <div :class="$style.image5" />
          <div :class="$style.titleParent2">
            <div :class="$style.title7">Vnitřní aktivity</div>
            <div :class="$style.subtitle4">Šipky, výčep, TV, sauna</div>
          </div>
        </div>
      </div>
      <img
        :class="$style.contentsChild"
        loading="lazy"
        alt=""
        src="/vector-200-1.svg"
      />
    </section>
    <section :class="$style.reviewsWrapper">
      <div :class="$style.reviews">
        <div :class="$style.contentContainer">
          <div :class="$style.image4" />
          <div :class="$style.reviewContent">
            <div :class="$style.titleParent">
              <h1 :class="$style.title10">Co o nás řekli hosté</h1>
              <div :class="$style.description2">Podívej se na naše reviews</div>
            </div>
          </div>
        </div>
        <div :class="$style.row1">
          <div :class="$style.card2">
            <div :class="$style.avatar" />
            <div :class="$style.cardContainers">
              <div :class="$style.titleContainers">
                <div :class="$style.title11">HappyGuest123</div>
              </div>
              <div :class="$style.title12">
                Great stay with excellent facilities
              </div>
            </div>
            <div :class="$style.extraContainers">
              <img
                :class="$style.extraSpacersIcon"
                loading="lazy"
                alt=""
                src="/frame-427318817.svg"
              />
            </div>
          </div>
          <div :class="$style.card3">
            <div :class="$style.avatar1" />
            <div :class="$style.cardInner1">
              <div :class="$style.titleParent3">
                <div :class="$style.title11">TravelerGuru</div>
                <div :class="$style.spacer">
                  <img
                    :class="$style.extraSpacersIcon"
                    loading="lazy"
                    alt=""
                    src="/frame-427318817.svg"
                  />
                </div>
              </div>
            </div>
            <div :class="$style.title12">
              Outstanding service and amenities provided
            </div>
          </div>
          <div :class="$style.card2">
            <div :class="$style.avatar" />
            <div :class="$style.cardContainers">
              <div :class="$style.titleContainers">
                <div :class="$style.title11">VacationExplorer</div>
              </div>
              <div :class="$style.title12">
                Perfect place for a family getaway
              </div>
            </div>
            <div :class="$style.extraContainers">
              <img
                :class="$style.extraSpacersIcon"
                loading="lazy"
                alt=""
                src="/frame-427318817.svg"
              />
            </div>
          </div>
        </div>
        <img
          :class="$style.contentsChild"
          loading="lazy"
          alt=""
          src="/vector-200-1.svg"
        />
      </div>
    </section>
    <section :class="$style.footerWrapper">
      <div :class="$style.footer">
        <div :class="$style.title17">
          © 2023 Accommodations Company. All rights reserved.
        </div>
        <div :class="$style.title17">
          Address: 123 Accommodation St, City, Country
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "OUbytovnMc",
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
  .titleParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .sectionInner {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-97xl) 0px 0px;
    box-sizing: border-box;
    min-width: 361px;
    max-width: 100%;
  }
  .image {
    height: 400px;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    min-width: 361px;
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
    flex: 1;
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
    max-width: 102%;
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
    height: 15px;
    width: 78px;
    position: relative;
    line-height: 15px;
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
    position: relative;
    font-weight: 600;
  }
  .property1button {
    width: 100px;
    border-radius: var(--br-3xs);
    background-color: var(--color-seagreen);
    height: 40px;
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
    font-size: var(--m3-body-large-size);
    color: var(--color-darkseagreen);
  }
  .konrtakt {
    height: 15px;
    width: 59px;
    position: relative;
    line-height: 15px;
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
    margin-top: -2px;
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
    z-index: 1;
    margin-left: -493px;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }
  .sectionParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-2);
  }
  .image1 {
    height: 415px;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    min-width: 361px;
    max-width: 100%;
  }
  .title1 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 44px;
    font-weight: 400;
    font-family: inherit;
  }
  .text {
    position: relative;
    line-height: 16px;
    font-weight: 500;
  }
  .tag {
    border-radius: var(--br-7xs) 0px var(--br-7xs) 0px;
    background-color: var(--color-gray-400);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-6xs) var(--padding-9xs)
      var(--padding-5xs);
  }
  .title2 {
    flex: 1;
    position: relative;
    line-height: 16px;
  }
  .titleWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini) 0px var(--padding-base);
    text-align: center;
  }
  .image2 {
    align-self: stretch;
    flex: 1;
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-69xl);
  }
  .title3 {
    align-self: stretch;
    position: relative;
    line-height: 15px;
  }
  .subtitle {
    align-self: stretch;
    height: 28px;
    position: relative;
    font-size: var(--subtext-size);
    line-height: 44px;
    font-weight: 600;
    color: var(--color-gray-100);
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0;
  }
  .titleGroup {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .cardInner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs);
    font-size: var(--text-size);
    font-family: var(--subtext);
  }
  .card {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-7xs);
    border: 1px solid var(--color-gray-300);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-3xs);
    gap: var(--gap-xs);
  }
  .cardContainer {
    align-self: stretch;
    height: 311px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-21xl);
    font-size: var(--m3-body-small-size);
    font-family: var(--m3-body-small);
  }
  .galleryItems {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-41xl);
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
    flex-wrap: wrap;
    align-content: flex-start;
    padding: var(--padding-41xl) var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--m3-headline-large-size);
    color: var(--color-black);
    font-family: var(--heading-2);
  }
  .innerContent {
    width: 932px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .image4 {
    height: 180px;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    min-width: 117px;
  }
  .contentContainer {
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
  .image5 {
    height: 100px;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    min-width: 65px;
  }
  .title7 {
    align-self: stretch;
    position: relative;
    line-height: 44px;
    font-weight: 600;
  }
  .subtitle2 {
    position: relative;
    font-size: var(--text-size);
    line-height: 15px;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .articleDetails {
    width: 216px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
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
  .subtitle4 {
    align-self: stretch;
    position: relative;
    font-size: var(--text-size);
    line-height: 15px;
  }
  .titleParent2 {
    width: 216px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .row {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--gap-21xl);
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
    padding: var(--padding-41xl) var(--padding-151xl) var(--padding-61xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-61xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-2);
  }
  .title10 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 48px;
    font-weight: 700;
    font-family: inherit;
  }
  .description2 {
    align-self: stretch;
    position: relative;
    font-size: var(--m3-body-large-size);
    line-height: 24px;
  }
  .reviewContent {
    width: 932px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-23xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .avatar {
    height: 32px;
    width: 32px;
    position: relative;
    border-radius: var(--br-13xl);
    background-color: var(--color-gray-300);
    overflow: hidden;
    flex-shrink: 0;
    display: none;
    z-index: 1;
  }
  .title11 {
    flex: 1;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .titleContainers {
    width: 309.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-20xl) 0px var(--padding-21xl);
    box-sizing: border-box;
  }
  .title12 {
    align-self: stretch;
    position: relative;
    font-size: var(--m3-body-large-size);
    line-height: 24px;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .cardContainers {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl);
    flex-shrink: 0;
    max-width: 100%;
  }
  .extraSpacersIcon {
    align-self: stretch;
    height: 9.8px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .extraContainers {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs-1) 0px 0px;
    margin-left: -58.3px;
  }
  .card2 {
    flex: 1;
    border-radius: var(--br-7xs);
    background-color: var(--color-gray-400);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xl) var(--padding-base) var(--padding-base);
    box-sizing: border-box;
    min-width: 273px;
    max-width: 100%;
  }
  .avatar1 {
    width: 32px;
    height: 32px;
    position: relative;
    border-radius: var(--br-13xl);
    background-color: var(--color-gray-300);
    overflow: hidden;
    flex-shrink: 0;
    display: none;
  }
  .spacer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs-1) 0px 0px;
  }
  .titleParent3 {
    width: 292px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .cardInner1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 0px var(--padding-21xl);
  }
  .card3 {
    flex: 1;
    border-radius: var(--br-7xs);
    background-color: var(--color-gray-400);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xl) var(--padding-base) var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-3xl);
    min-width: 273px;
    max-width: 100%;
  }
  .row1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--gap-21xl);
    max-width: 100%;
    font-size: var(--m3-label-large-size);
  }
  .reviews {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-41xl) var(--padding-151xl) var(--padding-61xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-61xl);
    max-width: 100%;
  }
  .reviewsWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-41xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--m3-body-small);
  }
  .title17 {
    height: 100px;
    position: relative;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
  .footer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-41xl);
    max-width: 100%;
  }
  .footerWrapper {
    align-self: stretch;
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
    font-family: var(--m3-body-small);
  }
  .oUbytovnMc14 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-91xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .section {
      gap: var(--gap-11xl);
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }

    .products {
      gap: var(--gap-11xl);
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }

    .contentContainer {
      gap: var(--gap-11xl);
    }
  }
  @media screen and (max-width: 1050px) {
    .title {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .title1 {
      font-size: var(--font-size-7xl);
      line-height: 35px;
    }

    .title10 {
      font-size: var(--m3-headline-large-size);
      line-height: 38px;
    }

    .title17 {
      flex: 1;
    }

    .footer {
      gap: var(--gap-11xl);
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 750px) {
    .sectionInner {
      min-width: 100%;
    }

    .image {
      min-width: 100%;
    }

    .section {
      gap: var(--gap-mini);
      padding: var(--padding-20xl) var(--padding-23xl);
      box-sizing: border-box;
    }

    .image1 {
      min-width: 100%;
    }

    .cardContainer {
      gap: var(--gap-xl);
      flex-wrap: wrap;
    }

    .galleryItems {
      gap: var(--gap-11xl);
      min-width: 100%;
    }

    .products {
      gap: var(--gap-mini);
      padding: var(--padding-20xl) var(--padding-23xl);
      box-sizing: border-box;
    }

    .row {
      gap: var(--gap-xl);
    }

    .contents {
      gap: var(--gap-21xl);
      padding: var(--padding-20xl) var(--padding-66xl) var(--padding-33xl);
      box-sizing: border-box;
    }

    .row1 {
      gap: var(--gap-xl);
    }

    .reviews {
      gap: var(--gap-21xl);
      padding: var(--padding-20xl) var(--padding-66xl) var(--padding-33xl);
      box-sizing: border-box;
    }

    .reviewsWrapper {
      padding-bottom: var(--padding-20xl);
      box-sizing: border-box;
    }

    .title17 {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .description {
      font-size: var(--m3-body-large-size);
      line-height: 35px;
    }

    .section {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .title1 {
      font-size: var(--font-size-lgi);
      line-height: 26px;
    }

    .image2 {
      gap: var(--gap-25xl);
    }

    .subtitle {
      font-size: var(--m3-body-large-size);
      line-height: 35px;
    }

    .products {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .title7 {
      font-size: var(--m3-body-large-size);
      line-height: 35px;
    }

    .articleDetails {
      flex: 1;
    }

    .article {
      flex-wrap: wrap;
    }

    .contents {
      gap: var(--gap-xl);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .title10 {
      font-size: var(--font-size-5xl);
      line-height: 29px;
    }

    .reviews {
      gap: var(--gap-xl);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .title17 {
      font-size: var(--m3-body-large-size);
      line-height: 22px;
    }
  }
</style>
