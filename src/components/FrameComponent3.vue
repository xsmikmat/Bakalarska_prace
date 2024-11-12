<template>
  <section :class="$style.cardContainerWrapper">
    <div :class="$style.cardContainer">
      <Card title="Rodinné zázemí" /><Card title="Krásná příroda" /><Card
        title="Široké vybavení"
      />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Card from "./Card.vue";

  export default defineComponent({
    name: "FrameComponent3",
    components: { Card },
  });
</script>
<style module>
  .cardContainer {
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .cardContainerWrapper {
    width: 1370px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--m3-body-small-size);
    color: var(--color-black);
    font-family: var(--m3-body-small);
  }

  @media screen and (max-width: 1200px) {
    .cardContainer {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
