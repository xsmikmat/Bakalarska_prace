<template>
  <section :class="$style.frameParent">
    <div :class="$style.component1Wrapper">
      <div :class="$style.component1">
        <Button20 /><Button21 /><Button22 /><Property1Button5 /><Button23 />
      </div>
    </div>
    <section />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Button20 from "./Button20.vue";
  import Button21 from "./Button21.vue";
  import Button22 from "./Button22.vue";
  import Property1Button5 from "./Property1Button5.vue";
  import Button23 from "./Button23.vue";
  import Section from "./Section.vue";

  export default defineComponent({
    name: "FrameComponent6",
    components: {
      Button20,
      Button21,
      Button22,
      Property1Button5,
      Button23,
      Section,
    },
  });
</script>
<style module>
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
    z-index: 1;
  }
  .component1Wrapper {
    margin-top: -82px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frameParent {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-61xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 750px) {
    .frameParent {
      height: auto;
    }
  }
  @media screen and (max-width: 450px) {
    .frameParent {
      padding-top: var(--padding-33xl);
      box-sizing: border-box;
    }
  }
</style>
