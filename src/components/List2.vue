<template>
  <section :class="$style.list">
    <div :class="$style.container">
      <h1 :class="$style.title">Doporučené aktivity</h1>
    </div>
    <div :class="$style.list1">
      <div :class="$style.row">
        <div :class="$style.item">
          <img
            :class="$style.icons"
            loading="lazy"
            alt=""
            src="/frame1@2x.png"
          />
          <div :class="$style.titleParent">
            <b :class="$style.title1">Pro turisty</b>
            <div :class="$style.subtitle">Explore nature trails</div>
          </div>
        </div>
        <div :class="$style.item">
          <img
            :class="$style.icons"
            loading="lazy"
            alt=""
            src="/frame-11@2x.png"
          />
          <div :class="$style.titleParent">
            <div :class="$style.title1">Pro cyklisty</div>
            <div :class="$style.subtitle">Discover scenic routes</div>
          </div>
        </div>
        <div :class="$style.item">
          <img
            :class="$style.icons"
            loading="lazy"
            alt=""
            src="/frame-21@2x.png"
          />
          <div :class="$style.titleParent">
            <div :class="$style.title1">Pro plavce a vodáky</div>
            <div :class="$style.subtitle">Cool off in local lakes</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.list2">
      <div :class="$style.row1">
        <div :class="$style.card">
          <div :class="$style.imageContainer">
            <div :class="$style.image">
              <div :class="$style.tag">
                <div :class="$style.text">Adventure</div>
              </div>
              <div :class="$style.titleWrapper">
                <div :class="$style.title4">Tour Image 1</div>
              </div>
            </div>
          </div>
          <div :class="$style.textContent">
            <div :class="$style.subtitle3">Rozhledna na Havlově hoře</div>
            <div :class="$style.title5">
              Projíždíte-li po silnici  Dačice - Kunžak, určitě ji nepřehlédnete
              již od Markvarce nebo z druhé strany od Mostů. Cesta tam a zase
              zpátky od 
              <a
                :class="$style.penzionuMikmtor"
                href="https://ceska-kanada-ubytovani.webnode.cz/"
                target="_blank"
              >
                <span :class="$style.penzionuMikmtor1"
                  >Penzionu Šmikmátor </span
                > </a
              >trvá necelou hodinu (asi 3,5 km), takže krásný výlet pro všechny.
            </div>
          </div>
        </div>
        <Card2
          text="Cultural"
          title="Tour Image 2"
          subtitle="Zvůle"
          title1="Velký písčitý rybník ve tvaru písmene V, obklopený lesem, s množstvím bludných balvanů ideálních na opalování u stejnojmenné vesnice Zvůle, od chalupy vzdálen vzdušnou čarou 900m. Ideální pro pěší výlet."
        /><Card2
          text="Outdoor"
          title="Tour Image 3"
          subtitle="Landštejn"
          title1="Zajeďte se podívat na hrad zničený úderem blesku a v posledních letech zrestaurovaný a krásně udržovaný. Více na www.hradlandstejn.cz"
          cardPadding="0px 0px 46px"
        />
      </div>
    </div>
    <img
      :class="$style.listChild"
      loading="lazy"
      alt=""
      src="/vector-200-1.svg"
    />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Card2 from "./Card2.vue";

  export default defineComponent({
    name: "List2",
    components: { Card2 },
  });
</script>
<style module>
  .title {
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
  .container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-306xl) 0px var(--padding-307xl);
    box-sizing: border-box;
    max-width: 100%;
    font-family: var(--heading-1);
  }
  .icons {
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
  .subtitle {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
    color: var(--color-gray-200);
  }
  .titleParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
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
    min-width: 273px;
    max-width: 100%;
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
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    font-size: var(--subtext-size);
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
  .title4 {
    flex: 1;
    position: relative;
    line-height: 16px;
    display: inline-block;
    max-width: 100%;
  }
  .titleWrapper {
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
  .image {
    flex: 1;
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
  .imageContainer {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
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
  .title5 {
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
  }
  .textContent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs);
    gap: var(--gap-9xs);
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
    min-width: 273px;
    max-width: 100%;
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
  .list2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xs);
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
    z-index: 1;
    margin-top: -76px;
    text-align: center;
    font-size: var(--heading-1-size);
    color: var(--color-black);
    font-family: var(--m3-label-large);
  }

  @media screen and (max-width: 1200px) {
    .container {
      padding-left: var(--padding-144xl);
      padding-right: var(--padding-143xl);
      box-sizing: border-box;
    }

    .list {
      padding-top: var(--padding-41xl);
      padding-bottom: var(--padding-20xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .title {
      font-size: var(--font-size-23xl);
      line-height: 80px;
    }
  }
  @media screen and (max-width: 750px) {
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

    .row1 {
      gap: var(--gap-xl);
    }

    .list2 {
      gap: var(--gap-xl);
    }

    .list {
      gap: var(--gap-11xl);
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      padding-bottom: var(--padding-6xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-size: var(--font-size-12xl);
      line-height: 60px;
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

    .image {
      gap: var(--gap-50xl);
    }

    .subtitle3 {
      font-size: var(--font-size-base);
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
