<template>
  <header :class="$style.sectionParent">
    <section />
    <div :class="$style.component2">
      <Button16 /><Button17 /><Button18 /><Property1Button4 /><Button19 />
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Section from "./Section.vue";
  import Button16 from "./Button16.vue";
  import Button17 from "./Button17.vue";
  import Button18 from "./Button18.vue";
  import Property1Button4 from "./Property1Button4.vue";
  import Button19 from "./Button19.vue";

  export default defineComponent({
    name: "FrameComponent10",
    components: {
      Section,
      Button16,
      Button17,
      Button18,
      Property1Button4,
      Button19,
    },
  });
</script>
<style module>
  .component2 {
    margin-top: -4px;
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
  }
  .sectionParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-507xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--text-size);
    color: var(--color-gray-100);
    font-family: var(--subtext);
  }

  @media screen and (max-width: 750px) {
    .sectionParent {
      gap: var(--gap-244xl);
    }
  }
  @media screen and (max-width: 450px) {
    .sectionParent {
      gap: var(--gap-112xl);
    }
  }
</style>
