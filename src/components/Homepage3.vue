<template>
    <div class="screen">
        <navigace_final />
        <div class="page-item">
          <h1 class="heading-1">Vítejte u nás na penzionu</h1>
          <p class="heading-subtext subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est
            lorem ipsum</p>
          <div class="section-15">
            <router-link to="/rezervace">
                <div class="white-button heading-2">Rezervovat</div>
              </router-link
            ><router-link to="/kontakt-2">
                <div class="green-button heading-2">Kontakt</div>
              </router-link
            >
          </div>
          <div class="img-container">
            <img
                class="image"
                src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-1.png"
                alt="image 1"
            />
            <img
                class="image-2 image"
                src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-2.png"
                alt="image 2"
            />
            <img
                class="image-2 image"
                src="https://cdn.animaapp.com/projects/673b2aed8a1b7d25aab8cf0f/releases/673b2d66ac84e614e11f02a0/img/image-3.png"
                alt="image 3"
            />
          </div>
        </div>
        <div class="page-item">
          <div class="o-penzionu-mikmtor-2 valign-text-middle heading-2">{{ oPenzionuMikmtor }}</div>
          <div class="cards">
            <list :spolecnePrsotory021="list1Props.spolecnePrsotory021" :title="list1Props.title" />
            <list :spolecnePrsotory021="list2Props.spolecnePrsotory021" :title="list2Props.title" />
            <list :spolecnePrsotory021="list3Props.spolecnePrsotory021" :title="list3Props.title" />
          </div>
            <div class="icon-buttons-2">
              <router-link to="/o-ubytovani-3">
                  <div class="green-button subtext">Více informací</div>
                </router-link
              >
            </div>
        </div>
        <div class="page-item">
          <p class="zitky-a-aktivity-v-okol-2 heading-2">{{ zitkyAAktivityVOkol }}</p>
          <p class="lorem-ipsum-dolor-si-4 subtext">{{ loremIpsumDolorSi2 }}</p>
          <router-link to="/okoli-2">
              <div class="green-button subtext">Více informací</div>
            </router-link
          >
        </div>
        <footer class="footer-4">
          <img class="upraveno_logo-1-1-9" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container />
          <img class="vector-200" :src="vector200" alt="Vector 200" />
          <div class="component-1-4">
            <div class="button-container-9">
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
          </div>
        </footer>
    </div>
</template>

<script>
import ImgContainer from "./ImgContainer";
import List from "./List";
import Container from "./Container";
import xNav from "@/components/xNav.vue";
import xNav3 from "@/components/xNav3.vue";
import xNav2 from "@/components/xNav2.vue";
import xNav4 from "@/components/xNav4.vue";
import xNav5 from "@/components/xNav5.vue";
import Navigace_final from "@/components/navigace_final.vue";
export default {
  name: "Homepage3",
  components: {
    Navigace_final,
    xNav5, xNav4, xNav2, xNav3, xNav,
    ImgContainer,
    List,
    Container
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
    "zitkyAAktivityVOkol",
    "loremIpsumDolorSi2",
    "vceInformac2",
    "upraveno_Logo112",
    "vector200",
    "list1Props",
    "list2Props",
    "list3Props",
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
  padding: 20px
  position: relative
  width: 100%
  flex-wrap: wrap




.vtejte-u-ns-na-penzionu-2,
.o-penzionu-mikmtor-2,
.zitky-a-aktivity-v-okol-2
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative
  text-align: center
  white-space: nowrap

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

.image
  height: 250px
  object-fit: cover
  position: relative
  width: 33%
  padding: 20px

.img_container.section-16
  margin-left: -170.00px
  margin-right: -170.00px

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

.cards
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  gap: 67px
  padding: 20px 80px
  margin-left: -80px
  margin-right: -80px
  position: relative



.icon-buttons-2
  align-items: center
  display: flex
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

.footer-4
  align-items: center
  background-color: transparent
  display: flex
  gap: 20px
  height: 313px
  justify-content: center
  overflow: hidden
  padding: 20px 80px
  position: relative
  width: 1504px

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

.component-1-4
  border-radius: 5px
  height: 308px
  margin-bottom: -17.50px
  margin-top: -17.50px
  overflow: hidden
  position: relative
  width: 260px

.button-container-9
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px

@media (max-width: 480px)
  .lorem-ipsum-dolor-si-3
    font-size: 14px
    line-height: 1.3

@media (max-width: 768px)
  .img_container
    flex-direction: column
    gap: 20px
    margin-left: -20px
    margin-right: -20px
    padding: 20px
    width: calc(100% + 40px)
  .image-2
    display: none
  .image
    width: 100%

@media screen and (max-width: 991px)

  .navigace
    display: none !important
  .nav-header
    display: none
  .menu-1
    display: flex !important
  .section-15
    flex-direction: column
    gap: 8px
  .cards
    flex-direction: column
    gap: 20px
    padding: 20px 40px
    margin-left: 0
    margin-right: 0

@media screen and (min-width: 990px)
  .menu-1
    display: none
  .navigace
    display: flex

</style>
