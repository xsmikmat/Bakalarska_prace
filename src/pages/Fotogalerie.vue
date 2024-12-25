<template>
  <div class="screen">
    <navigace_final />
    <div class="contents">
      <div class="container">
        <div class="title heading-2">Apartmán u Třešně</div>
      </div>
        <div class="image-container-foto">
          <img class="foto-img" src="../../img/u-tresne-1.png" alt="U Tresne 02 1" />
          <img class="foto-img" src="../../img/u-tresne-02-1.png" alt="U Tresne 02 1" />
        </div>
        <div class="image-container-foto">
          <img class="foto-img" src="../../img/u-tresne05-1.png" alt="U Tresne 02 1" />
          <img class="foto-img" src="../../img/u-tresne-04-1.png" alt="U Tresne 02 1" />
        </div>
    </div>
    <div class="contents">
      <div class="container">
        <div class="title heading-2">Apartmán S Obrazem</div>
      </div>
      <div class="image-container-foto">
        <img class="foto-img" src="../../img/s-obrazem-1.png" alt="U Tresne 02 1" />
        <img class="foto-img" src="../../img/s-obrazem-02-1.png" alt="U Tresne 02 1" />
      </div>
      <div class="image-container-foto">
        <img class="foto-img" src="../../img/s-obrazem-03-1.png" alt="U Tresne 02 1" />
        <img class="foto-img" src="../../img/s-obrazem-05-1.png" alt="U Tresne 02 1" />
      </div>
    </div>
    <div class="contents">
      <div class="container">
        <div class="title heading-2">Ostatní prostory</div>
      </div>
      <div class="image-container-foto">
        <img class="foto-img" src="../../img/spolecne-prsotory-02-1.png" alt="U Tresne 02 1" />
        <img class="foto-img" src="../../img/img-2623-1-1.png" alt="U Tresne 02 1" />
      </div>
      <div class="image-container-foto">
        <img class="foto-img" src="../../img/spolecne-prsotory-03-1.png" alt="U Tresne 02 1" />
        <img class="foto-img" src="../../img/spolecne-prsotory-04-1.png" alt="U Tresne 02 1" />
      </div>
    </div>
        <footer-final />
  </div>

</template>

<script>
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";
export default {
  name: "Fotogalerie",
  components: {
    FooterFinal,
    Navigace_final,
  },
};
</script>

<style lang="sass">
@import '../../variables'
.image-container-foto
  display: flex
  flex-wrap: wrap
  gap: 10px
  width: 100%

.foto-img
  width: calc(50% - 5px)
  object-fit: cover
  height: 450px


.title
  color: $black
  font-weight: 400
  position: relative
  text-align: center

.contents
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 60px 170px
  position: relative
  width: 100%
@media (max-width: 480px)
  .image-container-foto
    flex-direction: column
    gap: 8px

  .foto-img
    width: 100%
    height: auto
    padding: 8px

  .contents
    padding: 20px
    gap: 0px
  .title
    margin-bottom: 8px
</style>
