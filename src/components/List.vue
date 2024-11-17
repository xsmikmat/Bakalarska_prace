<template>
  <section :class="$style.list">
    <div :class="$style.container">
      <h1 :class="$style.title">Kontaktní informace</h1>
    </div>
    <div :class="$style.list1">
      <div :class="$style.row">
        <div :class="$style.item">
          <img
            :class="$style.frameIcon"
            loading="lazy"
            alt=""
            src="/frame@2x.png"
          />
          <div :class="$style.titleWrapper">
            <div :class="$style.title1">Email</div>
          </div>
          <h3 :class="$style.subtitle">smikmator@seznam.cz</h3>
        </div>
        <div :class="$style.item">
          <img
            :class="$style.frameIcon"
            loading="lazy"
            alt=""
            src="/frame-1@2x.png"
          />
          <div :class="$style.titleWrapper">
            <div :class="$style.title1">Telefon</div>
          </div>
          <div :class="$style.subtitle1">+420 777 550 788</div>
        </div>
        <div :class="$style.item">
          <img
            :class="$style.frameIcon"
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <div :class="$style.titleWrapper">
            <div :class="$style.title1">Adresa</div>
          </div>
          <div :class="$style.subtitle2">Valtínov č.p. 82, 378 62 Kunžak</div>
        </div>
      </div>
    </div>
    <img
      :class="$style.listChild"
      loading="lazy"
      alt=""
      src="/vector-200.svg"
    />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "List",
  });
</script>
<style module>
  .title {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 48px;
    font-weight: 700;
    font-family: inherit;
  }
  .container {
    width: 1169px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-305xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frameIcon {
    width: 100px;
    height: 100px;
    position: relative;
    border-radius: var(--br-31xl);
    object-fit: cover;
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
    align-items: center;
    justify-content: center;
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
  }
  .list1 {
    width: 1169px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    font-size: var(--subtext-size);
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
    align-items: center;
    justify-content: center;
    padding: var(--padding-41xl) var(--padding-xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-41xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }

  @media screen and (max-width: 1200px) {
    .container {
      padding-left: var(--padding-143xl);
      padding-right: var(--padding-143xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 825px) {
    .title {
      font-size: var(--m3-headline-large-size);
      line-height: 38px;
    }

    .container {
      padding-left: var(--padding-62xl);
      padding-right: var(--padding-62xl);
      box-sizing: border-box;
    }

    .row {
      gap: var(--gap-xl);
    }

    .list1 {
      gap: var(--gap-xl);
    }

    .list {
      gap: var(--gap-11xl);
      padding-top: var(--padding-20xl);
      padding-bottom: var(--padding-20xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-5xl);
      line-height: 29px;
    }

    .container {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
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

    .subtitle2 {
      font-size: var(--font-size-3xl);
      line-height: 29px;
    }
  }
</style>