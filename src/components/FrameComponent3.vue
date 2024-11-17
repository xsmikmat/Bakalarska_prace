<template>
  <section :class="$style.cardContainerParent">
    <div :class="$style.cardContainer">
      <Card title="Rodinné zázemí" :__PH1__="onButtonContainerClick" /><Card
        title="Krásná příroda"
        :__PH1__="onButtonContainerClick1"
      /><Card title="Široké vybavení" :__PH1__="onButtonContainerClick" />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Card from "./Card.vue";

  export default defineComponent({
    name: "FrameComponent3",
    components: { Card },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/o-ubytovn-mc14");
      },
      onButtonContainerClick1() {
        this.$router.push("/okol-mc14");
      },
    },
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
  .cardContainerParent {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .cardContainer {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>