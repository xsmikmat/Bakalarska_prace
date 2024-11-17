<template>
  <section :class="$style.list">
    <h1 :class="$style.title">Důležité informace</h1>
    <div :class="$style.container">
      <div :class="$style.item">
        <div :class="$style.titleWrapper">
          <div :class="$style.title1">Provozovatel</div>
        </div>
        <h3 :class="$style.subtitle">
          <p :class="$style.mikmtorSro">ŠMIKMÁTOR, s.r.o.</p>
          <p :class="$style.mikmtorSro">Palackého 101</p>
          <p :class="$style.mikmtorSro">612 00 Brno - Královo Pole</p>
          <p :class="$style.mikmtorSro">Česá Republika</p>
        </h3>
      </div>
      <div :class="$style.item">
        <div :class="$style.titleWrapper">
          <div :class="$style.title1">IČO</div>
        </div>
        <div :class="$style.subtitle1">25526341</div>
      </div>
      <div :class="$style.item">
        <div :class="$style.titleWrapper">
          <div :class="$style.title1">DIČ</div>
        </div>
        <div :class="$style.subtitle1">CZ25526341</div>
      </div>
    </div>
    <div :class="$style.list1">
      <div :class="$style.row">
        <div :class="$style.item">
          <div :class="$style.titleWrapper">
            <div :class="$style.title1">IBAN</div>
          </div>
          <div :class="$style.subtitle1">CZ16 0100 0000 0011 7200 0247</div>
        </div>
        <div :class="$style.item">
          <div :class="$style.titleWrapper">
            <div :class="$style.title1">Bankovní účet</div>
          </div>
          <div :class="$style.subtitle1">117 2000 247/0100</div>
        </div>
        <div :class="$style.item">
          <div :class="$style.titleWrapper">
            <div :class="$style.title1">SWIFT (BIC)</div>
          </div>
          <h3 :class="$style.subtitle">KOMBCZPPXXX</h3>
        </div>
      </div>
    </div>
    <img :class="$style.listChild" alt="" src="/vector-200-1.svg" />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "List1",
  });
</script>
<style module>
  .title {
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
  .title1 {
    align-self: stretch;
    position: relative;
    line-height: 28px;
  }
  .titleWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .mikmtorSro {
    margin: 0;
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
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs) 0px;
    gap: var(--gap-xl);
  }
  .subtitle1 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-9xl);
    line-height: 36px;
    font-weight: 500;
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
  .row {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-54xl);
    gap: var(--gap-21xl);
    flex-shrink: 0;
  }
  .list1 {
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
  .listChild {
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
  .list {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    padding: var(--padding-2xs) var(--padding-151xl);
    box-sizing: border-box;
    position: relative;
    gap: 35.5px 54px;
    min-height: 614px;
    max-width: 100%;
    text-align: center;
    font-size: var(--subtext-size);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }

  @media screen and (max-width: 825px) {
    .title {
      font-size: var(--m3-headline-large-size);
      line-height: 38px;
    }

    .container {
      min-width: 100%;
    }

    .row {
      gap: var(--gap-xl);
      padding-bottom: var(--padding-28xl);
      box-sizing: border-box;
    }

    .list1 {
      gap: var(--gap-xl);
      min-width: 100%;
    }

    .list {
      gap: var(--gap-8xl);
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

    .title1 {
      font-size: var(--font-size-base);
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

    .list {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>