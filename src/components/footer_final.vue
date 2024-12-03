<template>
  <footer class="footer">
    <div><img class="upraveno_logo" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /></div>
    <div class="container-footer">
      <div class="heading-2">Penzion Šmikmátor</div>
      <p class="description-footer subtext">...v srdci České Kanady</p>
    </div>
      <div class="button-container-footer">
        <router-link to="/o-ubytovani-3">
          <div class="button-nav"><div class="text-nav text">O ubytování</div></div></router-link>
        <router-link to="/okoli-2">
          <div class="button-nav"><div class="text-nav text">Okolí</div></div></router-link>
        <router-link to="/fotogalerie-1">
          <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div></router-link>
        <router-link to="/rezervace">
          <div class="button-nav"><div class="text-nav text">Rezervace</div></div></router-link>
        <router-link to="/kontakt-2">
          <div class="button-nav"><div class="text-nav text">Kontakt</div></div></router-link>
      </div>
  </footer>
</template>
<script>
import Container from "@/components/Container.vue";
export default {
  name: "FooterFinal",
  components: {
    Container,
  },
  props: ["upraveno_Logo112", "vector200"],
};
</script>
<style lang="sass">
@import '../../variables'
.upraveno_logo
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative

.button-container-footer
  align-items: flex-start
  display: flex
  flex-direction: column
  position: relative
  top: 20px
  padding-bottom: 60px
  height: fit-content
  overflow: hidden
  padding: 80px
  width: fit-content

.footer
  align-items: center
  background-color: transparent
  display: flex
  justify-content: center
  gap: 60px
  padding: 20px 80px
  position: relative
  width: 100%

.container-footer
  align-items: flex-start
  display: flex
  flex-direction: column
  position: relative

.description-footer
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative

@media (max-width: 468px)
  .footer
    flex-direction: column
    height: 100%
    width: 100%
    gap: 0px
  .upraveno_logo
    display: none
  .button-container-footer
    align-items: center
    justify-content: center
    height: fit-content
    justify-content: center
    overflow: hidden
    position: relative
    width: fit-content
    padding: 0px
  .container-footer
    align-items: center
    height: fit-content
    justify-content: center
    overflow: hidden
    position: relative
    width: fit-content
</style>