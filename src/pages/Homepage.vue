<template>
  <div class="screen">
    <navigace_final/>
    <div class="page-item">
      <h1 class="heading-1">Penzion v srdci České Kanady</h1>
      <p class="heading-subtext subtext">
        Hledáte klid, samotu a relaxaci, jste turisté, cyklisté, rodiny s dětmi, chcete prožít víkend nebo pár dní s
        přáteli uprostřed přírody? Vítejte u nás.</p>
      <div class="section-15">
        <router-link to="/rezervace">
          <div class="white-button heading-2">Rezervovat</div>
        </router-link
        >
        <router-link to="/kontakt">
          <div class="green-button heading-2">Kontakt</div>
        </router-link
        >
      </div>
      <div class="img-container">
        <img class="image"
             src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-1.png"
             alt="image 1"/>
        <img class="image-2 image"
             src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-2.png"
             alt="image 2"/>
        <img class="image-2 image"
             src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-3.png"
             alt="image 3"/>
      </div>
    </div>
    <div class="page-item">
      <div class="heading-2">O penzionu Šmikmátor</div>
      <div class="lists">
        <list :spolecnePrsotory021="list1Props.spolecnePrsotory021" :title="list1Props.title"/>
        <list :spolecnePrsotory021="list2Props.spolecnePrsotory021" :title="list2Props.title"/>
        <list :spolecnePrsotory021="list3Props.spolecnePrsotory021" :title="list3Props.title"/>
      </div>
      <div class="icon-buttons-2">
        <router-link to="/o-ubytovani">
          <div class="green-button subtext">Více informací</div>
        </router-link
        >
      </div>
    </div>
    <div class="page-item">
      <p class="zitky-a-aktivity-v-okol-2 heading-2">Zážitky a aktivity v okolí</p>
      <p class="lorem-ipsum-dolor-si-4 subtext">
        Česká kanada představuje pro milovníky přírody a naší nádherné krajiny příležitost plně si prožít své koníčky a
        zájmy. Připravili jsme proto tipy pro všechny kdo se k nám chystají. Je jedno zda jste plavec, cyklista, houbař
        nebo turista.
      </p>
      <router-link to="/okoli">
        <div class="green-button subtext">Více informací</div>
      </router-link
      >
    </div>
    <footer-final/>
  </div>
</template>

<script>
import ImgContainer from "../components/ImgContainer.vue";
import List from "../components/List.vue";
import Navigace_final from "@/components/navigace_final.vue";
import FooterFinal from "@/components/footer_final.vue";

export default {
  name: "Homepage",
  components: {
    FooterFinal,
    Navigace_final,
    ImgContainer,
    List
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
  props: [
    "upraveno_Logo111",
    "penzionVSrdciEskKanady",
    "loremIpsumDolorSi1",
    "rezervovat",
    "kontakt",
    "oPenzionuMikmtor",
    "vceInformac1",
    "list1Props",
    "list2Props",
    "list3Props"
  ],
};
</script>

<style lang="sass">
@import '../../variables'


.menu-1
  cursor: pointer
  height: 24px
  position: relative
  width: 24px

.page-item
  align-items: center
  justify-content: center
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  padding: 20px 80px
  position: relative
  width: 100%

.heading-subtext
  color: $gray
  font-weight: 600
  position: relative
  text-align: center
  margin: 0 auto

.img_container
  align-items: center
  display: flex
  height: auto
  justify-content: center
  overflow: hidden
  position: relative
  width: 100%

.image
  height: 250px
  object-fit: cover
  position: relative
  width: 33%
  padding: 20px

.section-15
  align-items: center
  display: flex
  flex: 0 0 auto
  gap: 50px
  justify-content: center
  position: relative
  width: 100%

.white-button
  align-items: center
  background-color: $white
  border: 1px solid
  border-color: $fun-green
  border-radius: 10px
  cursor: pointer
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  overflow: hidden
  padding: 10px 25px
  position: relative
  color: $fun-green
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  white-space: nowrap
  width: fit-content

.green-button
  align-items: center
  background-color: $fun-green
  border-radius: 10px
  cursor: pointer
  display: inline-flex
  flex: 0 0 auto
  gap: 10px
  justify-content: center
  overflow: hidden
  padding: 10px 25px
  position: relative
  color: $surf
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  text-align: center
  width: fit-content

.lists
  align-items: center
  display: flex
  flex-direction: row
  gap: 40px
  justify-content: center
  position: relative
  width: 80%

.icon-buttons-2
  align-items: center
  display: flex
  flex-direction: row
  gap: 8px
  justify-content: center
  margin-bottom: -6.50px
  position: relative
  width: 1260px

.vce-informac-2
  color: $surf
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.lorem-ipsum-dolor-si-4
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center


.upraveno_logo-1-1-9
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.vector-200
  height: 1px
  left: 1125px
  object-fit: cover
  position: absolute
  top: -92px
  width: 1504px


@media (max-width: 480px)
  .page-item
    align-items: center
    justify-content: center
    display: flex
    flex: 0 0 auto
    flex-direction: column
    gap: 8px
    padding: 20px 20px
    position: relative
    width: 100%
  .heading-1
    font-size: 36px !important
    font-weight: 200 !important
    line-height: 44px
    margin-top: -1.00px
    position: relative
    text-align: center
  .heading-2
    font-size: 24px !important
    font-weight: 200 !important
    line-height: 24px
    margin-top: -1.00px
    position: relative
    text-align: center
    flex-wrap: wrap

  .subtext
    font-size: 16px !important
    font-weight: 200 !important
    line-height: 24px
    margin-top: -1.00px
    position: relative
    text-align: center
  .section-15
    gap: 8px
    flex-direction: column
    padding: 8px
    position: relative
    width: 100%
  .white-button, .green-button
    font-size: 16px !important
    line-height: 16px
    margin-top: -1.00px
    padding: 10px 25px
    position: relative
    white-space: nowrap
  .image-2
    display: none
  .img_container
    flex-direction: column
    padding: 8px
    position: relative
    width: 100%
  .image
    height: 250px
    object-fit: cover
    position: relative
    width: 100%
    padding: 8px
  .lists
    flex-direction: column
    width: 100%
    padding: 8px
    gap: 8px
  .card
    width: 100%
    height: fit-content
    margin: 8px
  .image-container-5
    height: 150px
  .spolecne-prsotory-02-1-2,
  .spolecne-prsotory-03-1-1,
  .okoli-07-1-1
    height: 150px


@media (max-width: 1100px)

</style>
