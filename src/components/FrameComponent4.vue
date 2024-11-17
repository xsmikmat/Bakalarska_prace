<template>
  <section :class="$style.reviewsParent">
    <div :class="$style.reviews">
      <div :class="$style.reviewContainer">
        <div :class="$style.image" />
        <div :class="$style.reviewContent">
          <div :class="$style.reviewDetails">
            <h1 :class="$style.title">Co o nás řekli hosté</h1>
            <div :class="$style.description">Podívej se na naše reviews</div>
          </div>
        </div>
      </div>
      <div :class="$style.row">
        <Card3
          title="HappyGuest123"
          title1="Great stay with excellent facilities"
        />
        <div :class="$style.card">
          <div :class="$style.avatar" />
          <div :class="$style.cardInner">
            <div :class="$style.titleParent">
              <div :class="$style.title1">TravelerGuru</div>
              <div :class="$style.spacer">
                <img
                  :class="$style.innerSpacerIcon"
                  loading="lazy"
                  alt=""
                  src="/frame-427318817.svg"
                />
              </div>
            </div>
          </div>
          <div :class="$style.title2">
            Outstanding service and amenities provided
          </div>
        </div>
        <Card3
          title="VacationExplorer"
          title1="Perfect place for a family getaway"
        />
      </div>
      <img
        :class="$style.reviewsChild"
        loading="lazy"
        alt=""
        src="/vector-200-1.svg"
      />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Card3 from "./Card3.vue";

  export default defineComponent({
    name: "FrameComponent4",
    components: { Card3 },
  });
</script>
<style module>
  .image {
    height: 180px;
    flex: 1;
    position: relative;
    background-color: var(--color-gainsboro);
    min-width: 117px;
  }
  .title {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 48px;
    font-weight: 700;
    font-family: inherit;
  }
  .description {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
  }
  .reviewDetails {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
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
  .reviewContainer {
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
  .avatar {
    width: 32px;
    height: 32px;
    position: relative;
    border-radius: var(--br-13xl);
    background-color: var(--color-gray-300);
    overflow: hidden;
    flex-shrink: 0;
    display: none;
  }
  .title1 {
    flex: 1;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .innerSpacerIcon {
    align-self: stretch;
    height: 9.8px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .spacer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs-1) 0px 0px;
  }
  .titleParent {
    width: 292px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .cardInner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 0px var(--padding-21xl);
  }
  .title2 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
    line-height: 24px;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .card {
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
    font-size: var(--m3-label-large-size);
  }
  .reviewsChild {
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
    gap: 80px;
    max-width: 100%;
  }
  .reviewsParent {
    width: 100%;
    position: relative;
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
    font-family: var(--m3-label-large);
  }

  @media screen and (max-width: 1200px) {
    .reviewContainer {
      gap: var(--gap-11xl);
    }
  }
  @media screen and (max-width: 1050px) {
    .title {
      font-size: var(--m3-headline-large-size);
      line-height: 38px;
    }
  }
  @media screen and (max-width: 750px) {
    .title {
      font-size: var(--font-size-5xl);
      line-height: 29px;
    }

    .reviews {
      gap: var(--gap-xl);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .row {
      gap: var(--gap-xl);
    }

    .reviews {
      gap: var(--gap-21xl);
      padding: var(--padding-20xl) var(--padding-66xl) var(--padding-33xl);
      box-sizing: border-box;
    }

    .reviewsParent {
      padding-bottom: var(--padding-20xl);
      box-sizing: border-box;
    }
  }
</style>
