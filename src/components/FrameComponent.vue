<template>
  <section :class="$style.sectionParent">
    <section />
    <div :class="$style.component1">
      <Button8 /><Button9 /><Button10 /><Property1Button2 /><Button11 />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Section from "./Section.vue";
  import Button8 from "./Button8.vue";
  import Button9 from "./Button9.vue";
  import Button10 from "./Button10.vue";
  import Property1Button2 from "./Property1Button2.vue";
  import Button11 from "./Button11.vue";

  export default defineComponent({
    name: "FrameComponent",
    components: {
      Section,
      Button8,
      Button9,
      Button10,
      Property1Button2,
      Button11,
    },
  });
</script>
<style module>
  .component1 {
    margin-top: -2px;
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
    margin-left: -493px;
  }
  .sectionParent {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
</style>
