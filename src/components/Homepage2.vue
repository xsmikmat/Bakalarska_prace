<template>
  <div class="container-center-horizontal">
    <div class="homepage-2 screen">
      <div class="section-11">
        <header class="header-3">
          <router-link to="/homepage-2"
            ><img class="upraveno_logo-1-1-5" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
          /></router-link>
          <div class="navigace-2">
            <div class="button-container-5">
              <navigace11 :oUbytovn="navigace11Props.oUbytovn" />
              <navigace12 :okol="navigace12Props.okol" />
              <navigace13 :fotogalerie="navigace13Props.fotogalerie" />
              <navigace14 :rezervace="navigace14Props.rezervace" />
              <navigace15 :kontakt="navigace15Props.kontakt" />
            </div>
          </div>
        </header>
        <div class="section-9">
          <h1 class="vtejte-u-ns-na-penzionu-1 valign-text-middle heading-1">Vítejte u nás na penzionu</h1>
          <p class="lorem-ipsum-dolor-si-1 subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum</p>
          <div class="section-10">
            <router-link to="/rezervace-3">
              <div class="button-24">
                <div class="rezervovat-1 heading-2">{{ rezervovat }}</div>
              </div></router-link
            ><router-link to="/kontakt-2">
              <div class="button-23">
                <div class="kontakt-6 heading-2">{{ kontakt }}</div>
              </div></router-link
            >
          </div>
          <div class="section-10">
            <img class="image-1-1" :src="image1" alt="image 1" /><img class="image-3" :src="image3" alt="image 3" />
          </div>
        </div>
        <div class="section-9">
          <div class="o-penzionu-mikmtor-1 valign-text-middle heading-1">{{ oPenzionuMikmtor }}</div>
          <div class="section-12">
            <div class="list-1">
              <div class="card-2">
                <div class="image-container-4">
                  <img class="spolecne-prsotory-02-1-1" :src="spolecnePrsotory021" alt="Spolecne prsotory 02 1" />
                </div>
                <div class="text-content-1">
                  <div class="title-13 heading-2">{{ title1 }}</div>
                  <p class="subtitle-1 valign-text-middle text">{{ subtitle1 }}</p>
                </div>
              </div>
            </div>
            <div class="list-2">
              <div class="card-1">
                <div class="image-container-4">
                  <img class="spolecne-prsotory-03-1" :src="spolecnePrsotory031" alt="Spolecne prsotory 03 1" />
                </div>
                <div class="text-content-1">
                  <div class="title-13 heading-2">{{ title2 }}</div>
                  <p class="subtitle-1 valign-text-middle text">{{ subtitle2 }}</p>
                </div>
              </div>
            </div>
            <div class="list-3">
              <div class="card-1">
                <div class="image-container-4"><img class="okoli-07-1" :src="okoli071" alt="okoli 07 1" /></div>
                <div class="text-content-1">
                  <div class="title-13 heading-2">{{ title3 }}</div>
                  <p class="subtitle-1 valign-text-middle text">{{ subtitle3 }}</p>
                </div>
              </div>
            </div>
            <div class="icon-buttons-1">
              <router-link to="/o-ubytovani-3">
                <div class="button-23">
                  <div class="vce-informac-1 subtext">{{ vceInformac1 }}</div>
                </div></router-link
              >
            </div>
          </div>
        </div>
        <div class="section-13">
          <p class="zitky-a-aktivity-v-okol-1 heading-1">{{ zitkyAAktivityVOkol }}</p>
          <p class="lorem-ipsum-dolor-si-2 subtext">{{ loremIpsumDolorSi2 }}</p>
          <router-link to="/okoli-2">
            <div class="button-23">
              <div class="vce-informac-1 subtext">{{ vceInformac2 }}</div>
            </div></router-link
          >
        </div>
        <footer class="footer-3">
          <img class="upraveno_logo-1-1-6" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container2 />
          <div class="component-1-3">
            <div class="button-container-6">
              <component116 :oUbytovn="component116Props.oUbytovn" />
              <component117 :okol="component117Props.okol" />
              <component118 :fotogalerie="component118Props.fotogalerie" />
              <component119 :rezervace="component119Props.rezervace" />
              <component120 :kontakt="component120Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navigace11 from "./Navigace11";
