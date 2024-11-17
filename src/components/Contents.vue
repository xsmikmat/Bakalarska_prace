<template>
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
            <div :class="$style.description">Společné prostory</div>
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
            <div :class="$style.description">Venkovní aktivity</div>
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
            <div :class="$style.description">Vnitřní aktivity</div>
            <div :class="$style.subtitle2">Šipky, výčep, TV, sauna</div>
          </div>
        </div>
      </div>
    </div>
    <img :class="$style.contentsChild" alt="" src="/vector-200-1.svg" />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Contents",
  });
</script>
<style module>
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
  .subtitle {
    position: relative;
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
    font-size: var(--text-size);
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
    font-size: var(--subtext-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 1200px) {
    .containerFrame {
      min-width: 100%;
    }

    .container3 {
      gap: var(--gap-11xl);
    }
  }
  @media screen and (max-width: 825px) {
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
  }
  @media screen and (max-width: 450px) {
    .imageIcon1 {
      flex: 1;
    }

    .imageContainer4 {
      flex: 1;
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
  }
</style>
