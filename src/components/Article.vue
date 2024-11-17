<template>
  <div :class="$style.article">
    <div :class="$style.imageContainer4">
      <img :class="$style.imageIcon1" alt="" src="/image-11@2x.png" />
    </div>
    <div :class="$style.titleParent">
      <div :class="$style.title4">Společné prostory</div>
      <div :class="$style.subtitle">
        1 velká společenská místnost s kuchní, 1 místnost s TV
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Article",
  });
</script>
<style module>
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
  .title4 {
    align-self: stretch;
    position: relative;
    line-height: 44px;
    font-weight: 600;
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
    font-size: var(--text-size);
  }

  @media screen and (max-width: 450px) {
    .imageIcon1 {
      flex: 1;
    }

    .imageContainer4 {
      flex: 1;
    }

    .title4 {
      font-size: var(--font-size-base);
      line-height: 35px;
    }

    .article {
      flex-wrap: wrap;
    }
  }
</style>
