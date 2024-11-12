<template>
  <div :class="$style.kontaktMc14">
    <div :class="$style.component1Wrapper">
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
    </div>
    <section :class="$style.listParent">
      <div :class="$style.list">
        <div :class="$style.titleWrapper">
          <h1 :class="$style.title">Kontaktní informace</h1>
        </div>
        <div :class="$style.row">
          <div :class="$style.item">
            <div :class="$style.frameWrapper">
              <div :class="$style.frame">
                <div :class="$style.icon">📧</div>
              </div>
            </div>
            <div :class="$style.title1">Email</div>
            <h3 :class="$style.subtitle">smikmator@seznam.cz</h3>
          </div>
          <div :class="$style.item">
            <div :class="$style.frameWrapper">
              <div :class="$style.frame">
                <div :class="$style.icon">📱</div>
              </div>
            </div>
            <div :class="$style.title1">Telefon</div>
            <div :class="$style.subtitle1">+420 777 550 788</div>
          </div>
          <div :class="$style.item">
            <div :class="$style.frameWrapper">
              <div :class="$style.frame">
                <div :class="$style.icon">🏠</div>
              </div>
            </div>
            <div :class="$style.title1">Adresa</div>
            <div :class="$style.subtitle2">Valtínov č.p. 82, 378 62 Kunžak</div>
          </div>
        </div>
        <img
          :class="$style.listChild"
          loading="lazy"
          alt=""
          src="/vector-200.svg"
        />
      </div>
      <div :class="$style.list1">
        <h1 :class="$style.title4">Důležité informace</h1>
        <div :class="$style.container">
          <div :class="$style.item3">
            <div :class="$style.titleContainer">
              <div :class="$style.title5">Provozovatel</div>
            </div>
            <h3 :class="$style.subtitle">
              <p :class="$style.mikmtorSro">ŠMIKMÁTOR, s.r.o.</p>
              <p :class="$style.mikmtorSro">Palackého 101</p>
              <p :class="$style.mikmtorSro">612 00 Brno - Královo Pole</p>
              <p :class="$style.mikmtorSro">Česá Republika</p>
            </h3>
          </div>
          <div :class="$style.item3">
            <div :class="$style.titleContainer">
              <div :class="$style.title5">IČO</div>
            </div>
            <div :class="$style.subtitle1">25526341</div>
          </div>
          <div :class="$style.item3">
            <div :class="$style.titleContainer">
              <div :class="$style.title5">DIČ</div>
            </div>
            <div :class="$style.subtitle1">CZ25526341</div>
          </div>
        </div>
        <div :class="$style.list2">
          <div :class="$style.row1">
            <div :class="$style.item3">
              <div :class="$style.titleContainer">
                <div :class="$style.title5">IBAN</div>
              </div>
              <div :class="$style.subtitle1">CZ16 0100 0000 0011 7200 0247</div>
            </div>
            <div :class="$style.item3">
              <div :class="$style.titleContainer">
                <div :class="$style.title5">Bankovní účet</div>
              </div>
              <div :class="$style.subtitle1">117 2000 247/0100</div>
            </div>
            <div :class="$style.item3">
              <div :class="$style.titleContainer">
                <div :class="$style.title5">SWIFT (BIC)</div>
              </div>
              <h3 :class="$style.subtitle">KOMBCZPPXXX</h3>
            </div>
          </div>
        </div>
        <img :class="$style.listItem" alt="" src="/vector-200-1.svg" />
      </div>
    </section>
    <section :class="$style.section">
      <div :class="$style.image">
        <img :class="$style.imageIcon" alt="" src="/image.svg" />
        <div :class="$style.icLocationWrapper">
          <img
            :class="$style.icLocationIcon"
            loading="lazy"
            alt=""
            src="/iclocation.svg"
          />
        </div>
        <div :class="$style.title11">Location Map</div>
      </div>
      <img :class="$style.listItem" alt="" src="/vector-200-1.svg" />
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "KontaktMc",
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
  }
  .component1Wrapper {
    margin-top: -145px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-xl) 61px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .title {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 48px;
    font-weight: 700;
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
    padding: 0px 324px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .icon {
    flex: 1;
    position: relative;
    line-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .frame {
    flex: 1;
    border-radius: var(--br-31xl);
    background-color: var(--color-gray-400);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frameWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-112xl);
  }
  .title1 {
    align-self: stretch;
    position: relative;
    font-size: var(--subtext-size);
    line-height: 28px;
  }
  .subtitle {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-9xl);
    line-height: 36px;
    font-weight: 500;
    font-family: inherit;
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
    min-width: 272px;
    max-width: 100%;
  }
  .subtitle1 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-9xl);
    line-height: 36px;
    font-weight: 500;
  }
  .subtitle2 {
    position: relative;
    font-size: var(--font-size-9xl);
    line-height: 36px;
    font-weight: 500;
  }
  .row {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--gap-21xl);
    max-width: 100%;
    font-size: var(--font-size-43xl-5);
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
  }
  .title4 {
    margin: 0;
    width: 1145px;
    position: relative;
    font-size: var(--font-size-21xl);
    line-height: 48px;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
  }
  .title5 {
    align-self: stretch;
    position: relative;
    line-height: 28px;
  }
  .titleContainer {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .mikmtorSro {
    margin: 0;
  }
  .item3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs) 0px;
    gap: var(--gap-xl);
  }
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-9xs);
    box-sizing: border-box;
    gap: var(--gap-5xl);
    min-width: 528px;
    max-width: 100%;
  }
  .row1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-54xl);
    gap: var(--gap-21xl);
    flex-shrink: 0;
  }
  .list2 {
    height: 326px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 0px;
    box-sizing: border-box;
    min-width: 528px;
    max-width: 100%;
  }
  .listItem {
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
  .list1 {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    padding: 11px var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: 35.5px 54px;
    max-width: 100%;
    font-size: var(--subtext-size);
  }
  .listParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 3px;
    box-sizing: border-box;
    gap: 37px;
    max-width: 100%;
    flex-shrink: 0;
    text-align: center;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--m3-body-small);
  }
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
  .icLocationWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
  }
  .title11 {
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
    text-align: center;
    font-size: var(--m3-body-large-size);
    color: var(--color-black);
    font-family: var(--m3-body-small);
  }
  .kontaktMc14 {
    width: 100%;
    height: 1958px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 143px 0px 252px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 1275px) {
    .titleWrapper {
      padding-left: var(--padding-143xl);
      padding-right: var(--padding-143xl);
      box-sizing: border-box;
    }

    .kontaktMc14 {
      height: auto;
    }
  }
  @media screen and (max-width: 750px) {
    .title {
      font-size: var(--m3-headline-large-size);
      line-height: 38px;
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

    .row {
      gap: var(--gap-xl);
    }

    .list {
      gap: var(--gap-11xl);
      padding: var(--padding-20xl) var(--padding-66xl);
      box-sizing: border-box;
    }

    .title4 {
      font-size: var(--m3-headline-large-size);
      line-height: 38px;
    }

    .container {
      min-width: 100%;
    }

    .row1 {
      gap: var(--gap-xl);
      padding-bottom: 47px;
      box-sizing: border-box;
    }

    .list2 {
      gap: var(--gap-xl);
      min-width: 100%;
    }

    .list1 {
      gap: 27px;
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }

    .listParent {
      gap: 18px;
    }

    .section {
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-5xl);
      line-height: 29px;
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

    .frameWrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .title1 {
      font-size: var(--m3-body-large-size);
      line-height: 22px;
    }

    .subtitle {
      font-size: var(--font-size-3xl);
      line-height: 29px;
    }

    .subtitle1 {
      font-size: var(--font-size-3xl);
      line-height: 29px;
    }

    .subtitle2 {
      font-size: var(--font-size-3xl);
      line-height: 29px;
    }

    .list {
      gap: var(--gap-mini);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .title4 {
      font-size: var(--font-size-5xl);
      line-height: 29px;
    }

    .title5 {
      font-size: var(--m3-body-large-size);
      line-height: 22px;
    }

    .list1 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .section {
      padding: var(--padding-23xl) var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
