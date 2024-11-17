<template>
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
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Card1",
    methods: {
      onComponent1Variant6ContainerClick() {
        this.$router.push("/fotogalerie-mc14");
      },
    },
  });
</script>
<style module>
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
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-darkseagreen);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 825px) {
    .textContent {
      padding-left: var(--padding-86xl);
      padding-right: var(--padding-86xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .textContent {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
