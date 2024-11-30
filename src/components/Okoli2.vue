<template>
  <div class="container-center-horizontal">
    <div class="screen">
      <div class="page">
        <div class="header">
          <router-link to="/"
          ><img class="logo" :src="upraveno_Logo111" alt="upraveno_logo (1) 1"
          /></router-link>
          <p class="nav-header valign-text-middle heading-2">{{ penzionVSrdciEskKanady }}</p>
          <div class="navigace">
            <div class="button-nav-container">
              <router-link to="/o-ubytovani-3">
                <div class="button-nav"><div class="text-nav text">O ubytování</div></div></router-link>
              <router-link to="/okoli-2">
                <div class="button-nav"><div class="text-nav text">Okolí</div></div></router-link>
              <router-link to="/fotogalerie-1">
                <div class="button-nav"><div class="text-nav text">Fotogalerie</div></div></router-link>
              <router-link to="/rezervace-3">
                <div class="property-1-button-23">
                  <div class="rezervace-nav-text fredoka-semi-bold-surf-16px">Rezervace</div>
                </div></router-link>
              <router-link to="/kontakt-2">
                <div class="button-nav"><div class="text-nav text">Kontakt</div></div></router-link>
            </div>
          </div>
        </div>
        <div class="section-33">
          <container4 :title="container4Props.title" :description="container4Props.description" />
          <image-container5 :src="imageContainer5Props.src" :className="imageContainer5Props.className" />
        </div>
        <div class="list-21">
          <div class="container-35">
            <div class="title-47 heading-1">{{ title1 }}</div>
          </div>
          <div class="list-22">
            <div class="row-11">
              <div class="item-9">
                <frame2 />
                <div class="frame-427318906-11">
                  <div class="title-48 roboto-bold-black-20px">{{ title2 }}</div>
                  <div class="subtitle-13 roboto-normal-black-16px-2">{{ subtitle1 }}</div>
                </div>
              </div>
              <div class="item-9">
                <frame3 />
                <frame42731890652 :title="frame427318906521Props.title" :subtitle="frame427318906521Props.subtitle" />
              </div>
              <div class="item-9">
                <frame4 />
                <frame42731890652 :title="frame427318906522Props.title" :subtitle="frame427318906522Props.subtitle" />
              </div>
            </div>
          </div>
          <div class="list-23">
            <div class="row-12">
              <div class="card-6">
                <div class="image-container-30">
                  <div class="image-15">
                    <div class="title-46 valign-text-middle roboto-normal-black-12px">{{ title3 }}</div>
                    <tag2 />
                  </div>
                </div>
                <div class="text-content-6">
                  <div class="subtitle-14 roboto-medium-black-20px">{{ subtitle2 }}</div>
                  <p class="title-49 roboto-normal-black-16px">
                    <span class="roboto-normal-black-16px">{{ spanText1 }}</span
                    ><span class="span1 roboto-normal-black-16px">{{ spanText2 }}</span
                    ><span class="roboto-normal-black-16px">{{ spanText3 }}</span>
                  </p>
                </div>
              </div>
              <div class="card-6">
                <div class="image-container-30">
                  <div class="image-15">
                    <div class="title-46 valign-text-middle roboto-normal-black-12px">{{ title4 }}</div>
                    <tag3 />
                  </div>
                </div>
                <text-content22 :subtitle="textContent221Props.subtitle" :title="textContent221Props.title" />
              </div>
              <div class="card-7">
                <div class="image-container-30">
                  <div class="image-15">
                    <div class="title-46 valign-text-middle roboto-normal-black-12px">{{ title5 }}</div>
                    <tag4 />
                  </div>
                </div>
                <text-content22 :subtitle="textContent222Props.subtitle" :title="textContent222Props.title" />
              </div>
            </div>
          </div>
        </div>
        <footer class="footer-12">
          <img class="upraveno_logo-1-1-26" :src="upraveno_Logo112" alt="upraveno_logo (1) 1" /><container />
          <div class="component-1-13">
            <div class="button-container-25">
              <component166 :oUbytovn="component166Props.oUbytovn" />
              <component167 :okol="component167Props.okol" />
              <component168 :fotogalerie="component168Props.fotogalerie" />
              <component169 :rezervace="component169Props.rezervace" />
              <component170 :kontakt="component170Props.kontakt" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Container4 from "./Container4";
