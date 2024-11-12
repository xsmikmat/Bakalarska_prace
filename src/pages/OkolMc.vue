<template>
  <div :class="$style.okolMc14">
    <section :class="$style.frameParent">
      <div :class="$style.component1Wrapper">
        <div :class="$style.component1">
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
        </div>
      </div>
      <div :class="$style.section">
        <div :class="$style.sectionInner">
          <div :class="$style.titleParent">
            <h1 :class="$style.title">Co nabízí okolí</h1>
            <div :class="$style.description">
              Různé výlety a aktivity pro všechny
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
    </section>
    <section :class="$style.list">
      <div :class="$style.titleWrapper">
        <h1 :class="$style.title1">Doporučené aktivity</h1>
      </div>
      <div :class="$style.row">
        <div :class="$style.itemParent">
          <div :class="$style.item">
            <div :class="$style.iconsWrapper">
              <div :class="$style.icons">
                <div :class="$style.icon">⛰️</div>
              </div>
            </div>
            <div :class="$style.titleGroup">
              <b :class="$style.title2">Pro turisty</b>
              <div :class="$style.subtitle">Explore nature trails</div>
            </div>
          </div>
          <div :class="$style.item">
            <div :class="$style.iconsWrapper">
              <div :class="$style.icons">
                <div :class="$style.icon">🚲</div>
              </div>
            </div>
            <div :class="$style.titleGroup">
              <div :class="$style.title2">Pro cyklisty</div>
              <div :class="$style.subtitle">Discover scenic routes</div>
            </div>
          </div>
        </div>
        <div :class="$style.item">
          <div :class="$style.iconsWrapper">
            <div :class="$style.icons">
              <div :class="$style.icon">🏊</div>
            </div>
          </div>
          <div :class="$style.titleGroup">
            <div :class="$style.title2">Pro plavce a vodáky</div>
            <div :class="$style.subtitle">Cool off in local lakes</div>
          </div>
        </div>
      </div>
      <div :class="$style.row1">
        <div :class="$style.card">
          <div :class="$style.image1">
            <div :class="$style.tag">
              <div :class="$style.text">Adventure</div>
            </div>
            <div :class="$style.titleFrame">
              <div :class="$style.title5">Tour Image 1</div>
            </div>
          </div>
          <div :class="$style.cardInner">
            <div :class="$style.subtitleParent">
              <div :class="$style.subtitle3">Rozhledna na Havlově hoře</div>
              <div :class="$style.title6">
                Projíždíte-li po silnici  Dačice - Kunžak, určitě ji
                nepřehlédnete již od Markvarce nebo z druhé strany od Mostů.
                Cesta tam a zase zpátky od 
                <a
                  :class="$style.penzionuMikmtor"
                  href="https://ceska-kanada-ubytovani.webnode.cz/"
                  target="_blank"
                >
                  <span :class="$style.penzionuMikmtor1"
                    >Penzionu Šmikmátor </span
                  > </a
                >trvá necelou hodinu (asi 3,5 km), takže krásný výlet pro
                všechny.
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.card">
          <div :class="$style.image1">
            <div :class="$style.tag">
              <div :class="$style.text">Cultural</div>
            </div>
            <div :class="$style.titleFrame">
              <div :class="$style.title5">Tour Image 2</div>
            </div>
          </div>
          <div :class="$style.cardInner">
            <div :class="$style.subtitleParent">
              <div :class="$style.subtitle3">Zvůle</div>
              <div :class="$style.title6">
                Velký písčitý rybník ve tvaru písmene V, obklopený lesem, s
                množstvím bludných balvanů ideálních na opalování u stejnojmenné
                vesnice Zvůle, od chalupy vzdálen vzdušnou čarou 900m. Ideální
                pro pěší výlet.
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.card2">
          <div :class="$style.image1">
            <div :class="$style.tag">
              <div :class="$style.text">Outdoor</div>
            </div>
            <div :class="$style.titleFrame">
              <div :class="$style.title5">Tour Image 3</div>
            </div>
          </div>
          <div :class="$style.cardInner">
            <div :class="$style.subtitleParent">
              <div :class="$style.subtitle3">Landštejn</div>
              <div :class="$style.title6">
                Zajeďte se podívat na hrad zničený úderem blesku a v posledních
                letech zrestaurovaný a krásně udržovaný. Více
                na www.hradlandstejn.cz
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        :class="$style.listChild"
        loading="lazy"
        alt=""
        src="/vector-200-1.svg"
      />
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "OkolMc",
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
  }
  .component1Wrapper {
    margin-top: -82px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
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
    flex-shrink: 0;
    max-width: 100%;
    margin-top: -2px;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--heading-2);
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-61xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }
  .title1 {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 100px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
  }
  .titleWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 325px 0px 326px;
    box-sizing: border-box;
    max-width: 100%;
    font-family: var(--heading-2);
  }
  .icon {
    flex: 1;
    position: relative;
    line-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .icons {
    flex: 1;
    border-radius: var(--br-31xl);
    background-color: var(--color-gray-400);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .iconsWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-113xl);
  }
  .title2 {
    align-self: stretch;
    position: relative;
    line-height: 28px;
  }
  .subtitle {
    align-self: stretch;
    position: relative;
    font-size: var(--m3-body-large-size);
    line-height: 24px;
    color: var(--color-gray-200);
  }
  .titleGroup {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    font-size: var(--subtext-size);
  }
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) 0px;
    box-sizing: border-box;
    gap: var(--gap-xl);
    min-width: 237px;
    max-width: 100%;
  }
  .itemParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-21xl);
    min-width: 768px;
    max-width: 100%;
  }
  .row {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-21xl);
    max-width: 100%;
    font-size: var(--font-size-43xl-5);
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
  .title5 {
    flex: 1;
    position: relative;
    line-height: 16px;
    display: inline-block;
    max-width: 100%;
  }
  .titleFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini) 0px var(--padding-base);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
  }
  .image1 {
    align-self: stretch;
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-143xl);
    box-sizing: border-box;
    gap: var(--gap-119xl);
    max-width: 100%;
  }
  .subtitle3 {
    align-self: stretch;
    position: relative;
    line-height: 28px;
    font-weight: 500;
  }
  .penzionuMikmtor1 {
    text-decoration: underline;
  }
  .penzionuMikmtor {
    color: inherit;
  }
  .title6 {
    position: relative;
    font-size: var(--m3-body-large-size);
    line-height: 24px;
  }
  .subtitleParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
    max-width: 100%;
  }
  .cardInner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--subtext-size);
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
    padding: 0px 0px var(--padding-3xs);
    gap: var(--gap-xs);
    min-width: 273px;
    max-width: 100%;
  }
  .card2 {
    flex: 1;
    border-radius: var(--br-7xs);
    border: 1px solid var(--color-gray-300);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 58px;
    gap: var(--gap-xs);
    min-width: 273px;
    max-width: 100%;
  }
  .row1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--gap-21xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--m3-body-small-size);
  }
  .listChild {
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
  .list {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-41xl) var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--m3-body-small);
  }
  .okolMc14 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 464px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1275px) {
    .section {
      gap: var(--gap-11xl);
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }

    .frameParent {
      height: auto;
    }

    .titleWrapper {
      padding-left: 163px;
      padding-right: var(--padding-143xl);
      box-sizing: border-box;
    }

    .itemParent {
      flex: 1;
      min-width: 100%;
    }

    .row {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1100px) {
    .list {
      padding-top: var(--padding-20xl);
      padding-bottom: var(--padding-20xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 750px) {
    .title {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .sectionInner {
      min-width: 100%;
    }

    .image {
      min-width: 100%;
    }

    .section {
      gap: var(--gap-mini);
      padding-left: var(--padding-23xl);
      padding-right: var(--padding-23xl);
      padding-bottom: var(--padding-20xl);
      box-sizing: border-box;
    }

    .frameParent {
      padding-top: var(--padding-33xl);
      box-sizing: border-box;
    }

    .title1 {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }

    .titleWrapper {
      padding-left: var(--padding-62xl);
      padding-right: var(--padding-62xl);
      box-sizing: border-box;
    }

    .icon {
      font-size: var(--font-size-31xl);
      line-height: 80px;
    }

    .itemParent {
      flex-wrap: wrap;
    }

    .row {
      gap: var(--gap-xl);
    }

    .card2 {
      padding-bottom: 38px;
      box-sizing: border-box;
    }

    .row1 {
      gap: var(--gap-xl);
    }

    .list {
      gap: var(--gap-11xl);
      padding: var(--padding-6xl) var(--padding-66xl);
      box-sizing: border-box;
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
      font-size: var(--font-size-12xl);
      line-height: 60px;
    }

    .titleWrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .icon {
      font-size: var(--font-size-18xl);
      line-height: 60px;
    }

    .iconsWrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .title2 {
      font-size: var(--m3-body-large-size);
      line-height: 22px;
    }

    .itemParent {
      gap: var(--gap-xl);
    }

    .image1 {
      gap: var(--gap-50xl);
    }

    .subtitle3 {
      font-size: var(--m3-body-large-size);
      line-height: 22px;
    }

    .list {
      gap: var(--gap-mini);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