import Navigace12 from "./Navigace12";
import Navigace13 from "./Navigace13";
import Navigace14 from "./Navigace14";
import Navigace15 from "./Navigace15";
import Container2 from "./Container2";
import Component116 from "./Component116";
import Component117 from "./Component117";
import Component118 from "./Component118";
import Component119 from "./Component119";
import Component120 from "./Component120";
export default {
  name: "Homepage2",
  components: {
    Navigace11,
    Navigace12,
    Navigace13,
    Navigace14,
    Navigace15,
    Container2,
    Component116,
    Component117,
    Component118,
    Component119,
    Component120,
  },
  props: [
    "upraveno_Logo111",
    "loremIpsumDolorSi1",
    "rezervovat",
    "kontakt",
    "image1",
    "image3",
    "oPenzionuMikmtor",
    "spolecnePrsotory021",
    "title1",
    "subtitle1",
    "spolecnePrsotory031",
    "title2",
    "subtitle2",
    "okoli071",
    "title3",
    "subtitle3",
    "vceInformac1",
    "zitkyAAktivityVOkol",
    "loremIpsumDolorSi2",
    "vceInformac2",
    "upraveno_Logo112",
    "navigace11Props",
    "navigace12Props",
    "navigace13Props",
    "navigace14Props",
    "navigace15Props",
    "component116Props",
    "component117Props",
    "component118Props",
    "component119Props",
    "component120Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.homepage-2
  align-items: flex-start
  background-color: $white
  display: flex
  height: 2385px
  width: 1100px

.section-11
  align-items: center
  display: flex
  flex-direction: column
  padding: 20px 0px
  position: relative
  width: 1100px

.header-3
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  justify-content: space-between
  padding: 0px 100px
  position: relative
  width: 100%

.upraveno_logo-1-1-5
  cursor: pointer
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.navigace-2
  border-radius: 5px
  height: 84px
  overflow: hidden
  position: relative
  width: 473px

.button-container-5
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.section-9
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  padding: 20px 40px
  position: relative
  width: 100%

.vtejte-u-ns-na-penzionu-1,
.o-penzionu-mikmtor-1,
.zitky-a-aktivity-v-okol-1
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative
  text-align: center
  white-space: nowrap
  width: fit-content

.lorem-ipsum-dolor-si-1
  color: $gray
  font-weight: 600
  height: 120px
  line-height: 44px
  position: relative
  text-align: center
  width: 990px

.section-10
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 100px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.button-24
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

.rezervovat-1
  color: $fun-green
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.button-23
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

.kontakt-6
  color: $surf
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 172px

.image-1-1
  height: 250px
  object-fit: cover
  position: relative
  width: 398px

.image-3
  height: 250px
  object-fit: cover
  position: relative
  width: 364px

.section-12
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-wrap: wrap
  gap: 40px 40px
  justify-content: center
  overflow: hidden
  padding: 20px 40px
  position: relative
  width: 100%

.list-1
  align-items: center
  display: flex
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 271px

.card-2
  align-items: center
  align-self: stretch
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex-direction: column
  height: 556px
  overflow: hidden
  position: relative
  width: 100%

.image-container-4
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 340px
  overflow: hidden
  position: relative
  width: 100%

.spolecne-prsotory-02-1-1,
.spolecne-prsotory-03-1,
.okoli-07-1
  height: 340px
  object-fit: cover
  position: relative
  width: 340px

.text-content-1
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  padding: 12px
  position: relative
  width: 100%

.title-13
  align-self: stretch
  color: $black
  font-weight: 400
  line-height: 44px
  margin-top: -1.00px
  position: relative

.subtitle-1
  align-self: stretch
  color: $gray
  font-weight: 400
  height: 144px
  line-height: 15px
  position: relative

.list-2
  align-items: center
  display: flex
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 268px

.card-1
  align-items: center
  align-self: stretch
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 0 0 auto
  flex-direction: column
  overflow: hidden
  position: relative
  width: 100%

.list-3
  align-items: center
  display: flex
  flex-direction: column
  gap: 40px
  justify-content: center
  position: relative
  width: 277px

.icon-buttons-1
  align-items: center
  display: flex
  gap: 8px
  justify-content: center
  margin-left: -160.00px
  margin-right: -40.00px
  position: relative
  width: 1260px

.vce-informac-1
  color: $surf
  font-weight: 600
  line-height: 44px
  margin-top: -1.00px
  position: relative
  white-space: nowrap
  width: fit-content

.section-13
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 40px
  padding: 20px 40px
  position: relative
  width: 100%

.lorem-ipsum-dolor-si-2
  align-self: stretch
  color: $gray
  font-weight: 600
  line-height: 44px
  position: relative
  text-align: center

.footer-3
  align-items: center
  align-self: stretch
  background-color: transparent
  display: flex
  flex: 0 0 auto
  gap: 20px
  justify-content: center
  padding: 20px 40px
  position: relative
  width: 100%

.upraveno_logo-1-1-6
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.component-1-3
  border-radius: 5px
  height: 250px
  overflow: hidden
  position: relative
  width: 200px

.button-container-6
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