import ImageContainer5 from "./ImageContainer5";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import Frame42731890652 from "./Frame42731890652";
import Frame4 from "./Frame4";
import Tag2 from "./Tag2";
import Tag3 from "./Tag3";
import TextContent22 from "./TextContent22";
import Tag4 from "./Tag4";
import Container from "./Container";
import Component166 from "./Component166";
import Component167 from "./Component167";
import Component168 from "./Component168";
import Component169 from "./Component169";
import Component170 from "./Component170";
export default {
  name: "Okoli2",
  components: {
    Container4,
    ImageContainer5,
    Frame2,
    Frame3,
    Frame42731890652,
    Frame4,
    Tag2,
    Tag3,
    TextContent22,
    Tag4,
    Container,
    Component166,
    Component167,
    Component168,
    Component169,
    Component170,
  },
  props: [
    "upraveno_Logo111",
    "penzionVSrdciEskKanady",
    "title1",
    "title2",
    "subtitle1",
    "title3",
    "subtitle2",
    "spanText1",
    "spanText2",
    "spanText3",
    "title4",
    "title5",
    "upraveno_Logo112",
    "container4Props",
    "imageContainer5Props",
    "frame427318906521Props",
    "frame427318906522Props",
    "textContent221Props",
    "textContent222Props",
    "component166Props",
    "component167Props",
    "component168Props",
    "component169Props",
    "component170Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.okoli-2
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1871px
  overflow: hidden
  width: 1512px

.page-4
  align-items: flex-end
  background-color: $white
  display: flex
  flex-direction: column
  position: relative
  width: 1512px

.heeader-2
  align-items: center
  align-self: stretch
  display: flex
  gap: 160px
  height: 156px
  justify-content: center
  padding: 60px 80px
  position: relative
  width: 100%

.upraveno_logo-1-1-25
  cursor: pointer
  height: 109px
  margin-bottom: -36.50px
  margin-left: -24.00px
  margin-top: -36.50px
  object-fit: cover
  position: relative
  width: 153px

.penzion-v-srdci-esk-kanady-5
  color: $black
  font-weight: 400
  height: 91px
  line-height: 44px
  margin-bottom: -26.50px
  margin-top: -28.50px
  position: relative
  text-align: center
  width: 454px

.navigace-10
  border-radius: 5px
  height: 84px
  margin-bottom: -24.00px
  margin-right: -24.00px
  margin-top: -24.00px
  overflow: hidden
  position: relative
  width: 473px

.button-container-24
  align-items: flex-end
  display: flex
  gap: 21px
  height: 44px
  left: 20px
  min-width: 433px
  position: relative
  top: 20px

.section-33
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 20px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.list-21
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px 80px
  position: relative
  width: 100%

.container-35
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 24px
  position: relative
  width: 100%

.title-47
  color: $black
  font-weight: 400
  line-height: 100px
  margin-top: -1.00px
  position: relative
  text-align: center
  width: 520px

.list-22
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  padding: 20px
  position: relative
  width: 100%

.row-11,
.row-12
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  gap: 40px
  position: relative
  width: 100%

.item-9
  align-items: center
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  gap: 20px
  justify-content: center
  padding: 12px 0px
  position: relative

.frame-427318906-11
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 8px
  position: relative
  width: 100%

.title-48
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative
  text-align: center

.subtitle-13
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative
  text-align: center

.list-23
  align-items: center
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 20px
  justify-content: center
  position: relative
  width: 100%

.card-6
  align-items: center
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  overflow: hidden
  position: relative

.image-container-30
  align-items: flex-start
  align-self: stretch
  display: flex
  height: 340px
  position: relative
  width: 100%

.image-15
  align-self: stretch
  background-color: $iron
  flex: 1
  flex-grow: 1
  position: relative

.title-46
  height: 16px
  left: 16px
  letter-spacing: 0
  line-height: 16px
  position: absolute
  text-align: center
  top: 161px
  white-space: nowrap
  width: 392px

.text-content-6
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 4px
  padding: 12px
  position: relative
  width: 100%

.subtitle-14
  align-self: stretch
  letter-spacing: 0
  line-height: 28px
  margin-top: -1.00px
  position: relative

.title-49
  align-self: stretch
  letter-spacing: 0
  line-height: 24px
  position: relative

.span1
  text-decoration: underline

.card-7
  align-items: center
  border: 1px solid
  border-color: $black-2
  border-radius: 6px
  display: flex
  flex: 1
  flex-direction: column
  flex-grow: 1
  height: 540px
  overflow: hidden
  position: relative

.footer-12
  align-items: center
  background-color: transparent
  display: flex
  gap: 60px
  height: 313px
  justify-content: center
  padding: 60px 170px
  position: relative
  width: 1504px

.upraveno_logo-1-1-26
  height: 109px
  object-fit: cover
  position: relative
  width: 153px

.component-1-13
  border-radius: 5px
  height: 308px
  margin-bottom: -57.50px
  margin-top: -57.50px
  overflow: hidden
  position: relative
  width: 260px

.button-container-25
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 20px
  min-height: 220px
  position: relative
  top: 20px
  width: 80px
</style>
