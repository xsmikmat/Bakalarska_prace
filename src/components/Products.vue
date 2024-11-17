<template>
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
                @click="onComponent1Variant6ContainerClick"
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
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Products",
    methods: {
      onComponent1Variant6ContainerClick() {
        this.$router.push("/fotogalerie-mc14");
      },
    },
  });
</script>
<style module>
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
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 1425px) {
    .products {
      gap: var(--gap-11xl);
      flex-wrap: wrap;
      padding-left: var(--padding-66xl);
      padding-right: var(--padding-66xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 825px) {
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
  }
  @media screen and (max-width: 450px) {
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
  }
</style>
